import type { Metadata } from "next";
import { Conteneur, Surtitre } from "@/components/ui";
import { Champ, Choix, Formulaire, Zone } from "@/components/Formulaire";
import { IconeFleche, IconeLieu, IconeMail, IconeWhatsApp } from "@/components/Icones";
import { lienWhatsApp, site } from "@/lib/site";
import { parcours } from "@/content/services";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Mornex Bakeyta sur WhatsApp ou par formulaire : graphisme, cours de dessin, personnages et vidéo.",
};

export default function Contact() {
  return (
    <section className="bg-rouge">
      <Conteneur className="grid gap-12 py-16 lg:grid-cols-[1fr_32rem] lg:py-24">
        <div className="flex flex-col gap-8">
          <Surtitre className="text-white/85">Contact</Surtitre>
          <h1 className="font-display uppercase leading-[0.85] text-[clamp(3.5rem,9vw,7.5rem)]">
            Parlons de <span className="text-jaune">votre projet</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Le plus rapide, c&apos;est WhatsApp. Choisissez votre besoin : le message est déjà prêt, il ne reste
            qu&apos;à l&apos;envoyer.
          </p>
          <ul className="flex flex-col gap-3">
            {parcours.map((p, k) => (
              <li key={p.id}>
                <a
                  href={lienWhatsApp(p.messageWhatsApp)}
                  target="_blank"
                  rel="noopener"
                  className={`flex min-h-16 items-center justify-between gap-4 rounded-2xl px-6 font-bold transition ${
                    k === 0 ? "bg-jaune text-encre hover:bg-white" : "bg-bordeaux/60 text-white ring-1 ring-white/20 hover:bg-bordeaux"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <IconeWhatsApp className="size-6" />
                    {p.titre}
                  </span>
                  <IconeFleche />
                </a>
              </li>
            ))}
          </ul>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={lienWhatsApp()} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-bordeaux/60 p-5 hover:bg-bordeaux">
              <IconeWhatsApp className="size-6 text-jaune" />
              <span className="flex flex-col">
                <span className="text-sm text-white/70">WhatsApp</span>
                <strong>{site.telephone}</strong>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl bg-bordeaux/60 p-5 hover:bg-bordeaux">
              <IconeMail className="size-6 text-jaune" />
              <span className="flex min-w-0 flex-col">
                <span className="text-sm text-white/70">E-mail</span>
                <strong className="truncate">{site.email}</strong>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-bordeaux/60 p-5 sm:col-span-2">
              <IconeLieu className="size-6 text-jaune" />
              <span className="flex flex-col">
                <span className="text-sm text-white/70">Atelier</span>
                <strong>{site.quartier} · cours et rendez-vous sur place, graphisme à distance</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="self-start rounded-[2rem] bg-craie p-8 text-encre sm:p-10">
          <h2 className="mb-6 font-display text-4xl uppercase">Ou écrivez-moi ici</h2>
          <Formulaire
            action="/api/contact"
            libelleEnvoi="Envoyer ma demande"
            messageSucces="Merci ! Votre message est bien arrivé, je vous réponds très vite."
          >
            <Choix
              legende="Votre besoin"
              name="besoin"
              options={[
                { valeur: "graphisme", label: "Graphisme" },
                { valeur: "cours", label: "Cours de dessin" },
                { valeur: "creation", label: "Personnage ou vidéo" },
                { valeur: "autre", label: "Autre" },
              ]}
            />
            <Champ label="Votre nom" name="nom" placeholder="Prénom et nom" />
            <Champ label="WhatsApp ou e-mail" name="contact" placeholder="Pour que je puisse vous répondre" />
            <Zone label="Votre message" name="message" placeholder="Décrivez votre projet en quelques lignes" />
          </Formulaire>
          <p className="text-sm text-encre/60">Vos données servent uniquement à vous recontacter.</p>
        </div>
      </Conteneur>
    </section>
  );
}
