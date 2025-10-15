# Faktuur.io Delivery Plan

> Mettre à jour ce fichier à chaque fois qu'une tâche est terminée.

## Phase 1 – Fondations

- ✅ Initialiser la structure Turborepo (apps, packages, shared)
- ❌ Configurer `pnpm-workspace.yaml` avec front, back et packages partagés
- ❌ Ajouter la configuration TypeScript de base (tsconfig racine + références)
- ❌ Mettre en place ESLint, Prettier et lint-staged adaptés au monorepo
- ❌ Configurer CI initiale (lint, type-check) via GitHub Actions

## Phase 2 – Authentification & Sécurité

- ❌ Installer AdonisJS dans le workspace backend
- ❌ Intégrer Better-auth et définir les modèles d'utilisateur/compte
- ❌ Configurer la protection des Server Actions Next.js avec Better-auth
- ❌ Définir les rôles et permissions de base dans le backend

## Phase 3 – Domaine & Données

- ❌ Choisir l'ORM (Lucid ou Prisma) et l'intégrer au backend
- ❌ Concevoir le schéma base de données (compte, client, contact, devis, facture, paiement, relance)
- ❌ Mettre en place le Data Access Layer avec schémas Zod partagés
- ❌ Implémenter services backend pour devis (CRUD + statut)
- ❌ Implémenter services backend pour factures (CRUD + statut)
- ❌ Implémenter services backend pour paiements (saisie + suivi)
- ❌ Implémenter services backend pour relances (planification + historique)

## Phase 4 – Frontend App

- ❌ Initialiser l'app Next.js 15 avec React Server Components
- ❌ Installer Shadcn UI et définir la charte (tokens, thèmes)
- ❌ Mettre en place Zustand et nuqs pour la gestion d'état des pages
- ❌ Implémenter le layout principal (navigation, sidebars, header)
- ❌ Créer le dashboard RSC (statistiques devis/factures/paiements)
- ❌ Implémenter le module Devis (listing, création, édition, envoi)
- ❌ Implémenter le module Factures (listing, création, paiement partiel/total)
- ❌ Implémenter le mini CRM (clients, contacts)
- ❌ Ajouter les validations client via schémas Zod partagés

## Phase 5 – PDF, Emails & Stockage

- ❌ Choisir la bibliothèque PDF backend (PDFKit ou React-pdf) et documenter le choix
- ❌ Implémenter la génération PDF pour devis et factures
- ❌ Configurer le stockage Hetzner S3 avec uploads sécurisés
- ❌ Intégrer le provider UseSend pour l'envoi d'emails transactionnels
- ❌ Générer les liens sécurisés de consultation (tokens expirables)

## Phase 6 – Paiements & Relances Automatiques

- ❌ Définir le modèle de suivi des paiements (montant reçu/restant)
- ❌ Intégrer le provider de paiement cible (Stripe ou GoCardless) et ses webhooks
- ❌ Mettre en place la scheduler queue (CRON/job queue Adonis)
- ❌ Implémenter les relances automatiques avec templates emails

## Phase 7 – Qualité & Observabilité

- ❌ Écrire tests unitaires sur le DAL et les services métiers
- ❌ Ajouter tests de composants critiques côté front
- ❌ Mettre en place tests end-to-end (Playwright) pour le parcours devis/facture
- ❌ Configurer monitoring (Sentry) et logs centralisés (Logtail)
- ❌ Activer traces OpenTelemetry sur backend et frontend

## Phase 8 – Déploiement & Infra

- ❌ Conteneuriser l'app Next.js et le backend Adonis
- ❌ Configurer les pipelines Coolify pour staging et production
- ❌ Gérer les secrets et variables d'environnement dans Coolify
- ❌ Mettre en place la stratégie de migration base de données
- ❌ Configurer sauvegardes automatiques de la base et restauration

## Phase 9 – Roadmap Produit & Documentation

- ❌ Définir la roadmap MVP (fonctionnalités, priorités, jalons)
- ❌ Documenter les API internes et schémas Zod
- ❌ Rédiger un guide d'installation et de contribution développeur
- ❌ Organiser le feedback loop utilisateurs pilote
