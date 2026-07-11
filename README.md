# VEXA DEVS — Mission Control Portfolio

The portfolio site for **VEXA DEVS** ("Design | Build | Deploy"), styled as a sci-fi command center rather than a typical portfolio layout — a sidebar-navigated single-page app with three sections:

- **Mission Control** (`CommandCenter`) — agency overview, strategic pillars, and execution policy
- **Asset Registry** (`IntelligenceRepository`) — project/case-study repository
- **Tech Stream** (`NeuralNetwork`) — an interactive node graph of the technical stack (Next.js, React, Tailwind, Node, Mongo, Express, etc.) with connections between technologies, rendered as a network diagram

All copy, theme tokens, and the tech-stack graph are data-driven from a single manifest object in [`constants.tsx`](./constants.tsx) (`VEXA_MANIFEST`) rather than hardcoded into components — editing the site's content/positioning is mostly a matter of editing that file.

Live site: https://vexa-devs.vercel.app/

## Stack

- **React 18** + **TypeScript**, bundled with **Vite**
- **Tailwind CSS** for the dark "carbon/neon-cobalt" cyber theme (scanline overlay, glow effects, custom color tokens)
- **Recharts** for data visualization, **lucide-react** for icons

## Structure

```
App.tsx                        # Shell: sidebar nav, mobile responsiveness, page switch
constants.tsx                  # VEXA_MANIFEST — all copy, theme config, tech graph data
types.ts                       # Shared TypeScript types (VexaManifest, etc.)
components/
├── layers/
│   ├── CommandCenter.tsx       # "Mission Control" section
│   ├── IntelligenceRepository.tsx  # "Asset Registry" section
│   ├── NeuralNetwork.tsx        # "Tech Stream" — interactive stack graph
│   ├── TerminalLogs.tsx         # Simulated terminal/log feed UI
│   └── TheForge.tsx
└── ui/
    └── WavyBackground.tsx      # Background effect
```

## Running locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev       # vite dev server
npm run build      # production build
npm run preview     # preview the production build
```
