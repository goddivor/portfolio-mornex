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

> **Statut** : révisée par `D-005` (compte GitHub utilisé).

- **Date** : 2026-09-30
- **Contexte** : Mornex souhaite déployer son portfolio sur son propre compte GitHub. L'ordinateur de travail était déjà connecté à un autre compte GitHub, qui n'est pas celui de Mornex.
- **Options envisagées** :
  1. Dépôt public.
  2. Dépôt privé.
- **Choix retenu** : option 1, dépôt public sur le compte personnel de Mornex.
- **Justification** : un dépôt public permet d'utiliser GitHub Pages gratuitement pour la mise en ligne ; il permet aussi aux recruteurs de consulter le code, ce qui valorise le portfolio. Le compte de Mornex est ajouté à la GitHub CLI (`gh auth login`) sans supprimer le compte déjà présent sur la machine.
- **Point de vigilance** : les photos d'origine (64 Mo) et la photo d'identité ne seront pas publiées telles quelles ; seules des versions optimisées, validées par Mornex, iront dans le dépôt.

---

## D-005 : retenir la pile GitHub, Vercel et MongoDB ; utiliser provisoirement le compte GitHub « goddivor »

- **Date** : 2026-09-30
- **Contexte** : la connexion du compte GitHub personnel de Mornex par la GitHub CLI n'a pas abouti. Mornex a par ailleurs fixé les trois services du projet.
- **Choix retenus** :
  1. **GitHub** pour héberger le code ; le dépôt public `portfolio-mornex` est créé sur le compte `goddivor`, déjà connecté sur la machine. Il pourra être transféré plus tard sur le compte de Mornex (fonction « Transfer ownership » de GitHub, qui conserve tout l'historique).
  2. **Vercel** pour mettre le site en ligne, à la place de GitHub Pages.
  3. **MongoDB** comme base de données.
- **Justification** :
  - Vercel se relie au dépôt GitHub : chaque envoi de code (`git push`) redéploie le site automatiquement ; Vercel sait aussi exécuter du code côté serveur, ce que GitHub Pages ne permet pas.
  - MongoDB stocke des documents au format proche du JSON, bien adapté à un contenu souple (projets, compétences, messages du formulaire de contact) ; sa version hébergée, MongoDB Atlas, propose une offre gratuite.
  - Utiliser le compte `goddivor` débloque le travail tout de suite, sans attendre la résolution du problème de connexion.
- **Conséquence** : les dossiers de données brutes de Mornex sont exclus du dépôt (fichier `.gitignore`), car ils contiennent des originaux lourds (64 Mo) et des données personnelles. Les clés de connexion à MongoDB ne seront jamais versionnées (fichiers `.env*` exclus).
