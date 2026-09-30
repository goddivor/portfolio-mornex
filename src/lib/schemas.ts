import { z } from "zod";

export const besoins = ["graphisme", "cours", "creation", "autre"] as const;

export const schemaMessage = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(100),
  contact: z.string().trim().min(6, "Indiquez un numéro WhatsApp ou un e-mail.").max(120),
  besoin: z.enum(besoins),
  message: z.string().trim().min(10, "Décrivez votre projet en quelques mots.").max(3000),
  // Champ piège invisible : rempli uniquement par les robots.
  site: z.string().max(0).optional(),
});

export const schemaAvis = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(100),
  role: z.string().trim().min(2, "Précisez qui vous êtes (élève, client…).").max(120),
  texte: z.string().trim().min(20, "Votre avis doit faire au moins 20 caractères.").max(1500),
  note: z.coerce.number().int().min(1).max(5),
  site: z.string().max(0).optional(),
});
