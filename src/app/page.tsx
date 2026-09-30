import Image from "next/image";
import Link from "next/link";
import { AppelFinal, Bandeau, BoutonLien, BoutonWhatsApp, Conteneur, GrandTitre, Surtitre } from "@/components/ui";
import { CarteProjet } from "@/components/CarteProjet";
import { projets, projetsEnVedette } from "@/content/projets";
import { parcours, methode } from "@/content/services";

const vedettes = projetsEnVedette.map((s) => projets.find((p) => p.slug === s)!).filter(Boolean);

const references = [
  "AGED-Togo",
  "Association Nonvignon des Adjats Bénin-Togo",
  "IPL « Les Dinosaures »",
  "Salon Rose Esthétique",
  "Atelier Origuna",
  "Orinu Day",
];

export default function Accueil() {
  return (
    <>
      {/* Couverture façon magazine : titre géant, portrait détouré au milieu */}
      <section className="relative isolate overflow-hidden bg-rouge">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,#e60013_0%,#b3000f_45%,#520a0d_100%)]"
          aria-hidden="true"
        />
        {/* Assombrit le bas de la photo (sous « FOLIO ») pour que le texte reste lisible */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-1/2 bg-gradient-to-t from-bordeaux via-bordeaux/80 to-transparent"
          aria-hidden="true"
        />
        <Conteneur className="relative flex min-h-[calc(100svh-4rem)] flex-col pt-6 sm:min-h-[calc(100svh-5rem)]">
          <div className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em]">
            <span>Mornex Bakeyta</span>
            <span className="text-jaune">Portfolio 2026</span>
          </div>

          <div className="relative mt-4 flex-1">
            <p
              aria-hidden="true"
              className="pointer-events-none select-none text-center font-display uppercase leading-[0.8] text-jaune text-[clamp(5.5rem,22vw,18rem)]"
            >
              Port
            </p>
            <Image
              src="/images/hero-cutout.webp"
              alt="Mornex Bakeyta, bonnet violet, au téléphone"
              width={1377}
              height={1600}
              preload
              sizes="(min-width: 1024px) 560px, 80vw"
              className="absolute bottom-0 left-1/2 z-10 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain"
            />
            <p
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[50%] z-20 select-none text-center font-display uppercase leading-[0.8] text-jaune text-[clamp(5.5rem,22vw,18rem)] [text-shadow:0_10px_40px_rgba(82,10,13,0.35)]"
            >
              Folio
            </p>
          </div>

          <div className="relative z-30 grid gap-6 pb-10 pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="flex max-w-xl flex-col gap-4">
              <h1 className="font-display text-4xl uppercase text-jaune sm:text-5xl">
                Illustrateur · Graphiste · Prof de dessin
              </h1>
              <p className="text-sm uppercase leading-relaxed tracking-wide text-white/90 sm:text-base">
                Je dessine des univers qui parlent d&apos;Afrique. Affiches, logos, personnages et cours de dessin à Lomé.
                Créateur de l&apos;Orinu, la BD africaine moderne.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <BoutonWhatsApp>Un projet ? Appelle-moi</BoutonWhatsApp>
              <BoutonLien href="/realisations">Voir mes travaux</BoutonLien>
            </div>
          </div>
        </Conteneur>
      </section>

      <Bandeau mots={["Illustration", "Graphisme", "Cours de dessin", "Animation 2D", "Personnages", "Orinu"]} />

      {/* Chiffres clés : uniquement des faits vérifiés */}
      <section className="bg-violet">
        <Conteneur className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {[
            ["2012", "Je dessine depuis l'école primaire"],
            ["2018", "Professionnel du dessin et du graphisme"],
            ["2024", "Professeur de dessin technique à l'IPL « Les Dinosaures »"],
            ["Orinu", "Fondateur du mouvement de BD africaine"],
          ].map(([chiffre, texte]) => (
            <div key={chiffre} className="flex flex-col gap-1">
              <span className="font-display text-5xl text-jaune sm:text-6xl">{chiffre}</span>
              <span className="text-sm leading-snug text-white/90 sm:text-base">{texte}</span>
            </div>
          ))}
        </Conteneur>
      </section>

      {/* Services */}
      <section className="bg-craie text-encre">
        <Conteneur className="flex flex-col gap-12 py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-4">
              <Surtitre className="text-rouge">Ce que je fais pour vous</Surtitre>
              <GrandTitre>Trois façons de travailler ensemble</GrandTitre>
            </div>
            <Link href="/services" className="text-lg font-bold text-violet underline-offset-4 hover:underline">
              Tous les services et tarifs
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {parcours.map((p, k) => (
              <Link
                key={p.id}
                href={`/services#${p.id}`}
                className={`group flex flex-col gap-5 rounded-3xl p-8 transition hover:-translate-y-1 ${
                  k === 1 ? "bg-violet text-white" : "bg-white ring-1 ring-encre/10"
                }`}
              >
                <span className={`font-display text-6xl ${k === 1 ? "text-jaune" : "text-rouge"}`}>{p.numero}</span>
                <span className={`text-sm font-bold uppercase tracking-wider ${k === 1 ? "text-jaune" : "text-violet"}`}>
                  {p.public}
                </span>
                <h3 className="font-display text-3xl uppercase leading-tight">{p.titre}</h3>
                <p className={`leading-relaxed ${k === 1 ? "text-white/90" : "text-encre/75"}`}>{p.accroche}</p>
                <span className="mt-auto font-bold underline-offset-4 group-hover:underline">{p.cta}</span>
              </Link>
            ))}
          </div>
        </Conteneur>
      </section>

      {/* Réalisations */}
      <section className="bg-prune">
        <Conteneur className="flex flex-col gap-12 py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-4">
              <Surtitre>Réalisations choisies</Surtitre>
              <GrandTitre>
                Mes travaux <span className="text-jaune">parlent pour moi</span>
              </GrandTitre>
            </div>
            <Link href="/realisations" className="text-lg font-bold text-jaune underline-offset-4 hover:underline">
              Voir toute la galerie
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {vedettes.map((p) => (
              <CarteProjet key={p.slug} projet={p} />
            ))}
          </div>
        </Conteneur>
      </section>

      {/* Méthode */}
      <section className="bg-craie text-encre">
        <Conteneur className="flex flex-col gap-12 py-20">
          <GrandTitre>Comment je travaille</GrandTitre>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {methode.map((m, k) => (
              <li key={m.titre} className="flex flex-col gap-3 border-t-4 border-violet pt-5">
                <span className="font-display text-4xl text-rouge">0{k + 1}</span>
                <strong className="text-xl">{m.titre}</strong>
                <span className="leading-relaxed text-encre/75">{m.texte}</span>
              </li>
            ))}
          </ol>
        </Conteneur>
      </section>

      {/* Univers Orinu */}
      <section className="bg-violet">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[28rem] lg:min-h-full">
            <Image
              src="/images/masque-atelier.webp"
              alt="Mornex Bakeyta sous son masque violet, dans son atelier"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-4 py-20 sm:px-10 lg:px-16">
            <Surtitre>Mon univers</Surtitre>
            <GrandTitre>
              L&apos;Orinu, la BD africaine <span className="text-jaune">a enfin son nom.</span>
            </GrandTitre>
            <p className="max-w-xl text-lg leading-relaxed text-white/90">
              Le manga a le Japon, les comics ont l&apos;Amérique. J&apos;ai créé l&apos;Orinu pour la bande dessinée
              africaine moderne : <em>Ori</em>, la mémoire en yoruba, et <em>Nutata</em>, le dessin en ewe. Mon
              personnage masqué en est la mascotte, et je l&apos;incarne en cosplay.
            </p>
            <p className="font-marker text-3xl text-jaune">Ogniaka – Ozonka : être africain, faire africain.</p>
            <BoutonLien href="/a-propos" className="self-start">
              Découvrir mon histoire
            </BoutonLien>
          </div>
        </div>
      </section>

      {/* Références */}
      <section className="bg-encre">
        <Conteneur className="flex flex-col gap-8 py-16">
          <Surtitre className="text-white/70">Ils m&apos;ont fait confiance</Surtitre>
          <ul className="flex flex-wrap gap-3">
            {references.map((r) => (
              <li key={r} className="rounded-full border border-white/20 px-5 py-3 font-bold text-white/90">
                {r}
              </li>
            ))}
          </ul>
          <Link href="/temoignages" className="self-start font-bold text-jaune underline-offset-4 hover:underline">
            Voir les preuves et laisser un avis
          </Link>
        </Conteneur>
      </section>

      <AppelFinal />
    </>
  );
}
