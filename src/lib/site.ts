export const site = {
  nom: "Mornex Bakeyta",
  nomCivil: "SAKRAN Abi-Ola Modeste",
  metier: "Illustrateur, graphiste designer et professeur de dessin",
  ville: "Lomé, Togo",
  quartier: "Togblé Kopé, Lomé",
  slogan: "Ogniaka – Ozonka",
  sloganTraduit: "Être africain, faire africain.",
  email: "mornexbakeyta@gmail.com",
  telephone: "+228 92 12 74 49",
  whatsapp: "22892127449",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-mornex.vercel.app",
  reseaux: [
    { nom: "TikTok", identifiant: "@mornex_bakeyta", url: "https://www.tiktok.com/@mornex_bakeyta" },
    { nom: "Instagram", identifiant: "@mornex_bakeyta", url: "https://www.instagram.com/mornex_bakeyta/" },
    { nom: "Blog", identifiant: "Mornex Bakeyta, c'est qui ?", url: "https://mornexbakeyta.blogspot.com/" },
  ],
};

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/cv", label: "CV" },
  { href: "/temoignages", label: "Preuves" },
  { href: "/contact", label: "Contact" },
];

/** Lien WhatsApp avec un message prérempli. */
export function lienWhatsApp(message = "Bonjour Mornex, j'ai un projet à vous proposer.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
