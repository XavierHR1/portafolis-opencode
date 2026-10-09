# Portafolis interactiu

Portafolis personal fet amb **Next.js 16** (App Router), **TypeScript** i **Tailwind CSS v4**. Inclou un explorador de projectes amb **filtre per tipus** (frontend, backend, full stack, mobile, devops, disseny i altres) i cerca per text.

## Requisits

- Node.js 20 o superior
- npm

## Desenvolupament local

```bash
npm install
npm run dev
```

Obre [http://localhost:3000](http://localhost:3000).

## Scripts

| Script           | Descripció                          |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Servidor de desenvolupament         |
| `npm run build`  | Build de producció                  |
| `npm run start`  | Servidor de producció (post-build)  |
| `npm run lint`   | Comprovació d'ESLint                |

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx              Layout global (header/footer, metadata)
│  ├─ page.tsx                Home (hero, projectes, sobre mi)
│  ├─ not-found.tsx           Pàgina 404
│  ├─ globals.css             Tailwind + estils base
│  └─ projectes/[slug]/page.tsx   Detall de cada projecte
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ ProjectCard.tsx
│  ├─ ProjectExplorer.tsx     Filtres interactius (client)
│  └─ CategoryBadge.tsx
└─ data/
   ├─ types.ts                Tipus i categories
   └─ projects.ts             Dades dels projectes
```

Per afegir o modificar projectes, edita `src/data/projects.ts`. Les categories disponibles es defineixen a `src/data/types.ts`.

## Desplegament a Netlify

El projecte ja inclou `netlify.toml` amb el plugin oficial `@netlify/plugin-nextjs`, la comanda de build i la versió de Node.

### Opció A — Git (recomanat)

1. Puja el repositori a GitHub/GitLab.
2. A Netlify, tria **Add new site → Import an existing project**.
3. Netlify detecta la configuració de `netlify.toml` automàticament. No cal canviar res.
4. Fes **Deploy**.

### Opció B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init      # o: netlify link
netlify deploy --build --prod
```

### Variables d'entorn

No cal cap variable per al funcionament bàsic. Si afegeixes integracions (formularis, APIs), defineix-les a **Site configuration → Environment variables**.
