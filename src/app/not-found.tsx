import { BoutonLien, Conteneur } from "@/components/ui";

export default function PageIntrouvable() {
  return (
    <section className="bg-rouge">
      <Conteneur className="flex min-h-[70svh] flex-col items-start justify-center gap-6 py-20">
        <p className="font-display text-[clamp(6rem,25vw,16rem)] leading-none text-jaune">404</p>
        <h1 className="font-display text-4xl uppercase sm:text-5xl">Cette page s&apos;est perdue dans la brousse</h1>
        <BoutonLien href="/" variante="jaune">
          Retour à l&apos;accueil
        </BoutonLien>
      </Conteneur>
    </section>
  );
}
