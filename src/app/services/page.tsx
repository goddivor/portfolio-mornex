import type { Metadata } from "next";
import { EnTetePage } from "@/components/EnTetePage";
import { AppelFinal, BoutonWhatsApp, Conteneur, GrandTitre } from "@/components/ui";
import { parcours, servicesComplementaires, methode } from "@/content/services";

export const metadata: Metadata = {
  title: "Services et tarifs",
  description:
    "Graphisme (logos, affiches, flyers), cours de dessin à l'Atelier Origuna, préparation à l'épreuve facultative de dessin, character design et vidéo.",
};

export default function Services() {
  return (
    <>
      <EnTetePage
        surtitre="Services et tarifs"
        titre="Ce que je peux"
        accent="créer pour vous"
        texte="Choisissez votre parcours. Quand le prix dépend du projet, je vous envoie un devis clair après notre échange sur WhatsApp."
      />

      <section className="bg-craie text-encre">
        <Conteneur className="flex flex-col gap-8 py-20">
          {parcours.map((p, k) => {
            const sombre = k === 1;
            return (
              <article
                key={p.id}
                id={p.id}
                className={`grid scroll-mt-28 gap-10 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[22rem_1fr] ${
                  sombre ? "bg-prune text-white" : "bg-white ring-1 ring-encre/10"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <span className={`font-display text-7xl ${sombre ? "text-jaune" : "text-rouge"}`}>{p.numero}</span>
                  <span className={`text-sm font-bold uppercase tracking-wider ${sombre ? "text-jaune" : "text-violet"}`}>
                    {p.public}
                  </span>
                  <h2 className="font-display text-4xl uppercase leading-tight">{p.titre}</h2>
                  <p className={sombre ? "text-white/85" : "text-encre/75"}>{p.accroche}</p>
                  <BoutonWhatsApp message={p.messageWhatsApp} variante={sombre ? "jaune" : "encre"} className="mt-2 self-start">
                    {p.cta}
                  </BoutonWhatsApp>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {p.offres.map((o) => (
                    <li
                      key={o.titre}
                      className={`flex flex-col gap-2 rounded-2xl p-6 ${sombre ? "bg-white/10" : "bg-craie"}`}
                    >
                      <strong className="text-lg">{o.titre}</strong>
                      <span className={`text-[15px] leading-relaxed ${sombre ? "text-white/80" : "text-encre/70"}`}>
                        {o.detail}
                      </span>
                      <span className={`mt-auto pt-2 font-bold ${sombre ? "text-jaune" : "text-rouge"}`}>{o.prix}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Conteneur>
      </section>

      <section className="bg-violet">
        <Conteneur className="flex flex-col gap-10 py-20">
          <div className="flex flex-col gap-3">
            <GrandTitre>Aussi à votre service</GrandTitre>
            <p className="text-lg text-white/85">Des compétences à ajouter à un projet, ou à commander seules.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicesComplementaires.map((s) => (
              <div key={s.titre} className="flex flex-col gap-3 rounded-3xl bg-prune p-7">
                <strong className="text-xl text-jaune">{s.titre}</strong>
                <span className="leading-relaxed text-white/85">{s.texte}</span>
              </div>
            ))}
          </div>
        </Conteneur>
      </section>

      <section className="bg-craie text-encre">
        <Conteneur className="flex flex-col gap-12 py-20">
          <GrandTitre>Comment je travaille</GrandTitre>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {methode.map((m, k) => (
              <li key={m.titre} className="flex flex-col gap-3 border-t-4 border-rouge pt-5">
                <span className="font-display text-4xl text-violet">0{k + 1}</span>
                <strong className="text-xl">{m.titre}</strong>
                <span className="leading-relaxed text-encre/75">{m.texte}</span>
              </li>
            ))}
          </ol>
        </Conteneur>
      </section>

      <AppelFinal titre="Votre devis, sans engagement" />
    </>
  );
}
