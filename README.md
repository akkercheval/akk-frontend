# AK's Friendly Forest of Chaos — Frontend

A React + TypeScript single-page application built with Vite. The frontend for a personal website featuring a cookie cutter collection, crochet projects, LotRO content, cat photos, and more.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node.js)

## Running Locally

```bash
cd akk-frontend/akk-app
npm install
npm run dev
```

The dev server starts on **http://localhost:5173** by default (with hot module replacement).

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `npm run dev` | Start Vite dev server with HMR |
| build | `npm run build` | Type-check and build for production |
| preview | `npm run preview` | Preview the production build locally |
| lint | `npm run lint` | Run ESLint |

## Pages / Routes

| Path | Page | Status |
|------|------|--------|
| `/` | Home | Landing page with welcome message |
| `/about` | About | Bio and interests |
| `/projects` | Web Projects | Links to external web projects |
| `/lotro` | LotRO | Lord of the Rings Online content (placeholder) |
| `/cookie-cutters` | Cookie Cutters | Collection browser (placeholder — will integrate with API) |
| `/crochet` | Crochet | Crochet projects blog (placeholder) |
| `/cats` | Cats & Critters | Cat/critter photo pages (placeholder) |
| `*` | 404 | Not Found page with generated squirrel SVG |

## Design / Visual Identity

- **Background:** Tree image on large screens (≥768px), sky-blue gradient on mobile
- **Favicon:** Acorn (`acorn.png`)
- **Navigation buttons:** Acorn-background pill buttons with bark brown gradient
- **Active nav state:** Green gradient indicates current page
- **Bullet points:** Acorn images via the `acorn-list` CSS class
- **Mascot:** Hand-drawn squirrel SVG in the header
- **404 page:** Uses a separate generated squirrel SVG (exclusively on this page)

## Project Structure

```
akk-app/
├── public/
│   ├── acorn.png              — Favicon and bullet/button graphic
│   ├── squirrel-mascot.svg    — Hand-drawn mascot for the header
│   └── tree-background.png    — Full-screen background (large screens)
├── src/
│   ├── components/
│   │   ├── Layout.tsx         — Shared header/nav/footer layout
│   │   ├── Layout.css
│   │   └── SquirrelMascot404.tsx — 404 squirrel (inline SVG)
│   ├── pages/
│   │   ├── Home.tsx / Home.css
│   │   ├── About.tsx
│   │   ├── WebProjects.tsx
│   │   ├── LotRO.tsx
│   │   ├── CookieCutters.tsx
│   │   ├── Crochet.tsx
│   │   ├── Cats.tsx
│   │   └── NotFound.tsx / NotFound.css
│   ├── App.tsx                — Router configuration
│   ├── index.css              — Global styles and CSS variables
│   └── main.tsx               — App entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technology Stack

- React 19
- TypeScript 6
- Vite 8
- React Router 7
- ESLint
