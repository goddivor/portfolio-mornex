import type { Metadata } from "next";
import { EnTetePage } from "@/components/EnTetePage";
import { Galerie } from "@/components/Galerie";
import { AppelFinal, Conteneur } from "@/components/ui";
import { projets } from "@/content/projets";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Logos, affiches, personnages, illustrations et projets Orinu réalisés par Mornex Bakeyta.",
};

export default function Realisations() {
  return (
    <>
      <EnTetePage
        surtitre="Galerie"
        titre="Mes"
        accent="réalisations"
        fond="bg-violet"
        texte="Une sélection de mes projets. Ceux marqués « Étude de cas » racontent toute la démarche, du croquis au résultat."
      />
      <section className="bg-prune">
        <Conteneur className="py-16 sm:py-20">
          <Galerie projets={projets} />
        </Conteneur>
      </section>
      <AppelFinal titre="Vous voulez le même niveau ?" texte="Parlons de votre projet et donnons-lui un style unique." />
    </>
  );
}
