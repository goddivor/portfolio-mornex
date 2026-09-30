"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Etat = { statut: "repos" | "envoi" | "ok" | "erreur"; message?: string };

/** Formulaire générique : envoie les champs en JSON vers `action` et affiche le résultat. */
export function Formulaire({
  action,
  children,
  libelleEnvoi,
  messageSucces,
}: {
  action: string;
  children: ReactNode;
  libelleEnvoi: string;
  messageSucces: string;
}) {
  const [etat, setEtat] = useState<Etat>({ statut: "repos" });

  async function envoyer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formulaire = e.currentTarget;
    setEtat({ statut: "envoi" });
    try {
      const reponse = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(formulaire))),
      });
      const resultat = await reponse.json();
      if (resultat.ok) {
        formulaire.reset();
        setEtat({ statut: "ok", message: messageSucces });
      } else {
        setEtat({ statut: "erreur", message: resultat.erreur });
      }
    } catch {
      setEtat({ statut: "erreur", message: "Connexion impossible. Vérifiez votre réseau ou écrivez-moi sur WhatsApp." });
    }
  }

  return (
    <form onSubmit={envoyer} className="flex flex-col gap-5">
      {children}
      <input type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={etat.statut === "envoi"}
        className="min-h-14 rounded-full bg-encre px-7 text-lg font-bold text-white transition hover:bg-prune disabled:opacity-60"
      >
        {etat.statut === "envoi" ? "Envoi en cours…" : libelleEnvoi}
      </button>
      <p role="status" className={`min-h-6 font-bold ${etat.statut === "erreur" ? "text-rouge" : "text-violet"}`}>
        {etat.message}
      </p>
    </form>
  );
}

const champ =
  "min-h-13 w-full rounded-2xl border-2 border-encre/15 bg-white px-4 py-3 text-base text-encre placeholder:text-encre/45 focus:border-violet focus:outline-none";

export function Champ({ label, name, type = "text", placeholder, requis = true }: { label: string; name: string; type?: string; placeholder?: string; requis?: boolean }) {
  return (
    <label className="flex flex-col gap-2 font-bold">
      {label}
      <input name={name} type={type} placeholder={placeholder} required={requis} className={champ} />
    </label>
  );
}

export function Zone({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-2 font-bold">
      {label}
      <textarea name={name} placeholder={placeholder} required rows={5} className={`${champ} resize-y`} />
    </label>
  );
}

export function Choix({ legende, name, options }: { legende: string; name: string; options: { valeur: string; label: string }[] }) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 font-bold">{legende}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o, k) => (
          <label key={o.valeur} className="cursor-pointer">
            <input type="radio" name={name} value={o.valeur} defaultChecked={k === 0} className="peer sr-only" />
            <span className="inline-flex min-h-11 items-center rounded-full border-2 border-encre/15 bg-white px-4 font-medium text-encre transition peer-checked:border-violet peer-checked:bg-violet peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-jaune">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
