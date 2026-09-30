import type { Metadata } from "next";
import Image from "next/image";
import { Conteneur } from "@/components/ui";
import { BoutonImprimer } from "@/components/BoutonImprimer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV numérique",
  description: "CV de Mornex Bakeyta : professeur de dessin, graphiste designer, illustrateur et animateur 2D à Lomé.",
};

const experiences = [
  {
    periode: "Depuis février 2024",
    titre: "Professeur de dessin technique et de calcul de spécialité",
    lieu: "Institut Polyvalent et Laïc « Les Dinosaures », Légbassito, Lomé",
    texte: "Enseignement du dessin technique et du calcul de spécialité aux apprenants du CAP Maçonnerie.",
  },
  {
    periode: "Depuis 2018",
    titre: "Graphiste designer et illustrateur indépendant",
    lieu: "Lomé",
    texte:
      "Logos, affiches, flyers, cartes de visite, badges, visuels pour t-shirts et posters, character design et environment design. Clients : AGED-Togo, Association Nonvignon des Adjats Bénin-Togo, Salon Rose Esthétique.",
  },
  {
    periode: "Depuis 2025",
    titre: "Fondateur de l'Orinu et de l'Atelier Origuna",
    lieu: "Lomé",
    texte:
      "Création du concept de BD africaine moderne, de sa mascotte et de l'Orinu Day. Cours de BD Orinu et d'animation 2D à l'Atelier Origuna. Auteur d'un programme de dessin pour le BEPC et le BAC (2026).",
  },
];

const formations = [
  { periode: "2023", titre: "Baccalauréat F4, génie civil", texte: "Conception de plans, génie civil, conduite de travaux." },
  { periode: "2023", titre: "Formation en sérigraphie", texte: "Benis Media Production, en partenariat avec Campus pour Christ, Lomé." },
  { periode: "Depuis 2012", titre: "Dessin, illustration et animation", texte: "Pratique autodidacte continue." },
];

const competences = [
  ["Dessin d'art", "Observation, perspective, composition, valeurs"],
  ["Dessin technique", "Plans de bâtiment, lecture de plans, métré"],
  ["Pédagogie", "Progressions, évaluation, préparation aux examens"],
  ["Graphisme", "Logos, affiches, print, identité visuelle"],
  ["Illustration et 2D", "BD, personnages, décors, animation"],
  ["Vidéo et réseaux", "Montage, community management, rédaction"],
];

export default function CV() {
  return (
    <>
      <section className="bg-rouge print:hidden">
        <Conteneur className="flex flex-col justify-between gap-6 py-12 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/85">CV numérique</p>
            <h1 className="font-display text-6xl uppercase leading-none sm:text-7xl">
              Mornex <span className="text-jaune">Bakeyta</span>
            </h1>
          </div>
          <BoutonImprimer />
        </Conteneur>
      </section>

      <section className="bg-craie text-encre print:bg-white">
        <Conteneur className="grid gap-8 py-12 lg:grid-cols-[22rem_1fr] print:py-0">
          <aside className="flex flex-col gap-8 rounded-[2rem] bg-prune p-8 text-white print:rounded-none">
            <Image
              src="/images/portrait-cv.webp"
              alt="Photo de Mornex Bakeyta"
              width={618}
              height={800}
              className="mx-auto size-48 rounded-full border-4 border-jaune object-cover object-[center_25%]"
            />
            <div className="flex flex-col gap-1 text-center">
              <p className="font-display text-3xl uppercase">Mornex Bakeyta</p>
              <p className="text-sm text-white/75">{site.nomCivil}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl uppercase text-jaune">Contact</h2>
              <span>{site.quartier}</span>
              <span>WhatsApp&nbsp;: {site.telephone}</span>
              <span className="break-all">{site.email}</span>
              <span>TikTok et Instagram&nbsp;: @mornex_bakeyta</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl uppercase text-jaune">Outils</h2>
              <ul className="flex flex-wrap gap-2">
                {["Photoshop", "Canva", "IA générative", "Word", "PowerPoint", "Sérigraphie"].map((o) => (
                  <li key={o} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl uppercase text-jaune">Centres d&apos;intérêt</h2>
              <p className="leading-relaxed text-white/85">Cosplay, BD africaine, manga et animé, cinéma africain.</p>
            </div>
            <p className="mt-auto font-marker text-2xl text-jaune">{site.slogan}</p>
          </aside>

          <div className="flex flex-col gap-10 py-2">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-3xl uppercase text-violet">Profil</h2>
              <p className="text-lg leading-relaxed text-encre/80">
                Professeur de dessin et graphiste designer, titulaire d&apos;un Bac F4 en génie civil et formé à la
                sérigraphie. J&apos;enseigne le dessin technique depuis février 2024 et je prépare les élèves à
                l&apos;épreuve facultative de dessin du BEPC et du baccalauréat. Fondateur de l&apos;Orinu, je défends
                une création africaine authentique.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display text-3xl uppercase text-violet">Expérience</h2>
              {experiences.map((e) => (
                <div key={e.titre} className="grid gap-2 sm:grid-cols-[11rem_1fr]">
                  <span className="font-bold text-rouge">{e.periode}</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-lg">{e.titre}</strong>
                    <span className="text-sm font-medium text-encre/60">{e.lieu}</span>
                    <p className="leading-relaxed text-encre/80">{e.texte}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display text-3xl uppercase text-violet">Formation</h2>
              {formations.map((f) => (
                <div key={f.titre} className="grid gap-2 sm:grid-cols-[11rem_1fr]">
                  <span className="font-bold text-rouge">{f.periode}</span>
                  <div className="flex flex-col gap-1">
                    <strong className="text-lg">{f.titre}</strong>
                    <p className="leading-relaxed text-encre/80">{f.texte}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-3xl uppercase text-violet">Compétences</h2>
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {competences.map(([titre, detail]) => (
                  <li key={titre} className="rounded-2xl bg-white p-5 ring-1 ring-encre/10">
                    <strong>{titre}</strong>
                    <p className="mt-1 text-sm leading-relaxed text-encre/70">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Conteneur>
      </section>
    </>
  );
}
