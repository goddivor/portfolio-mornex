# Journal chronologique

Le récit daté de tout ce qui a été fait sur le projet, du plus ancien au plus récent.

---

## 2026-09-30 : lancement du projet

### Contexte

Mornex Bakeyta souhaite créer son portfolio personnel. Exigence posée dès le départ : **tout documenter de A à Z** (processus, outils, technologies, étapes, choix et leurs raisons) dans un dossier dédié, le « JOURNAL DE TAF ».

Mornex fournira progressivement, dans le dossier du projet, les données nécessaires à son portfolio (informations personnelles, parcours, projets, visuels…). Ces données seront vérifiées régulièrement et intégrées au fur et à mesure.

### Ce qui a été fait

1. **État des lieux du dossier du projet** (`C:\Users\HP\Desktop\JsProject\Portfolio MORNEX`).
   Le dossier ne contenait qu'un sous-dossier vide, `Nouveau dossier`. Aucune donnée personnelle n'a encore été déposée.
2. **Inventaire de l'environnement de travail** : Windows 11 Pro, Git 2.45.0, Node.js 24.19.0, npm 11.17.0 (détails dans `02-outils-et-technologies.md`).
3. **Initialisation du dépôt Git** sur la branche `main` (décision `D-001`).
4. **Création du dossier `JOURNAL DE TAF`** et de sa structure en cinq fichiers Markdown (décisions `D-002` et `D-003`).
5. **Réception des premières données de Mornex** : un logo, une photo d'identité, huit photos en cosplay et deux dossiers (encore vides) pour ses projets réalisés et en cours. Inventaire détaillé dans `05-ressources.md`.
6. **Préparation de la connexion à GitHub** : la GitHub CLI (`gh` 2.66.1) est installée, mais connectée à un compte qui n'est pas celui de Mornex. Choix d'un dépôt public sur le compte de Mornex (décision `D-004`) ; Mornex se connecte avec `gh auth login`.
7. **Tentative de connexion du compte GitHub de Mornex** : la connexion par `gh auth login` n'a pas abouti. Décision de travailler provisoirement avec le compte `goddivor` (décision `D-005`).
8. **Choix de la pile de services** : GitHub (code), Vercel (mise en ligne), MongoDB (base de données) ; décision `D-005`.
9. **Création du fichier `.gitignore`** : il exclut du dépôt les données brutes de Mornex, les dépendances, les builds et les fichiers de variables d'environnement.
10. **Premier commit et création du dépôt public** `goddivor/portfolio-mornex` sur GitHub, puis envoi du code.

### Prochaines actions

- Trouver une solution pour transférer le dépôt sur le compte GitHub personnel de Mornex.
- Relier le dépôt à Vercel et créer la base MongoDB Atlas.
- Attendre le dépôt des données de Mornex dans le dossier du projet, puis les analyser.
- Définir l'identité du portfolio (sections, ton, style visuel).
- Choisir le framework du site (voir `E2` dans `04-etapes-du-projet.md`).

---

## 2026-09-30 (suite) : découverte du profil de Mornex

### Ce qui a été fait

1. **Réception de deux liens** vers les blogs de Mornex, sur lesquels il avait déjà commencé à se présenter.
2. **Extraction du contenu complet** des articles. La page web ne livrant qu'un aperçu, le texte intégral a été récupéré par le flux JSON public de Blogger (`/feeds/posts/default?alt=json`), avec `curl` et un petit script Python.
3. **Rédaction de la fiche `06-profil-de-mornex.md`** : identité, métiers, concept Orinu, parcours, compétences, inspirations, vision, réseaux, et liste des points à confirmer.

### Ce que l'on retient

Mornex n'est pas développeur : c'est un **artiste** (dessinateur, graphiste, animateur 2D, professeur de dessin BD africain) et le **créateur de l'Orinu**, un concept de BD africaine moderne. Le portfolio devra donc être avant tout **visuel** et porter une **identité africaine** forte, fidèle à son slogan « Ogniaka – Ozonka : être africain, faire africain ».

### Prochaines actions

- Faire valider par Mornex les points listés à la fin de `06-profil-de-mornex.md`.
- Recevoir ses œuvres (dessins, planches Orinu, affiches, logos, vidéos) pour les dossiers de projets.
- Définir les sections du site à partir du profil.

---

## 2026-09-30 (suite) : précisions de Mornex et vérification des accès

### Ce qui a été fait

1. **Précisions de Mornex sur ses activités**, intégrées dans `06-profil-de-mornex.md` :
   - il **enseigne déjà** le dessin (dessin technique industriel et dessin artistique : BD, animation 2D) ;
   - il est **graphiste designer** (affiches, logos, flyers, cartes de visite, designs pour t-shirts et posters, character design, environment design) ;
   - il propose aussi la vidéo et l'animation, la création assistée par IA, le community management et le copywriting ;
   - le **cosplay est une passion**, pas un métier : un moyen d'incarner ses personnages.
2. **Positionnement du site** arrêté (décision `D-006`).
3. **Vérification des accès existants** (décision `D-007`) : Vercel est opérationnel sur le compte `goddivor` ; l'Atlas CLI est liée au compte MongoDB de Mornex, mais sa session a expiré.

### Prochaines actions

- Reconnecter l'Atlas CLI (`atlas auth login`), puis créer ou choisir le cluster du portfolio.
- Initialiser le projet Next.js et le relier à Vercel.

---

## 2026-09-30 (suite) : recherche de modèles de design

### Ce qui a été fait

1. **Exploration de la galerie Figma** des modèles de portfolio, à la demande de Mornex. La page bloquant les lectures automatiques (erreur 403), elle a été parcourue avec **Claude in Chrome**, une extension qui pilote le navigateur Chrome.
2. **Revue des 48 modèles les plus utilisés**, puis examen visuel des candidats adaptés à un artiste et graphiste.
3. **Présélection de trois modèles** (et d'un modèle complémentaire), présentés à Mornex et consignés dans `05-ressources.md`.

### Prochaines actions

- Mornex choisit un modèle, ou une combinaison de plusieurs.

---

## 2026-09-30 (suite) : direction artistique et stratégie de conversion

### Demande de Mornex

Un portfolio qui **convertit le plus possible** les visiteurs en clients, professionnel mais fidèle à son univers, en cohérence avec sa personnalité et ses réseaux sociaux.

### Ce qui a été fait

1. **Recherche documentaire** sur ce qui fait convertir un portfolio, confiée à un agent de recherche en parallèle. Chaque chiffre a été rapproché de sa source d'origine, et les chiffres douteux ont été signalés.
2. **Analyse de l'identité visuelle** : miniatures des 8 photos de cosplay et extraction automatique des couleurs du logo et des photos avec Python et Pillow.
3. **Analyse des réseaux sociaux** avec Claude in Chrome : profils TikTok et Instagram (les listes de vidéos exigent une connexion, seuls les profils et les vignettes Instagram ont pu être consultés), et présentation Gamma de l'Orinu. Découverte de l'**Orinu Day** et du **Clan Bakeyta**. Le compte TikTok `@mornex.bakeyta4` n'existe plus.
4. **Rédaction de `07-direction-artistique-et-conversion.md`** : données de conversion, identité visuelle, palette, typographie, ton de voix, structure du site en 8 sections, et liste des éléments à obtenir de Mornex.

### Prochaines actions

- Faire valider la direction artistique par Mornex.
- Recueillir les éléments listés dans la partie 5 du document.

---

## 2026-09-30 (suite) : maquette complète du site

### Ce qui a été fait

1. **Préparation des images** avec Python et Pillow : logo, portrait et six photos de cosplay redimensionnés (100 à 125 Ko chacun au lieu de 8 Mo), puis envoyés sur le canevas.
2. **Création de la maquette** sur un canevas de design Claude (décision `D-008`) : https://claude.ai/artifact/7Tii9gPhBrUSHA7bcaNW8B
3. **Onze planches**, fidèles à la direction artistique (`07-direction-artistique-et-conversion.md`) :
   - 1. Accueil · 2. À propos · 3. Services et tarifs · 4. Réalisations (galerie filtrable) ;
   - 5. Étude de cas « Du croquis au cosplay : la mascotte de l'Orinu » · 6. Témoignages et preuves (filtre clients / élèves) · 7. CV numérique · 8. Contact (boutons WhatsApp par besoin et formulaire de 3 champs) ;
   - l'accueil en version mobile, et deux composants partagés (navigation, pied de page).
4. **Polices retenues** : *Anton* (titres), *DM Sans* (texte), *Permanent Marker* (slogan « Ogniaka – Ozonka »), toutes gratuites sur Google Fonts.

### Prochaines actions

- Recueillir les remarques de Mornex sur la maquette.
- Remplacer les éléments entre crochets par les vraies données.

---

## 2026-09-30 (suite) : nouvelles données et construction du vrai site

### Nouvelles données reçues

Mornex a complété tous les dossiers (inventaire dans `05-ressources.md`) :
- `Les projets que j'ai fait/` : logos AGED-Togo (du croquis à la version finale), badges de l'Orinu Day, stratégie de marque Orinu, identité de l'Atelier Origuna, affiches, illustrations, planches du personnage, logo de l'Association Nonvignon, fiche et contrat du salon Rose Esthétique, code couleur PurRedYel, 17 montages vidéo (9,7 Go) ;
- `Les projets en cours de developpement/` : le Programme de Dessin et Arts plastiques (BEPC, BAC I et BAC II) ;
- `Me Nex/` : profil complet (`profil.json`), CV, lettres de motivation et pièces officielles ;
- `Design PORTFOLIO/` : 25 références de design, dont la direction artistique choisie.

### Ce qui a été fait

1. **Analyse** des références et des travaux (planches-contacts générées avec Pillow) et des PDF (texte extrait avec PyMuPDF). Découverte des vrais tarifs de l'Atelier Origuna et du code couleur PurRedYel.
2. **Protection des données personnelles** (décision `D-011`).
3. **Préparation de 38 images** en WebP (4,2 Mo au total), du favicon et de l'image de partage pour les réseaux sociaux (1200 × 630 px).
4. **Création du projet Next.js 16** (décision `D-010`) avec la direction artistique « couverture de magazine » (décision `D-009`) :
   - pages : accueil, services, réalisations (galerie filtrable), 13 fiches projet dont 2 études de cas complètes (AGED-Togo et le personnage Mornex Bakeyta), à propos, CV numérique imprimable en PDF, preuves et témoignages, contact ;
   - formulaires de contact et d'avis enregistrés dans MongoDB ; avis publiés seulement après validation ;
   - bouton WhatsApp flottant et messages WhatsApp préremplis selon le besoin ;
   - référencement : titres et descriptions par page, `sitemap.xml`, `robots.txt`, image de partage.
5. **Vérifications** : TypeScript sans erreur, ESLint sans avertissement, compilation de production réussie (27 pages générées), captures d'écran de contrôle sur ordinateur et sur mobile avec Playwright.
6. **Ajustements après captures** : « FOLIO » cachait le visage de Mornex et chevauchait le sous-titre ; les lettres géantes ont été réduites et déplacées, et le dégradé du bas étendu à toute la largeur.

### Difficultés rencontrées

- ESLint saturait la mémoire en analysant les 9,7 Go de vidéos : les dossiers de données sont désormais ignorés dans `eslint.config.mjs` et `tsconfig.json`.
- Les types `PageProps` et `LayoutProps` de Next.js 16 sont générés par `next typegen` (ou pendant la compilation).
- L'extension Claude in Chrome s'est déconnectée : les captures ont été faites avec Playwright et le Chromium déjà présent sur la machine.
- Après une recompilation, l'ancien serveur local servait des fichiers périmés (page sans mise en forme) : il faut arrêter le serveur avant de le relancer.
