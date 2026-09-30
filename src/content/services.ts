export type Offre = { titre: string; detail: string; prix: string };

export type Parcours = {
  id: string;
  numero: string;
  public: string;
  titre: string;
  accroche: string;
  offres: Offre[];
  cta: string;
  messageWhatsApp: string;
};

export const parcours: Parcours[] = [
  {
    id: "graphisme",
    numero: "01",
    public: "Entreprises, associations et marques",
    titre: "Graphisme et identité visuelle",
    accroche: "Des visuels qui attirent l'œil et donnent envie d'acheter, pensés pour l'impression comme pour les réseaux sociaux.",
    offres: [
      { titre: "Logo et identité", detail: "Croquis, logo, couleurs et déclinaisons (AGED-Togo, Nonvignon…)", prix: "Sur devis" },
      { titre: "Affiches et flyers", detail: "Événements, promotions, formations, lancements", prix: "Sur devis" },
      { titre: "Papeterie et print", detail: "Cartes de visite, badges, certificats, fiches et contrats", prix: "Sur devis" },
      { titre: "Textile et sérigraphie", detail: "Designs pour t-shirts et posters, impression sérigraphique", prix: "Sur devis" },
    ],
    cta: "Demander un devis",
    messageWhatsApp: "Bonjour Mornex, je souhaite un devis pour un projet de graphisme (logo, affiche, flyer…).",
  },
  {
    id: "cours",
    numero: "02",
    public: "Élèves, jeunes créatifs et établissements",
    titre: "Cours de dessin",
    accroche:
      "J'enseigne le dessin depuis février 2024. À l'Atelier Origuna, tu apprends à créer tes propres BD africaines et à animer tes dessins sur tablette.",
    offres: [
      {
        titre: "Atelier Origuna : Orinu et animation",
        detail: "BD africaine avec ton style, animation 2D sur tablette. Tout le matériel est fourni. Séance de 2 heures à Togblé Kopé.",
        prix: "Inscription 2 500 FCFA (3 séances offertes), puis 500 FCFA la séance",
      },
      {
        titre: "Épreuve facultative de dessin",
        detail: "Préparation au BEPC, au BAC I et au BAC II, avec un programme complet de la 3e à la Terminale. Pour les établissements.",
        prix: "Sur devis",
      },
      {
        titre: "Dessin technique",
        detail: "Dessin de bâtiment, lecture de plans et calcul de spécialité (niveau CAP).",
        prix: "Sur devis",
      },
    ],
    cta: "Réserver ma place",
    messageWhatsApp: "Bonjour Mornex, je voudrais m'inscrire aux cours de dessin de l'Atelier Origuna.",
  },
  {
    id: "creation",
    numero: "03",
    public: "Auteurs, studios et créateurs de contenu",
    titre: "Personnages, univers et vidéo",
    accroche: "Pour celles et ceux qui veulent un univers à eux : des personnages qui marquent et des vidéos qui retiennent l'attention.",
    offres: [
      { titre: "Character design", detail: "Personnage, planches de poses et d'expressions", prix: "Sur devis" },
      { titre: "Environment design", detail: "Décors, lieux et univers complets", prix: "Sur devis" },
      { titre: "Animation 2D", detail: "Logo animé, courte séquence", prix: "Sur devis" },
      { titre: "Montage vidéo", detail: "Montages, edits d'animé, vidéos pour les réseaux sociaux", prix: "Sur devis" },
    ],
    cta: "Parler de mon projet",
    messageWhatsApp: "Bonjour Mornex, j'ai un projet de personnage, d'univers ou de vidéo.",
  },
];

export const servicesComplementaires = [
  { titre: "Création avec l'IA", texte: "Idées et visuels générés, puis retravaillés à la main." },
  { titre: "Community management", texte: "Gestion de vos réseaux sociaux et de vos publications." },
  { titre: "Rédaction et copywriting", texte: "Des textes qui accrochent pour vos affiches, posts et pages." },
  { titre: "Bureautique", texte: "Mise en page Word et PowerPoint, CV, devis, procès-verbaux." },
];

export const methode = [
  { titre: "On échange", texte: "Vous m'expliquez votre besoin sur WhatsApp. Je vous réponds avec une proposition et un prix clair." },
  { titre: "Je dessine", texte: "Croquis et pistes de couleurs, que vous validez avant la suite." },
  { titre: "Je finalise", texte: "La création prend forme, avec vos retours à chaque étape." },
  { titre: "Je livre", texte: "Des fichiers prêts pour l'impression et pour les réseaux sociaux." },
];
