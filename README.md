# Lico Fiddelio — Photography Portfolio

A minimal, editorial photography portfolio built with **SvelteKit** and deployed
to **GitHub Pages** at [fiddelico.github.io](https://fiddelico.github.io).

## Stack

- [SvelteKit](https://kit.svelte.dev) (Svelte 5 runes)
- `@sveltejs/adapter-static` — fully prerendered static site
- GitHub Actions → GitHub Pages

## Develop

```bash
pnpm install
pnpm dev           # http://localhost:5173
```

## Build

```bash
pnpm build         # outputs to ./build
pnpm preview       # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `./build` to GitHub Pages.

**One-time setup on GitHub:**

1. Create a repo named **`fiddelico.github.io`** under the `fiddelico` account.
2. Push this project to its `main` branch.
3. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.

The site will be live at `https://fiddelico.github.io`.

> Because this is a user page served from the domain root, no `base` path is
> needed in `svelte.config.js`. If you instead deploy to a *project* repo
> (`github.io/<repo>`), set `kit.paths.base` to `/<repo>`.

## Customise

- **Content & photos:** [`src/lib/data/site.js`](src/lib/data/site.js) — name,
  bio, contact details, and the photo list. Placeholder images come from
  `picsum.photos`; replace the `src` URLs with your own files (drop them in
  `static/photos/` and reference as `/photos/name.jpg`).
- **Colours & type:** CSS variables at the top of [`src/app.css`](src/app.css).
- **Pages:** `src/routes/` — `/`, `/gallery`, `/about`, `/contact`.
