# Décisions et choix

Chaque décision importante est consignée ici avec son contexte, les options envisagées, le choix retenu et sa justification.

---

## D-001 : versionner le projet avec Git dès le premier jour

- **Date** : 2026-09-30
- **Contexte** : le projet doit être documenté de A à Z ; il faut donc pouvoir retracer précisément son évolution.
- **Options envisagées** :
  1. Travailler sans gestion de versions.
  2. Initialiser un dépôt Git local dès le départ.
- **Choix retenu** : option 2, dépôt Git local sur la branche `main`.
- **Justification** : Git conserve l'historique de chaque modification, permet de revenir à un état antérieur et complète le journal avec une trace technique précise. Le dépôt pourra plus tard être publié sur GitHub (utile pour l'hébergement et pour montrer le code).

---

## D-002 : rédiger le journal en Markdown

- **Date** : 2026-09-30
- **Contexte** : le journal doit être lisible par tous, facile à mettre à jour et conservé avec le code.
- **Options envisagées** :
  1. Document Word (`.docx`).
  2. Document en ligne (Google Docs, Notion…).
  3. Fichiers Markdown (`.md`) dans le dossier du projet.
- **Choix retenu** : option 3, fichiers Markdown.
- **Justification** : le Markdown est du texte brut, donc versionné par Git comme le code ; il s'affiche proprement sur GitHub et dans VS Code ; il peut être converti en PDF ou en Word à tout moment si un rapport formel est nécessaire.

---

## D-003 : découper le journal en cinq fichiers thématiques

- **Date** : 2026-09-30
- **Contexte** : un seul fichier deviendrait vite trop long et difficile à parcourir.
- **Choix retenu** : un fichier par angle de lecture (chronologie, outils, décisions, étapes, ressources), plus un `README.md` qui sert de sommaire.
- **Justification** : chaque lecteur trouve directement ce qu'il cherche ; le récit chronologique renvoie aux décisions par leur identifiant, ce qui évite les répétitions.


---

## D-004 : héberger le code sur le compte GitHub de Mornex, en dépôt public

> **Statut** : révisée par `D-005` (compte GitHub utilisé).

- **Date** : 2026-09-30
- **Contexte** : Mornex souhaite déployer son portfolio sur son propre compte GitHub. L'ordinateur de travail était déjà connecté à un autre compte GitHub, qui n'est pas celui de Mornex.
- **Options envisagées** :
  1. Dépôt public.
  2. Dépôt privé.
- **Choix retenu** : option 1, dépôt public sur le compte personnel de Mornex.
- **Justification** : un dépôt public permet d'utiliser GitHub Pages gratuitement pour la mise en ligne ; il permet aussi aux recruteurs de consulter le code, ce qui valorise le portfolio. Le compte de Mornex est ajouté à la GitHub CLI (`gh auth login`) sans supprimer le compte déjà présent sur la machine.
- **Point de vigilance** : les photos d'origine (64 Mo) et la photo d'identité ne seront pas publiées telles quelles ; seules des versions optimisées, validées par Mornex, iront dans le dépôt.

---

## D-005 : retenir la pile GitHub, Vercel et MongoDB ; utiliser provisoirement le compte GitHub « goddivor »

- **Date** : 2026-09-30
- **Contexte** : la connexion du compte GitHub personnel de Mornex par la GitHub CLI n'a pas abouti. Mornex a par ailleurs fixé les trois services du projet.
- **Choix retenus** :
  1. **GitHub** pour héberger le code ; le dépôt public `portfolio-mornex` est créé sur le compte `goddivor`, déjà connecté sur la machine. Il pourra être transféré plus tard sur le compte de Mornex (fonction « Transfer ownership » de GitHub, qui conserve tout l'historique).
  2. **Vercel** pour mettre le site en ligne, à la place de GitHub Pages.
  3. **MongoDB** comme base de données.
- **Justification** :
  - Vercel se relie au dépôt GitHub : chaque envoi de code (`git push`) redéploie le site automatiquement ; Vercel sait aussi exécuter du code côté serveur, ce que GitHub Pages ne permet pas.
  - MongoDB stocke des documents au format proche du JSON, bien adapté à un contenu souple (projets, compétences, messages du formulaire de contact) ; sa version hébergée, MongoDB Atlas, propose une offre gratuite.
  - Utiliser le compte `goddivor` débloque le travail tout de suite, sans attendre la résolution du problème de connexion.
- **Conséquence** : les dossiers de données brutes de Mornex sont exclus du dépôt (fichier `.gitignore`), car ils contiennent des originaux lourds (64 Mo) et des données personnelles. Les clés de connexion à MongoDB ne seront jamais versionnées (fichiers `.env*` exclus).

---

## D-006 : positionner le portfolio sur deux métiers, avec le cosplay en passion

- **Date** : 2026-09-30
- **Contexte** : Mornex a précisé ses activités. Il exerce deux métiers (enseignant de dessin, graphiste designer), propose des services complémentaires (vidéo, IA, community management, rédaction) et pratique le cosplay par passion.
- **Choix retenu** : le portfolio met au premier plan les **deux métiers exercés** ; les services complémentaires forment une offre secondaire ; le cosplay et l'univers Orinu apparaissent dans une partie **passion et univers créatif**, et non comme une prestation.
- **Justification** : un visiteur (client, école, recruteur) doit comprendre en quelques secondes ce que Mornex fait **aujourd'hui** et ce qu'il peut lui commander. Le cosplay et l'Orinu, eux, donnent au site sa personnalité et le distinguent des autres portfolios de graphistes.

---

## D-007 : réutiliser les comptes Vercel et MongoDB Atlas déjà configurés

- **Date** : 2026-09-30
- **Contexte** : Mornex dispose déjà d'accès à Vercel et à MongoDB, configurés sur la machine de travail.
- **Constat** :
  - la **Vercel CLI** est connectée au compte `goddivor`, le même que pour GitHub ;
  - l'**Atlas CLI** (outil en ligne de commande de MongoDB Atlas) est liée au compte MongoDB de Mornex, mais sa session avait expiré : une reconnexion (`atlas auth login`) est nécessaire.
- **Choix retenu** : ne créer aucun nouveau compte et utiliser ces accès existants.
- **Justification** : GitHub et Vercel sur le même compte permettent de relier le dépôt en un clic pour le déploiement automatique ; la base de données reste sur le compte de Mornex, qui en garde la propriété.

---

## D-008 : réaliser la maquette sur un canevas de design Claude, avant tout code

- **Date** : 2026-09-30
- **Contexte** : Mornex a demandé une maquette complète du site (accueil, à propos, services, galerie, étude de cas, CV numérique, témoignages, contact) pour valider l'ambiance avant le développement.
- **Options envisagées** :
  1. Maquette dans Figma.
  2. Maquette codée directement en Next.js.
  3. Canevas de design Claude (Artifact « Design ») : des planches HTML disposées sur un canevas zoomable, cliquables, commentables et partageables.
- **Choix retenu** : option 3.
- **Justification** : pas de compte ni de logiciel à installer pour Mornex ; les pages sont reliées entre elles (on peut naviguer comme sur le vrai site) ; les filtres de la galerie, des avis et du formulaire fonctionnent ; Mornex peut commenter directement sur la maquette. Comme les planches sont en HTML, le passage au code Next.js sera plus direct.
- **Principe appliqué** : aucun contenu inventé. Les informations inconnues (prix, témoignages, nombre d'élèves, numéro WhatsApp…) apparaissent entre crochets, par exemple `[PRIX] FCFA`, pour être remplacées par les vraies données.

---

## D-009 : adopter la direction artistique « couverture de magazine » avec la palette PurRedYel

- **Date** : 2026-09-30
- **Contexte** : Mornex a fourni une référence (`Design PORTFOLIO/The Portfolio!.jpeg`) : un portrait détouré devant un titre géant « PORTFOLIO » en lettres jaunes condensées, sur un fond uni chaud, avec un court texte en capitales en bas. Il demande cette direction, mais avec **ses** couleurs : violet, rouge, jaune.
- **Choix retenu** :
  - reprendre la composition de la référence pour l'accueil : « PORT » derrière la tête, « FOLIO » devant le corps, portrait détouré au centre ;
  - appliquer le code couleur **PurRedYel** trouvé dans ses fichiers (`codecouleur PurRedYel.png`) : violet `#67309E`, rouge `#E60013`, jaune `#F2CB0A`, prune `#29102E`, bordeaux `#520A0D`, noir `#020003` ;
  - fond **rouge** pour l'accueil, comme la référence, afin que son bonnet violet ressorte ; violet et prune pour les autres sections ;
  - photo principale : `_MG_2157`, déjà détourée par Mornex (`Sans titre 13`), où il tient un téléphone. D'où l'appel à l'action « Un projet ? Appelle-moi ».
- **Justification** : cette composition est immédiatement reconnaissable, montre son visage (la photo d'une vraie personne augmente la confiance) et reste simple, ce qui compte pour la première impression.
- **Conséquence** : la maquette précédente (`D-008`) garde sa valeur pour la structure et le contenu, mais son style visuel est remplacé.

---

## D-010 : construire le site avec Next.js 16, Tailwind CSS 4, MongoDB et Vercel

- **Date** : 2026-09-30
- **Choix retenus** :
  - **Next.js 16** (App Router, TypeScript), dernière version disponible ; application simple placée **à la racine** du dossier, selon les conventions du projet ;
  - **Tailwind CSS 4** pour le style, avec la palette PurRedYel déclarée comme thème ;
  - **polices Google** chargées par `next/font` : Anton (titres), DM Sans (texte), Permanent Marker (slogan) ;
  - **MongoDB** (pilote officiel `mongodb`) pour enregistrer les messages du formulaire de contact et les avis, avec **Zod** pour valider les données reçues ;
  - **aucun contenu inventé** : les prix inconnus sont affichés « Sur devis » ; la page de preuves ne montre que des références réelles, et les avis n'apparaissent qu'après validation par Mornex.
- **Justification** : Next.js est conçu par l'équipe de Vercel et s'y déploie sans configuration ; les pages sont générées à l'avance, donc très rapides, ce qui compte sur mobile au Togo ; MongoDB (choix de Mornex) convient à des données simples comme des messages.
- **Point d'attention** : Next.js 16 introduit des changements (paramètres de page asynchrones, `preload` au lieu de `priority` pour les images, qualités d'image limitées par défaut). La documentation fournie avec le paquet (`node_modules/next/dist/docs/`) a été lue avant d'écrire le code.

---

## D-011 : protéger les données personnelles de Mornex

- **Date** : 2026-09-30
- **Contexte** : le dossier `Me Nex/` contient des pièces officielles (acte de naissance, certificat de nationalité, analyses médicales, attestations), des candidatures et des données de prospection.
- **Choix retenu** : `Me Nex/` et `Design PORTFOLIO/` sont ajoutés au `.gitignore`, comme les autres dossiers de données brutes. Le site n'utilise de ces documents que des informations professionnelles : poste à l'IPL « Les Dinosaures » depuis février 2024, Bac F4 (2023), formation en sérigraphie (2023). La date et le lieu de naissance exacts ne sont pas publiés.
- **Justification** : le dépôt GitHub est public ; ces documents ne doivent jamais y apparaître.
