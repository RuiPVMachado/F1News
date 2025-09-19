# F1 Monorepo

Polyglot monorepo hosting Next.js and Nuxt dashboards, shared TypeScript libraries, and backend services. The original static site is preserved under `legacy/`.

## Structure

- apps/
  - next-dashboard/ — React + Next.js app
  - nuxt-dashboard/ — Vue 3 + Nuxt app
- packages/
  - shared/ — shared utilities and types
  - api-clients/ — API client libraries (Ergast F1, etc.)
- services/
  - realtime-server/ — Node WebSocket server for realtime events
  - fastf1-proxy/ — Python FastAPI proxy around the FastF1 library
- legacy/ — original static site and assets (HTML/CSS/JS/images)

## Getting started

Requirements:
- Node 20+
- pnpm 9+
- (optional) Python 3.10+ for `services/fastf1-proxy`

Install dependencies:

```sh
pnpm install
```

Run apps and services:

```sh
# Run Next, Nuxt, and the realtime server in parallel
pnpm dev

# Or individually
pnpm dev:next
pnpm dev:nuxt
pnpm dev:realtime
```

Build:

```sh
pnpm build
```

## Workspaces

This repository uses pnpm workspaces. Packages are defined in `pnpm-workspace.yaml`. You can target a specific workspace with filters, for example:

```sh
pnpm --filter @packages/shared build
pnpm --filter @apps/next-dashboard dev
```

## TypeScript project references

`tsconfig.json` at the root defines project references so IDEs can understand cross-package types. Individual packages have their own `tsconfig.json` files and build configs.

## Legacy static site

The original static multi-page site is available under `legacy/`. It contains the HTML, CSS, JS, and assets used previously and can serve as a reference for content and designs.
