export type Img = { src: string; w: number; h: number; alt: string };

export type Categorie = "identites" | "affiches" | "personnages" | "orinu" | "pedagogie" | "illustration";

export const categories: { id: Categorie | "tout"; label: string }[] = [
  { id: "tout", label: "Tout voir" },
  { id: "identites", label: "Logos et identités" },
  { id: "affiches", label: "Affiches et print" },
  { id: "personnages", label: "Personnages" },
  { id: "illustration", label: "Illustration" },
  { id: "orinu", label: "Univers Orinu" },
  { id: "pedagogie", label: "Pédagogie" },
];

export type Etape = { titre: string; texte: string; image?: Img };

export type Projet = {
  slug: string;
  titre: string;
  client: string;
  annee: string;
  categorie: Categorie;
  resume: string;
  role: string;
  outils: string;
  couverture: Img;
  galerie: Img[];
  etude?: {
    contexte: string;
    defi: string;
    etapes: Etape[];
    resultat: string;
    retenir: string;
  };
};

const i = (nom: string, w: number, h: number, alt: string): Img => ({ src: `/images/${nom}.webp`, w, h, alt });

export const projets: Projet[] = [
  {
    slug: "aged-togo",
    titre: "AGED-Togo : un arbre pour le genre et l'environnement",
    client: "AGED-Togo (Action sur le Genre et l'Environnement pour le Développement Durable)",
    annee: "2026",
    categorie: "identites",
    resume:
      "Logo et identité visuelle d'une structure engagée pour l'égalité et le développement durable au Togo, du croquis à la main jusqu'aux déclinaisons finales.",
    role: "Recherche, croquis, logo, couleurs, déclinaisons",
    outils: "Crayon et papier, Photoshop, IA générative pour l'exploration",
    couverture: i("aged-final", 1200, 1200, "Logo final AGED : un arbre aux racines profondes"),
    galerie: [
      i("aged-final", 1200, 1200, "Logo final AGED"),
      i("aged-final-togo", 1200, 1200, "Version AGED-Togo avec personnages et soleil levant"),
      i("aged-symbole", 882, 900, "Le symbole seul, sans texte"),
      i("aged-version-carree", 1000, 1000, "Déclinaison carrée pour les réseaux sociaux"),
    ],
    etude: {
      contexte:
        "AGED-Togo agit sur deux fronts : l'égalité entre les femmes et les hommes, et la protection de l'environnement. Il lui fallait une image capable de porter ces deux combats à la fois, et d'inspirer confiance aux partenaires comme aux communautés.",
      defi:
        "Réunir le genre et l'environnement dans un seul symbole, lisible en petit sur un tampon comme en grand sur une banderole, sans tomber dans l'image vue et revue.",
      etapes: [
        {
          titre: "Le croquis",
          texte:
            "Tout part d'un dessin à la main : un arbre planté au cœur du nom AGED. L'arbre dit la croissance durable, ses racines disent l'ancrage dans les communautés.",
          image: i("aged-croquis", 451, 1000, "Premier croquis à la main de l'arbre AGED"),
        },
        {
          titre: "La couleur",
          texte:
            "Première palette trop sombre et terne. Je la remplace par un bleu, un vert et un orange plus lumineux : l'eau, la nature et le soleil d'un avenir durable.",
          image: i("aged-couleurs-avant-apres", 1200, 675, "Palette de couleurs avant et après"),
        },
        {
          titre: "Les pistes",
          texte:
            "J'explore plusieurs directions : l'arbre seul, l'arbre avec deux silhouettes qui le portent, un format carré pour les réseaux. Chaque piste est testée en petit et en grand.",
          image: i("aged-version-1", 1200, 1200, "Piste avec deux personnages et un soleil levant"),
        },
        {
          titre: "La version finale",
          texte:
            "L'arbre aux racines devient le cœur du logo : le « G » de Genre prend la couleur de la nature, et la mention « Action sur le Genre et l'Environnement » complète la lecture.",
          image: i("aged-final", 1200, 1200, "Logo final AGED"),
        },
      ],
      resultat:
        "Une identité complète : logo principal, version « AGED-Togo » avec signature, symbole seul et déclinaisons pour les réseaux sociaux.",
      retenir:
        "Un bon logo commence au crayon. Le croquis fixe l'idée ; les outils numériques ne viennent qu'ensuite pour la servir.",
    },
  },
  {
    slug: "mornex-bakeyta-personnage",
    titre: "Mornex Bakeyta : du croquis au cosplay",
    client: "Projet personnel, univers Orinu",
    annee: "2025",
    categorie: "personnages",
    resume:
      "Création du personnage masqué qui incarne l'Orinu : planches de personnage, logo de combat, puis costume porté en public à la foire otaku de Lomé.",
    role: "Character design, logo, costume, performance",
    outils: "Dessin, Photoshop, IA générative pour les planches, fabrication du costume",
    couverture: i("logo-mornex", 500, 500, "Logo du personnage Mornex Bakeyta"),
    galerie: [
      i("character-sheet-mornex-1", 1214, 1295, "Planche de personnage Mornex Bakeyta, poses et expressions"),
      i("character-sheet-mornex-2", 1216, 1294, "Seconde planche de personnage Mornex Bakeyta"),
      i("masque-atelier", 810, 1080, "Mornex Bakeyta masqué dans son atelier"),
      i("logo-mornex", 500, 500, "Logo du personnage"),
    ],
    etude: {
      contexte:
        "L'Orinu propose un nom pour la BD africaine moderne. Pour qu'on s'en souvienne, il lui fallait un visage : un personnage fort, reconnaissable au premier regard, capable de vivre sur le papier, sur les réseaux et en vrai.",
      defi:
        "Puiser dans les masques et les rites sans tomber dans le cliché, parler aux fans de manga et d'animé, et pouvoir être porté en costume lors d'un événement.",
      etapes: [
        {
          titre: "La silhouette",
          texte:
            "Masque violet au grand sourire, éclair doré, tresses et bâton : une forme reconnaissable de loin, même en ombre chinoise.",
          image: i("character-sheet-mornex-1", 1214, 1295, "Planche de personnage"),
        },
        {
          titre: "Les expressions",
          texte:
            "Des planches de poses et d'attitudes fixent le caractère : mystérieux, joueur et puissant à la fois.",
          image: i("character-sheet-mornex-2", 1216, 1294, "Planche d'expressions"),
        },
        {
          titre: "Le logo",
          texte:
            "Style affiche de combat : cercle, soleil couchant magenta et or, lettrage pinceau. Une énergie de héros, déclinable sur tous les supports.",
          image: i("logo-mornex", 500, 500, "Logo du personnage"),
        },
        {
          titre: "Le costume",
          texte:
            "Masque, tresses, bâton et peinture corporelle, fabriqués pour incarner le personnage devant le public.",
          image: i("masque-atelier", 810, 1080, "Le costume porté"),
        },
      ],
      resultat:
        "Le 27 décembre 2025, Mornex Bakeyta apparaît pour la première fois en public, mascotte de l'Orinu, à la foire otaku du Factory Grill & Pill à Lomé.",
      retenir:
        "Un personnage bien pensé devient une marque : il se reconnaît partout, du logo à la scène.",
    },
  },
  {
    slug: "orinu-day",
    titre: "Orinu Day : l'identité d'un événement",
    client: "Clan Bakeyta, Orinu Day",
    annee: "2026",
    categorie: "orinu",
    resume:
      "Badges Staff, Membre et Média pour la première édition de l'Orinu Day, journée consacrée à la BD africaine moderne : présentation, concert, défilé et concours.",
    role: "Logo, badges, signalétique",
    outils: "Photoshop, Canva",
    couverture: i("orinu-day-badge-staff", 591, 1004, "Badge Staff de l'Orinu Day"),
    galerie: [
      i("orinu-day-badge-staff", 591, 1004, "Badge Staff violet"),
      i("orinu-day-badge-membre", 591, 1004, "Badge Membre rouge"),
      i("orinu-day-badge-media", 591, 1004, "Badge Média jaune"),
      i("logo-orinu", 800, 722, "Logo de l'Orinu, oiseau stylisé dans un soleil"),
    ],
  },
  {
    slug: "orinu-strategie-de-marque",
    titre: "Orinu : la stratégie de marque",
    client: "Orinu",
    annee: "2026",
    categorie: "orinu",
    resume:
      "Positionnement, mission, vision, valeurs, personnalité, audience et ton de communication : la plateforme de marque qui guide tout l'univers Orinu.",
    role: "Stratégie de marque, mise en page",
    outils: "Canva, Photoshop",
    couverture: i("orinu-strategie-de-marque", 1131, 1600, "Planche de stratégie de marque Orinu"),
    galerie: [
      i("orinu-strategie-de-marque", 1131, 1600, "Stratégie de marque Orinu"),
      i("logo-orinu", 800, 722, "Logo Orinu"),
    ],
  },
  {
    slug: "atelier-origuna",
    titre: "Atelier Origuna : blason, bannière et flyer",
    client: "Atelier Origuna",
    annee: "2026",
    categorie: "identites",
    resume:
      "Identité de l'atelier de formation au dessin : blason royal, bannière de feu et flyer d'inscription pour les cours d'Orinu et d'animation.",
    role: "Blason, bannière, flyer",
    outils: "Photoshop, Canva, IA générative",
    couverture: i("origuna-blason", 1024, 1024, "Blason de l'Atelier Origuna"),
    galerie: [
      i("origuna-blason", 1024, 1024, "Blason Origuna"),
      i("origuna-banniere", 1536, 1024, "Bannière Atelier Origuna en lettres de feu"),
      i("origuna-flyer-formation", 848, 1200, "Flyer de formation Atelier Origuna"),
    ],
  },
  {
    slug: "affiche-appel-des-racines",
    titre: "L'appel des racines",
    client: "Univers Orinu",
    annee: "2025",
    categorie: "affiches",
    resume:
      "Affiche de BD Orinu : une enfant face à un arbre-esprit aux yeux de braise. L'Afrique qui retourne à ses racines.",
    role: "Direction artistique, affiche",
    outils: "IA générative, Photoshop",
    couverture: i("affiche-appel-des-racines", 800, 1200, "Affiche L'appel des racines"),
    galerie: [i("affiche-appel-des-racines", 800, 1200, "Affiche L'appel des racines")],
  },
  {
    slug: "affiches-hello-money",
    titre: "Hello Money : affiches portrait",
    client: "Création personnelle",
    annee: "2026",
    categorie: "affiches",
    resume: "Deux affiches typographiques à partir d'un portrait studio : jeu de lettres, détourage et contraste violet.",
    role: "Photo, détourage, typographie",
    outils: "Photoshop",
    couverture: i("affiche-hello-money", 927, 1200, "Affiche Hello Money"),
    galerie: [
      i("affiche-hello-money", 927, 1200, "Affiche Hello Money"),
      i("affiche-wts-money", 960, 1200, "Affiche WTS Money"),
    ],
  },
  {
    slug: "association-nonvignon",
    titre: "Association Nonvignon des Adjats Bénin-Togo",
    client: "Association Nonvignon des Adjats Bénin-Togo",
    annee: "2026",
    categorie: "identites",
    resume: "Logo circulaire aux couleurs des deux pays, avec la carte du Bénin et du Togo réunis au centre.",
    role: "Logo",
    outils: "Photoshop",
    couverture: i("logo-nonvignon", 500, 500, "Logo de l'Association Nonvignon des Adjats Bénin-Togo"),
    galerie: [i("logo-nonvignon", 500, 500, "Logo Nonvignon")],
  },
  {
    slug: "rose-esthetique",
    titre: "Rose Esthétique : fiche et contrat de formation",
    client: "Salon Rose Esthétique, Légbassito",
    annee: "2026",
    categorie: "affiches",
    resume: "Fiche tarifaire et contrat de formation pour un salon de beauté : une mise en page claire, élégante et prête à imprimer.",
    role: "Mise en page, print",
    outils: "Canva",
    couverture: i("rose-esthetique-fiche", 848, 1200, "Fiche de formation Rose Esthétique"),
    galerie: [
      i("rose-esthetique-fiche", 848, 1200, "Fiche de formation"),
      i("rose-esthetique-contrat", 848, 1200, "Contrat de formation"),
    ],
  },
  {
    slug: "programme-dessin-arts-plastiques",
    titre: "Programme de Dessin et Arts plastiques",
    client: "Établissements scolaires (BEPC, BAC I et BAC II)",
    annee: "2026",
    categorie: "pedagogie",
    resume:
      "Un programme de 23 pages pour préparer l'épreuve facultative de dessin, de la 3e à la Terminale : progression, modules, méthode, grille d'évaluation et calendrier.",
    role: "Conception pédagogique, rédaction, mise en page",
    outils: "Word, Canva",
    couverture: i("programme-dessin-couverture", 848, 1200, "Couverture du Programme de Dessin et Arts plastiques"),
    galerie: [i("programme-dessin-couverture", 848, 1200, "Couverture du programme")],
  },
  {
    slug: "porteuse-de-flamme",
    titre: "La porteuse de flamme",
    client: "Univers Orinu",
    annee: "2026",
    categorie: "illustration",
    resume: "Illustration : une femme brandit une torche devant un grand symbole solaire, entourée de figures rupestres.",
    role: "Illustration",
    outils: "Illustration numérique",
    couverture: i("illustration-porteuse-de-flamme", 900, 1200, "Illustration de la porteuse de flamme"),
    galerie: [i("illustration-porteuse-de-flamme", 900, 1200, "La porteuse de flamme")],
  },
  {
    slug: "univers-orinu",
    titre: "Les mondes de l'Orinu",
    client: "Univers Orinu",
    annee: "2026",
    categorie: "illustration",
    resume: "Environment design : un monde mystique où se croisent serpent, oiseau de feu et gardienne, décor d'un futur récit Orinu.",
    role: "Environment design",
    outils: "IA générative, retouche",
    couverture: i("illustration-univers-orinu", 1600, 900, "Paysage mystique de l'univers Orinu"),
    galerie: [i("illustration-univers-orinu", 1600, 900, "Paysage de l'univers Orinu")],
  },
  {
    slug: "purredyel",
    titre: "PurRedYel : mon identité",
    client: "Projet personnel",
    annee: "2026",
    categorie: "identites",
    resume: "Mon code couleur Violet, Rouge, Jaune : logo, palette et planche d'ambiance qui unifient toutes mes créations.",
    role: "Identité personnelle",
    outils: "Photoshop, Coolors",
    couverture: i("logo-purredyel", 600, 523, "Logo PurRedYel"),
    galerie: [
      i("moodboard-purredyel", 1118, 1060, "Planche d'ambiance PurRedYel"),
      i("palette-purredyel", 1200, 900, "Palette PurRedYel"),
      i("logo-purredyel", 600, 523, "Logo PurRedYel"),
    ],
  },
];

export const projetsEnVedette = ["aged-togo", "mornex-bakeyta-personnage", "orinu-day", "affiche-appel-des-racines", "atelier-origuna", "association-nonvignon"];

export function trouverProjet(slug: string) {
  return projets.find((p) => p.slug === slug);
}
