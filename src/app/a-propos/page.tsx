import type { Metadata } from "next";
import Image from "next/image";
import { AppelFinal, BoutonLien, Conteneur, GrandTitre, Surtitre } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mornex Bakeyta, né en 2003 au Togo : dessinateur depuis 2012, professeur de dessin, graphiste designer et fondateur de l'Orinu.",
};

const parcours = [
  ["2003", "Naissance au Togo."],
  ["2012", "Premiers dessins, à l'école primaire."],
  ["2018", "Premiers pas professionnels en dessin et en graphisme."],
  ["2023", "Baccalauréat F4 en génie civil, puis formation en sérigraphie (Benis Media Production)."],
  ["2024", "Professeur de dessin technique et de calcul de spécialité à l'IPL « Les Dinosaures », à Lomé."],
  ["2025", "Naissance du nom Orinu, puis lancement en cosplay à la foire otaku du Factory Grill & Pill (27 décembre)."],
  ["2026", "Orinu Day, Atelier Origuna et programme de dessin pour le BEPC et le BAC."],
];

const valeurs = [
  ["Authenticité", "Des créations enracinées dans nos cultures. Pas des copies."],
  ["Transmission", "Former celles et ceux qui dessineront l'Afrique de demain."],
  ["Discipline", "Tenir ses délais et soigner chaque détail, projet après projet."],
];

export default function APropos() {
  return (
    <>
      <section className="relative overflow-hidden bg-rouge">
        <Conteneur className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <Image
              src="/images/portrait-studio.webp"
              alt="Portrait de Mornex Bakeyta au bonnet violet"
              fill
              preload
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-6 -right-4 w-40 overflow-hidden rounded-3xl border-4 border-jaune sm:w-48">
              <Image src="/images/masque-atelier.webp" alt="Mornex Bakeyta sous son masque" width={810} height={1080} className="h-auto w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Surtitre className="text-white/85">À propos</Surtitre>
            <h1 className="font-display uppercase leading-[0.85] text-[clamp(3.5rem,9vw,7.5rem)]">
              Mornex Bakeyta, <span className="text-jaune">c&apos;est qui&nbsp;?</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Je suis dessinateur, graphiste designer et professeur de dessin, né en 2003 au Togo. Je dessine depuis
              l&apos;école primaire. Aujourd&apos;hui, je crée pour les marques, je forme des élèves et je construis
              l&apos;Orinu, la BD africaine moderne.
            </p>
            <p className="font-marker text-2xl text-jaune sm:text-3xl">« Toujours foncer et ne jamais lâcher. »</p>
          </div>
        </Conteneur>
      </section>

      <section className="bg-craie text-encre">
        <Conteneur className="grid gap-12 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <GrandTitre>Un nom, une mission</GrandTitre>
            <div className="flex flex-col gap-4">
              <p className="flex flex-wrap items-baseline gap-4 rounded-3xl bg-white p-6 text-lg ring-1 ring-encre/10">
                <span className="font-display text-4xl text-violet">MORNEX</span> signifie <strong>renaissance</strong>.
              </p>
              <p className="flex flex-wrap items-baseline gap-4 rounded-3xl bg-white p-6 text-lg ring-1 ring-encre/10">
                <span className="font-display text-4xl text-rouge">BAKEYTA</span> signifie <strong>guerrier du baobab</strong>.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-encre/80">
            <p>
              Après un Bac F4 en génie civil, j&apos;aurais voulu entrer dans une école d&apos;art. Cette filière
              n&apos;existait pas pour moi, alors j&apos;ai décidé de construire la mienne.
            </p>
            <p>
              Ma mission : former les futurs bédéistes et illustrateurs africains, avec une méthode à la fois
              pédagogique et professionnelle. L&apos;Afrique a déjà ses histoires et ses symboles ; il lui manque la
              structure, la discipline et la transmission.
            </p>
            <p>Je ne veux pas africaniser des modèles étrangers. Je veux créer une vraie BD africaine.</p>
          </div>
        </Conteneur>
      </section>

      <section className="bg-prune">
        <Conteneur className="flex flex-col gap-12 py-20">
          <GrandTitre>Mon parcours</GrandTitre>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {parcours.map(([annee, texte]) => (
              <li key={annee} className="flex flex-col gap-2 border-t-2 border-violet-vif pt-4">
                <span className="font-display text-4xl text-jaune">{annee}</span>
                <span className="leading-relaxed text-white/85">{texte}</span>
              </li>
            ))}
          </ol>
        </Conteneur>
      </section>

      <section className="bg-violet">
        <Conteneur className="flex flex-col gap-10 py-20">
          <GrandTitre>Ce qui me guide</GrandTitre>
          <div className="grid gap-5 md:grid-cols-3">
            {valeurs.map(([titre, texte]) => (
              <div key={titre} className="flex flex-col gap-3 rounded-3xl bg-prune p-8">
                <strong className="font-display text-3xl uppercase text-jaune">{titre}</strong>
                <span className="text-lg leading-relaxed text-white/85">{texte}</span>
              </div>
            ))}
          </div>
        </Conteneur>
      </section>

      <section className="bg-encre">
        <Conteneur className="grid gap-12 py-20 lg:grid-cols-[24rem_1fr]">
          <div className="flex flex-col justify-center gap-5">
            <Surtitre>Ma passion</Surtitre>
            <GrandTitre>Incarner mes personnages</GrandTitre>
            <p className="text-lg leading-relaxed text-white/85">
              Le cosplay nourrit ma créativité : je donne vie aux personnages que je dessine, comme la mascotte de
              l&apos;Orinu. Mes inspirations : Black Panther, Kirikou, Vaiana et les films ibo nigérians.
            </p>
            <BoutonLien href="/realisations/mornex-bakeyta-personnage" className="self-start">
              L&apos;histoire du personnage
            </BoutonLien>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/character-sheet-mornex-1.webp" alt="Planche de personnage Mornex Bakeyta" width={1214} height={1295} className="h-auto w-full rounded-3xl" />
            <Image src="/images/portrait-debout.webp" alt="Mornex Bakeyta debout, manteau noir et lunettes" width={900} height={1200} className="h-full w-full rounded-3xl object-cover" />
          </div>
        </Conteneur>
      </section>

      <AppelFinal titre={"Et si on créait ensemble ?"} texte="Ogniaka – Ozonka : être africain, faire africain." />
    </>
  );
}
