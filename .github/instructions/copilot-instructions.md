# Faktuur.io Copilot Instructions

## Context & Goals

- SaaS ciblant les TPE/PME sans solution de facturation modernisée.
- Fonctionnalités clés : création/édition/envoi de devis et factures PDF, suivi des statuts et paiements (total/partiel), mini CRM, relances automatiques courriel.
- Ne jamais effectuer d'accès direct base de données depuis le front.

## Monorepo & Tooling

- Monorepo géré avec Turborepo et `pnpm` workspaces.
- Tout le code est en TypeScript.
- Respecter ASCII par défaut dans les fichiers.
- Ajouter des commentaires uniquement pour clarifier les blocs complexes.

## Frontend (Next.js 15)

- Utiliser React 19 avec React Server Components et Server Actions.
- Aucune API Route Next.js : la communication passe par Server Actions / appels backend dédiés.
- Stack UI : Shadcn UI + TailwindCSS.
- State management : Zustand pour états clients, `nuqs` pour synchronisation URL/state.
- Validation des données côté front via Zod réutilisant les schémas partagés.

## Backend (AdonisJS + Better-auth)

- Backend séparé dans le monorepo, framework AdonisJS.
- Authentification centralisée avec Better-auth.
- Implémenter un Data Access Layer pour encapsuler ORM (Lucid ou Prisma selon choix) et exposer des services métier.
- Les services doivent couvrir : devis, factures, paiements, contacts, relances.

## Data & Domain Guidelines

- Modéliser entités principales : Compte, Client, Contact, Devis, Facture, Paiement, Relance.
- DAL responsable des interactions DB et des transformations vers des DTO validés par Zod.
- Prévoir gestion des statuts (brouillon, envoyé, accepté, payé partiellement, payé totalement, en retard).

## PDF & Emailing

- Génération PDF côté backend (ex. PDFKit/React-pdf).
- Stocker les PDF sur un service de stockage Hetzner S3 et inclure liens sécurisés dans les courriels.
- Envoi emails transactionnels via provider UseSend avec webhooks pour le suivi.

## Paiements & Relances

- Suivi des paiements (montants reçus/restants) et historique des relances.
- Scheduler/queue pour relances automatiques (CRON ou job queue).
- Prévoir intégration éventuelle avec providers de paiement (Stripe, GoCardless) via webhooks sécurisés.

## Déploiement & Infra

- Déploiement sur VPS orchestré avec Coolify.
  - Automatiser pipelines build/test avant déploiement.
  - Conteneuriser frontend et backend (Docker) avec configurations Coolify.
  - Gérer secrets via Coolify (variables d’environnement).
  - Mettre en place staging/prod, sauvegardes base de données et stratégie migration.

## Qualité & Observabilité

- Tests unitaires sur DAL/services et composants critiques.
- Tests e2e Playwright pour parcours devis/facture.
- Monitoring & logs (Sentry, Logtail, OpenTelemetry).
- CI : lint, type-check, tests ; refuser merges sans validation.

## Workflow Expectations

- Respecter conventions TypeScript strictes (no implicit any, strict null checks).
- Prioriser composabilité et réutilisation (hooks, server functions, services).
- Documenter via README/guide interne, exposer schémas Zod partagés.
- Maintenir à jour la documentation technique et fonctionnelle.
- Documenter les décisions d'architecture majeures.
- Suivre les meilleures pratiques de sécurité (XSS, CSRF, injections).
- Optimiser performances (lazy loading, code splitting, caching).
- Maintenir cohérence du design system Shadcn (tokens, thèmes).
- Documenter les endpoints backend et schémas de données.
- Utiliser des conventions de nommage claires et cohérentes.
- Prioriser l'expérience utilisateur (UX) dans les interfaces.
- Assurer l'accessibilité (WCAG) dans les composants UI.
- Prévoir la scalabilité de l'application (architecture modulaire).
- Mettre en place des revues de code rigoureuses.
- Favoriser la collaboration entre frontend et backend.
- Anticiper les besoins futurs (ex. multi-devises, multi-langues).
