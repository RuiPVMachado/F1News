# F1 Monorepo (polyglot)

This repository is organized as a polyglot monorepo using pnpm workspaces. It hosts:

- Next.js app (apps/next-dashboard)
- Nuxt app (apps/nuxt-dashboard)
- Shared libraries (packages/shared, packages/api-clients)
- Services (services/realtime-server, services/fastf1-proxy)
- A preserved legacy static site for reference (legacy/)

The legacy directory contains the original multi-page static website (HTML, CSS, JS, images, and audio). Nothing has been deleted; it has simply been moved into `legacy/`.

## Repository layout

```
.
├── apps/
│   ├── next-dashboard/         # Next.js app (skeleton)
│   └── nuxt-dashboard/         # Nuxt app (skeleton)
├── packages/
│   ├── shared/                 # Reusable utils, types, UI (skeleton)
│   └── api-clients/            # Clients for external APIs (skeleton)
├── services/
│   ├── realtime-server/        # WebSocket / SSE server (skeleton)
│   └── fastf1-proxy/           # Proxy service for FastF1/Ergast/etc (skeleton)
├── legacy/                     # Original static site preserved as-is
├── package.json                # pnpm workspace root
├── pnpm-workspace.yaml         # workspace configuration
├── tsconfig.json               # solution-style TypeScript project references
├── .editorconfig               # codestyle for editors
├── .nvmrc                      # Node version hint (use nvm)
├── .gitignore
├── LICENSE (MIT)
└── README.md
```

Notes:
- The app and service folders are currently skeletons with placeholder scripts so the workspace is navigable. Implementations can be added incrementally.
- The legacy site can continue to be hosted as-is from the `legacy/` directory if desired.

## Getting started

Requirements:
- Node.js 20+ (see `.nvmrc`)
- pnpm 9+

Setup:

```bash
# Use the correct Node version
nvm use

# Install workspace dependencies (none yet, but sets up the lockfile)
pnpm install
```

Common scripts (workspace):

```bash
# Run dev scripts in parallel where they exist
pnpm dev

# Type-check all packages that have a tsconfig
pnpm typecheck

# Build all packages that implement a build script
pnpm build
```

Per-package commands:
- apps/next-dashboard: placeholder only. Replace with a Next.js app (e.g. `create-next-app`), then run `pnpm --filter @apps/next-dashboard dev`.
- apps/nuxt-dashboard: placeholder only. Replace with a Nuxt app (e.g. `npx nuxi init`), then run `pnpm --filter @apps/nuxt-dashboard dev`.
- services/*: add server implementations (Node/Express/Fastify/Nitro) and update scripts.
- packages/*: add shared code and configure build/typecheck scripts as needed.

## TypeScript project references

This repo uses a solution-style `tsconfig.json` at the root with project references to the apps, packages, and services. Each referenced project currently contains a minimal `tsconfig.json` to keep type-checkers happy until real code is added.

## Legacy static site

The original static site has been moved to `legacy/` and remains unchanged. You can open `legacy/index.html` directly in a browser or serve the folder with any static server:

```bash
npx serve legacy
```

## License

MIT © The F1 Monorepo Contributors
