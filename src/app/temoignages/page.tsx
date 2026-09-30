import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnTetePage } from "@/components/EnTetePage";
import { AppelFinal, Conteneur, GrandTitre, Surtitre } from "@/components/ui";
import { Champ, Formulaire, Zone } from "@/components/Formulaire";
import { baseDeDonnees } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Preuves et témoignages",
  description: "Clients, établissements et événements qui ont fait confiance à Mornex Bakeyta, et avis de ses élèves et clients.",
};

// Les avis validés sont relus à chaque visite.
export const dynamic = "force-dynamic";

type Avis = { nom: string; role: string; texte: string; note: number };

async function avisPublies(): Promise<Avis[]> {
  try {
    const db = await baseDeDonnees();
    if (!db) return [];
    const docs = await db.collection("avis").find({ publie: true }).sort({ recuLe: -1 }).limit(12).toArray();
    return docs.map((d) => ({ nom: d.nom, role: d.role, texte: d.texte, note: d.note }));
  } catch {
    return [];
  }
}

const preuves = [
  {
    titre: "IPL « Les Dinosaures »",
    texte: "Professeur de dessin technique et de calcul de spécialité depuis février 2024 (attestation de travail délivrée en 2025).",
    lien: "/cv",
  },
  { titre: "AGED-Togo", texte: "Logo et identité visuelle, du croquis aux déclinaisons.", lien: "/realisations/aged-togo" },
  { titre: "Association Nonvignon", texte: "Logo de l'Association Nonvignon des Adjats Bénin-Togo.", lien: "/realisations/association-nonvignon" },
  { titre: "Salon Rose Esthétique", texte: "Fiche tarifaire et contrat de formation.", lien: "/realisations/rose-esthetique" },
  { titre: "Foire otaku, Factory Grill & Pill", texte: "Lancement public de l'Orinu en cosplay, le 27 décembre 2025.", lien: "/realisations/mornex-bakeyta-personnage" },
  { titre: "Orinu Day", texte: "Identité de la première édition : badges Staff, Membre et Média.", lien: "/realisations/orinu-day" },
];

export default async function Temoignages() {
  const avis = await avisPublies();

  return (
    <>
      <EnTetePage
        surtitre="Preuves et témoignages"
        titre="Ils m'ont fait"
        accent="confiance"
        texte="Des clients, un établissement scolaire et des événements. Et bientôt, vos avis."
      />

      <section className="bg-craie text-encre">
        <Conteneur className="flex flex-col gap-10 py-20">
          <GrandTitre>Références</GrandTitre>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {preuves.map((p) => (
              <li key={p.titre}>
                <Link href={p.lien} className="flex h-full flex-col gap-3 rounded-3xl bg-white p-7 ring-1 ring-encre/10 transition hover:-translate-y-1 hover:ring-violet">
                  <strong className="font-display text-2xl uppercase text-violet">{p.titre}</strong>
                  <span className="leading-relaxed text-encre/75">{p.texte}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Conteneur>
      </section>

      {avis.length > 0 && (
        <section className="bg-violet">
          <Conteneur className="flex flex-col gap-10 py-20">
            <GrandTitre>Ce qu&apos;ils en disent</GrandTitre>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {avis.map((a) => (
                <li key={a.nom + a.texte.slice(0, 20)} className="flex flex-col gap-4 rounded-3xl bg-prune p-8">
                  <span className="text-jaune" aria-label={`Note de ${a.note} sur 5`}>
                    {"★".repeat(a.note)}
                    <span className="text-white/25">{"★".repeat(5 - a.note)}</span>
                  </span>
                  <p className="flex-1 text-lg leading-relaxed">« {a.texte} »</p>
                  <p>
                    <strong>{a.nom}</strong> · <span className="text-white/75">{a.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Conteneur>
        </section>
      )}

      <section className="bg-prune">
        <Conteneur className="grid gap-12 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Surtitre>Vous avez travaillé avec moi&nbsp;?</Surtitre>
            <GrandTitre>Laissez votre avis</GrandTitre>
            <p className="text-lg leading-relaxed text-white/85">
              Élève, parent, client ou partenaire : votre avis aide d&apos;autres personnes à me faire confiance. Il
              apparaîtra ici après ma relecture.
            </p>
            <Image
              src="/images/masque-atelier.webp"
              alt="Mornex Bakeyta masqué"
              width={810}
              height={1080}
              className="hidden w-64 rounded-3xl lg:block"
            />
          </div>
          <div className="rounded-[2rem] bg-craie p-8 text-encre sm:p-10">
            <Formulaire action="/api/avis" libelleEnvoi="Envoyer mon avis" messageSucces="Merci ! Votre avis sera publié après relecture.">
              <Champ label="Votre nom" name="nom" placeholder="Prénom et nom" />
              <Champ label="Qui êtes-vous ?" name="role" placeholder="Élève de l'Atelier Origuna, client…" />
              <label className="flex flex-col gap-2 font-bold">
                Votre note
                <select name="note" defaultValue="5" className="min-h-13 rounded-2xl border-2 border-encre/15 bg-white px-4 text-base">
                  <option value="5">5 : excellent</option>
                  <option value="4">4 : très bien</option>
                  <option value="3">3 : bien</option>
                  <option value="2">2 : moyen</option>
                  <option value="1">1 : décevant</option>
                </select>
              </label>
              <Zone label="Votre avis" name="texte" placeholder="Ce que vous avez apprécié, le résultat obtenu…" />
            </Formulaire>
          </div>
        </Conteneur>
      </section>

      <AppelFinal titre="À vous d'écrire la suite" />
    </>
  );
}
