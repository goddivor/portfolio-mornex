# Outils et technologies

L'inventaire de tout ce qui sert à construire le portfolio. Chaque entrée précise la **nature** de l'outil, son **rôle** dans le projet et la **version** utilisée.

## Environnement de travail

| Outil | Nature | Rôle dans le projet | Version |
|---|---|---|---|
| Windows 11 Pro | Système d'exploitation | Machine de développement | 10.0.22631 |
| PowerShell / Git Bash | Interpréteurs de commandes (terminaux) | Exécution des commandes (Git, npm, scripts) | PowerShell 7+ |
| Claude Code (modèle Claude Opus 5.5) | Assistant de programmation fondé sur l'IA, utilisé en ligne de commande | Rédaction du code, organisation du projet, tenue du journal | Opus 5.5 |

## Gestion de versions

| Outil | Nature | Rôle dans le projet | Version |
|---|---|---|---|
| Git | Système de gestion de versions décentralisé (logiciel libre) | Historiser chaque modification du projet pour suivre l'avancement et pouvoir revenir en arrière | 2.45.0 |
| GitHub | Plateforme en ligne d'hébergement de dépôts Git | Héberger le code du portfolio (dépôt public `goddivor/portfolio-mornex`) | Service en ligne |
| GitHub CLI (`gh`) | Outil en ligne de commande officiel de GitHub | Connecter le compte de Mornex, créer le dépôt distant, configurer GitHub Pages sans passer par le site web | 2.66.1 |

## Environnement JavaScript

| Outil | Nature | Rôle dans le projet | Version |
|---|---|---|---|
| Node.js | Environnement d'exécution JavaScript hors du navigateur | Faire tourner les outils de développement (serveur local, compilation, build) | 24.19.0 |
| npm | Gestionnaire de paquets livré avec Node.js | Installer les bibliothèques et lancer les scripts du projet | 11.17.0 |

## Recherche et conception

| Outil | Nature | Rôle dans le projet |
|---|---|---|
| Figma (communauté) | Outil de conception d'interfaces en ligne, avec une galerie de modèles partagés | Source d'inspiration pour le design du portfolio |
| Claude in Chrome | Extension qui permet à Claude de piloter le navigateur Chrome | Parcourir les sites qui bloquent les lectures automatiques (galerie Figma, TikTok, Instagram) |
| Python et Pillow | Langage de script et bibliothèque de traitement d'images | Créer des miniatures des photos et extraire automatiquement la palette de couleurs du logo et du cosplay |

## Maquette

| Outil | Nature | Rôle dans le projet |
|---|---|---|
| Canevas de design Claude (Artifact « Design ») | Espace de maquettage en ligne : planches HTML sur un canevas zoomable, cliquables et commentables | Maquette complète du site, validée par Mornex avant le développement |
| Google Fonts : Anton, DM Sans, Permanent Marker | Bibliothèque de polices gratuites | Typographie du site (titres, texte, slogan) |

## Documentation

| Outil | Nature | Rôle dans le projet |
|---|---|---|
| Markdown | Langage de balisage léger (texte brut mis en forme) | Format de tous les fichiers du JOURNAL DE TAF |

## Services en ligne du portfolio

| Service | Nature | Rôle dans le projet |
|---|---|---|
| Vercel | Plateforme d'hébergement et de déploiement continu pour sites et applications web | Mettre le portfolio en ligne ; redéploiement automatique à chaque `git push` sur GitHub |
| Vercel CLI | Outil en ligne de commande de Vercel (version 41.4.1), connecté au compte `goddivor` | Lier le projet à Vercel, gérer les variables d'environnement, déployer depuis le terminal |
| MongoDB (Atlas) | Base de données NoSQL orientée documents ; Atlas est sa version hébergée dans le cloud, avec une offre gratuite | Stocker le contenu dynamique (projets, compétences, messages de contact…) ; compte de Mornex |
| Atlas CLI | Outil en ligne de commande de MongoDB Atlas (version 1.58.3) | Créer et administrer la base (cluster, utilisateurs, accès réseau) depuis le terminal |
| mongosh | Console interactive de MongoDB (version 2.3.9) | Interroger et vérifier la base de données directement |

## Pile technique du site

| Outil | Nature | Rôle dans le projet | Version |
|---|---|---|---|
| Next.js | Framework React pour sites web (rendu serveur et pages statiques) | Structure du site, pages, routes API | 16.3.7 |
| React | Bibliothèque d'interfaces | Composants du site | 19.2.8 |
| TypeScript | JavaScript typé | Fiabilité du code | 5 |
| Tailwind CSS | Framework CSS utilitaire | Mise en forme, palette PurRedYel | 4 |
| next/font (Google Fonts) | Chargement optimisé des polices | Anton, DM Sans, Permanent Marker | intégré |
| mongodb | Pilote officiel MongoDB pour Node.js | Enregistrer messages et avis | 7.7.0 |
| Zod | Bibliothèque de validation de données | Vérifier les formulaires côté serveur | 4.6.5 |
| ESLint | Analyseur de code | Qualité du code | 9 |
| PyMuPDF | Bibliothèque Python de lecture de PDF | Extraire le texte des PDF de Mornex et en faire des images | outil local |
| Playwright | Outil d'automatisation de navigateur | Captures d'écran pour vérifier le rendu | 1.52.0 |
