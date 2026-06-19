# DaciteDevHome

The home page for **[dacite.dev](https://dacite.dev)** — a personal portfolio and deployment hub
for the projects I build. Hosted on **GitHub Pages** (classic branch deploy from `main`, custom
domain via `CNAME`, Jekyll disabled via `.nojekyll`).

The homepage (`index.html` + `styles.css`) is a hand-written static site — no build step. Each
project lives in its own subfolder and is built/deployed into this repo by its source project's
own deploy script.

## Layout

| Path | Project | Source repo | Fed by |
|------|---------|-------------|--------|
| `/parametriccastworks/` | Parametric Castworks (3D jewelry generator) | `DaciteRocks/ParametricRingGenerator` | vite `copy-to-deploy` plugin |
| `/spireplus1/` | Spire Plus 1 (incremental deckbuilder) | `DaciteRocks/SpirePlus1` | vite `outDir` |
| `/sharp21/` | Blackjack Sharp Trainer | `DaciteRocks/BlackJackGame` | `npm run build:web` |
| `/refrigerasat/` | RefrigeraSat (HVAC tool) | `DaciteRocks/ConnerRefrigerantSaturationTempTool` | `npm run build:web` |
| `/blackjackgame/` | Blackjack Simulator | `DaciteRocks/BlackJackSim` (Godot) | Godot Web export preset |
| `/rapidrecall/` | Rapid Recall (party game) | `DaciteRocks/RapidRecall` (Godot) | Godot Web export preset |
| `/cairntodo/`, `/strata/` | App store support/privacy pages only (no web build) | `DaciteRocks/ToDoApp` | `npm run deploy-web` |

[Pisscord](https://pisscord.dacite.dev) (a Discord clone) is deployed separately on Vercel.

## Deployment

GitHub Pages serves this repo's `main` branch root directly. There is no CI build — committing and
pushing the working tree is the deploy. The custom domain `dacite.dev` is set by `CNAME`, so the
GitHub repo can be renamed without changing the live URL.

Each source project's deploy script writes its built output into the matching subfolder here; the
build then commits and pushes from this repo.
