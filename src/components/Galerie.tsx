"use client";

import { useState } from "react";
import type { Categorie, Projet } from "@/content/projets";
import { categories } from "@/content/projets";
import { CarteProjet } from "./CarteProjet";

export function Galerie({ projets }: { projets: Projet[] }) {
  const [filtre, setFiltre] = useState<Categorie | "tout">("tout");
  const visibles = projets.filter((p) => filtre === "tout" || p.categorie === filtre);

  return (
    <div className="flex flex-col gap-10">
      <div role="group" aria-label="Filtrer les réalisations" className="flex flex-wrap gap-3">
        {categories.map((c) => {
          const actif = c.id === filtre;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={actif}
              onClick={() => setFiltre(c.id)}
              className={`min-h-11 rounded-full border-2 px-5 text-[15px] font-bold transition ${
                actif ? "border-jaune bg-jaune text-encre" : "border-white/30 text-white hover:border-jaune"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {visibles.length} réalisation{visibles.length > 1 ? "s" : ""} affichée{visibles.length > 1 ? "s" : ""}
      </p>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((p, k) => (
          <CarteProjet key={p.slug} projet={p} preload={k < 3} />
        ))}
      </div>
    </div>
  );
}
