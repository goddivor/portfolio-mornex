import type { ReactNode } from "react";
import { Conteneur, Surtitre } from "./ui";

/** En-tête de page intérieure : titre géant jaune sur fond rouge, dans l'esprit de la couverture. */
export function EnTetePage({
  surtitre,
  titre,
  accent,
  texte,
  fond = "bg-rouge",
  children,
}: {
  surtitre: string;
  titre: string;
  accent?: string;
  texte?: ReactNode;
  fond?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`${fond} relative overflow-hidden`}>
      <Conteneur className="flex flex-col gap-6 py-16 sm:py-24">
        <Surtitre className="text-white/85">{surtitre}</Surtitre>
        <h1 className="font-display uppercase leading-[0.85] text-[clamp(3.5rem,11vw,9.5rem)]">
          {titre} {accent && <span className="text-jaune">{accent}</span>}
        </h1>
        {texte && <div className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{texte}</div>}
        {children}
      </Conteneur>
    </section>
  );
}
