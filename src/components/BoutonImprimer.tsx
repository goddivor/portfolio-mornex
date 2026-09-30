"use client";

import { IconeTelechargement } from "./Icones";

export function BoutonImprimer() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-14 items-center gap-3 self-start rounded-full bg-jaune px-7 text-lg font-bold text-encre transition hover:bg-white"
    >
      <IconeTelechargement />
      Télécharger en PDF
    </button>
  );
}
