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
