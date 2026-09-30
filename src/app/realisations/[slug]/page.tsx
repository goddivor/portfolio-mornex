import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppelFinal, Conteneur, GrandTitre, Surtitre } from "@/components/ui";
import { IconeRetour } from "@/components/Icones";
import { CarteProjet } from "@/components/CarteProjet";
import { categories, projets, trouverProjet } from "@/content/projets";

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const projet = trouverProjet(slug);
  if (!projet) return {};
  return {
    title: projet.titre,
    description: projet.resume,
    openGraph: { images: [{ url: projet.couverture.src, alt: projet.couverture.alt }] },
  };
}

export default async function PageProjet(props: PageProps<"/realisations/[slug]">) {
  const { slug } = await props.params;
  const projet = trouverProjet(slug);
  if (!projet) notFound();

  const categorie = categories.find((c) => c.id === projet.categorie)?.label;
  const autres = projets.filter((p) => p.slug !== projet.slug && p.categorie === projet.categorie).slice(0, 3);
  const suite = autres.length ? autres : projets.filter((p) => p.slug !== projet.slug).slice(0, 3);
  const fiche = [
    ["Client", projet.client],
    ["Rôle", projet.role],
    ["Année", projet.annee],
    ["Outils", projet.outils],
  ];

  return (
    <>
      <section className="bg-rouge">
        <Conteneur className="grid items-center gap-12 py-12 lg:grid-cols-[1fr_28rem] lg:py-20">
          <div className="flex flex-col gap-6">
            <Link href="/realisations" className="flex items-center gap-2 self-start font-bold text-jaune hover:underline">
              <IconeRetour /> Retour aux réalisations
            </Link>
            <Surtitre className="text-white/85">
              {projet.etude ? "Étude de cas" : "Réalisation"} · {categorie}
            </Surtitre>
            <h1 className="font-display uppercase leading-[0.9] text-[clamp(2.8rem,7vw,5.5rem)]">{projet.titre}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{projet.resume}</p>
            <dl className="grid grid-cols-2 gap-5 pt-2 lg:grid-cols-4">
              {fiche.map(([terme, valeur]) => (
                <div key={terme} className="flex flex-col gap-1 border-t-2 border-white/30 pt-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-white/70">{terme}</dt>
                  <dd className="font-bold">{valeur}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white">
            <Image
              src={projet.couverture.src}
              alt={projet.couverture.alt}
              fill
              preload
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-contain p-4"
            />
          </div>
        </Conteneur>
      </section>

      {projet.etude && (
        <>
          <section className="bg-craie text-encre">
            <Conteneur className="grid gap-12 py-20 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <Surtitre className="text-rouge">Le contexte</Surtitre>
                <p className="text-lg leading-relaxed text-encre/80">{projet.etude.contexte}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Surtitre className="text-rouge">Le défi</Surtitre>
                <p className="text-lg leading-relaxed text-encre/80">{projet.etude.defi}</p>
              </div>
            </Conteneur>
          </section>

          <section className="bg-prune">
            <Conteneur className="flex flex-col gap-12 py-20">
              <GrandTitre>Ma démarche, étape par étape</GrandTitre>
              <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {projet.etude.etapes.map((e, k) => (
                  <li key={e.titre} className="flex flex-col gap-4">
                    {e.image && (
                      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white">
                        <Image src={e.image.src} alt={e.image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-3" />
                      </div>
                    )}
                    <span className="font-display text-3xl uppercase text-jaune">
                      0{k + 1} · {e.titre}
                    </span>
                    <p className="leading-relaxed text-white/85">{e.texte}</p>
                  </li>
                ))}
              </ol>
            </Conteneur>
          </section>

          <section className="bg-violet">
            <Conteneur className="grid gap-10 py-20 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <GrandTitre>Le résultat</GrandTitre>
                <p className="text-lg leading-relaxed text-white/90">{projet.etude.resultat}</p>
              </div>
              <blockquote className="self-center border-l-4 border-jaune pl-6 font-marker text-2xl leading-snug text-jaune sm:text-3xl">
                {projet.etude.retenir}
              </blockquote>
            </Conteneur>
          </section>
        </>
      )}

      <section className="bg-encre">
        <Conteneur className="flex flex-col gap-10 py-20">
          <GrandTitre as="h2">Galerie du projet</GrandTitre>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {projet.galerie.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="mb-6 w-full break-inside-avoid rounded-3xl bg-white"
              />
            ))}
          </div>
        </Conteneur>
      </section>

      <section className="bg-prune">
        <Conteneur className="flex flex-col gap-10 py-20">
          <GrandTitre as="h2">Autres réalisations</GrandTitre>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {suite.map((p) => (
              <CarteProjet key={p.slug} projet={p} />
            ))}
          </div>
        </Conteneur>
      </section>

      <AppelFinal titre="Créons votre projet" />
    </>
  );
}
