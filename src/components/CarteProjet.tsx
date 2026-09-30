import Image from "next/image";
import Link from "next/link";
import type { Projet } from "@/content/projets";
import { categories } from "@/content/projets";

export function CarteProjet({ projet, preload = false }: { projet: Projet; preload?: boolean }) {
  const categorie = categories.find((c) => c.id === projet.categorie)?.label;
  const portrait = projet.couverture.h > projet.couverture.w;
  return (
    <Link href={`/realisations/${projet.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-prune">
        <Image
          src={projet.couverture.src}
          alt={projet.couverture.alt}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`transition duration-500 group-hover:scale-105 ${portrait ? "object-cover" : "object-contain p-6"}`}
        />
        {projet.etude && (
          <span className="absolute left-4 top-4 rounded-full bg-jaune px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-encre">
            Étude de cas
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold uppercase tracking-wider text-jaune">
          {categorie} · {projet.annee}
        </span>
        <h3 className="text-xl font-bold leading-snug group-hover:text-jaune">{projet.titre}</h3>
      </div>
    </Link>
  );
}
