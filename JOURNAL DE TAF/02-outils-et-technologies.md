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

Le framework, le style et les animations seront arrêtés à l'étape `E2` (voir `04-etapes-du-projet.md`).
