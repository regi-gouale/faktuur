# Faktuur.io Monorepo

![CI](https://github.com/regi-gouale/faktuur/actions/workflows/ci.yml/badge.svg)

Faktuur.io est un SaaS de facturation destiné aux petites entreprises qui gèrent encore leurs devis et factures dans des outils génériques. Le projet vit dans un monorepo Turborepo/PNPM et alimente :

- **`apps/web`** – application Next.js 15 (React 19, React Server Components, Server Actions) pour créer, envoyer et suivre les documents de facturation.
- **`apps/docs`** – site de documentation produit généré avec Next.js.
- **`packages/ui`** – design system réutilisable (Shadcn UI, TailwindCSS, composants partagés).
- **`packages/shared`** _(à venir)_ – modules métiers communs (validation Zod, contrats de données).
- **`apps/api`** _(à venir)_ – backend AdonisJS + Better-auth exposant un Data Access Layer sécurisé.

## Pourquoi Faktuur.io est utile

- Génération et envoi de devis/factures PDF conformes.
- Suivi des paiements (total/partiel) et relances automatiques par email.
- Mini CRM pour gérer comptes, clients et contacts.
- Séparation stricte des responsabilités : aucune requête base de données depuis le front, tout passe par le backend.

## Getting Started

### Prérequis

- Node.js >= 18
- PNPM 10 (via `corepack enable` ou `npm install -g pnpm`)

### Installation

```bash
pnpm install
```

### Lancer les applications

```bash
# Démarrer toutes les applications en parallèle (frontend + docs)
pnpm dev

# Cibler uniquement l'app web
pnpm turbo run dev --filter=web

# Lancer le backend (dès qu'il sera disponible)
pnpm turbo run dev --filter=api
```

### Qualité du code

```bash
# Lint global
pnpm lint

# Vérification TypeScript
pnpm check-types

# Formatage Prettier
pnpm format
```

> Les commits déclenchent un hook `lint-staged` (ESLint + Prettier) et la CI GitHub Actions exécute lint + type-check.

### Structure du dépôt

```
apps/
  web/         # Frontend Next.js (RSC, Shadcn UI, Zustand, nuqs)
  docs/        # Documentation produit
  api/         # Backend AdonisJS (Better-auth, DAL) – à venir
packages/
  ui/          # Bibliothèque de composants partagée
  eslint-config/
  typescript-config/
  shared/      # Modules métiers communs – à construire
```

Consultez `plan.md` pour suivre les phases de livraison et priorités courantes.

## Aide & Documentation

- Roadmap et tâches : [`plan.md`](plan.md)
- Conventions d'architecture et de code : `.github/instructions/copilot-instructions.md`
- Documentation produit : `apps/docs` (déploiement en cours)
- Support : ouvrez une issue GitHub ou discutez via l'onglet Discussions.

## Mainteneurs & Contributions

Le projet est maintenu par **Regi Gouale** et l'équipe Faktuur.io.

1. Créez une branche depuis `fundation`.
2. Implémentez votre fonctionnalité en respectant les conventions TypeScript et RSC.
3. Ajoutez des tests pour le DAL, les services ou composants critiques.
4. Ouvrez une Pull Request en référencent les tâches pertinentes de `plan.md`.

Pour toute contribution significative, démarrez une issue afin d'aligner la feuille de route.
