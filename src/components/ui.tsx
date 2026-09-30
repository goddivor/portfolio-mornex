import Link from "next/link";
import type { ReactNode } from "react";
import { IconeFleche, IconeWhatsApp } from "./Icones";
import { lienWhatsApp } from "@/lib/site";

export function Conteneur({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Surtitre({ children, className = "text-jaune" }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm font-bold uppercase tracking-[0.2em] ${className}`}>{children}</p>;
}

export function GrandTitre({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`font-display uppercase leading-[0.92] tracking-wide text-[clamp(2.6rem,6vw,5rem)] ${className}`}>
      {children}
    </Tag>
  );
}

const styles = {
  jaune: "bg-jaune text-encre hover:bg-white",
  encre: "bg-encre text-white hover:bg-prune",
  contour: "border-2 border-current hover:bg-white/10",
};

export function BoutonWhatsApp({
  children,
  message,
  variante = "jaune",
  className = "",
}: {
  children: ReactNode;
  message?: string;
  variante?: keyof typeof styles;
  className?: string;
}) {
  return (
    <a
      href={lienWhatsApp(message)}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-base font-bold transition sm:text-lg ${styles[variante]} ${className}`}
    >
      <IconeWhatsApp className="size-6" />
      {children}
    </a>
  );
}

export function BoutonLien({
  href,
  children,
  variante = "contour",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variante?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-base font-bold transition sm:text-lg ${styles[variante]} ${className}`}
    >
      {children}
      <IconeFleche />
    </Link>
  );
}

export function Bandeau({ mots, className = "bg-jaune text-encre" }: { mots: string[]; className?: string }) {
  const suite = [...mots, ...mots];
  return (
    <div className={`overflow-hidden py-4 ${className}`} aria-hidden="true">
      <div className="defile flex w-max gap-10 whitespace-nowrap font-display text-3xl uppercase sm:text-4xl">
        {suite.map((mot, k) => (
          <span key={k} className="flex items-center gap-10">
            {mot}
            <span className="text-rouge">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function AppelFinal({
  titre = "Un projet ? Appelle-moi.",
  texte = "Écris-moi sur WhatsApp : je te réponds avec une proposition et un prix clair.",
}: {
  titre?: string;
  texte?: string;
}) {
  return (
    <section className="bg-jaune text-encre">
      <Conteneur className="flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-3">
          <GrandTitre>{titre}</GrandTitre>
          <p className="max-w-xl text-lg sm:text-xl">{texte}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <BoutonWhatsApp variante="encre">Écrire sur WhatsApp</BoutonWhatsApp>
          <BoutonLien href="/contact" variante="contour">
            Formulaire
          </BoutonLien>
        </div>
      </Conteneur>
    </section>
  );
}
