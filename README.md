# Juan José Granados — Personal site

Personal brand and professional portfolio for **Juan José Granados**, built from the career facts in the LaTeX CV repository `cv_juanjose_granados`.

## Goal

Communicate who you are, the problems you solve, relevant experience, capabilities, impact (without confidential metrics), technical authority, and how to contact you — as a durable platform, not a literal CV-to-HTML dump.

## Architecture

- **Astro** static site (EN default, ES at `/es`)
- **Zod-validated** content modules in `src/content/`
- Design tokens + light/dark theme in `src/styles/global.css`
- SEO: metadata, Open Graph, Twitter cards, sitemap, robots.txt, JSON-LD
- CI: format, lint, typecheck, unit tests, build, Playwright e2e/a11y

See also:

- [docs/ANALYSIS.md](docs/ANALYSIS.md)
- [docs/BRAND.md](docs/BRAND.md)
- [docs/IA.md](docs/IA.md)
- [docs/VISUAL.md](docs/VISUAL.md)
- [docs/ADR-001-stack.md](docs/ADR-001-stack.md)
- [docs/CONTENT.md](docs/CONTENT.md)
- [docs/BACKLOG.md](docs/BACKLOG.md)

## Requirements

- Node.js **22.12+**
- npm 10+

No Docker / Apple Containers — see ADR-001.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

Open the URL printed by Astro (typically `http://localhost:4321`).

## Scripts

| Script                            | Purpose                              |
| --------------------------------- | ------------------------------------ |
| `npm run dev`                     | Local development                    |
| `npm run build`                   | Production build → `dist/`           |
| `npm run preview`                 | Preview production build             |
| `npm run lint`                    | ESLint                               |
| `npm run format` / `format:check` | Prettier                             |
| `npm run typecheck`               | `astro check`                        |
| `npm run test`                    | Vitest unit tests                    |
| `npm run test:e2e`                | Playwright smoke + a11y              |
| `npm run check`                   | format + lint + types + unit + build |
| `npm run audit:deps`              | npm audit (high+)                    |

## Updating content

Edit `src/content/profile.en.ts` and `src/content/profile.es.ts`. UI chrome strings live in `src/content/i18n/ui.ts`. Details in [docs/CONTENT.md](docs/CONTENT.md).

## Internationalization

- Default locale: English (`/`)
- Spanish: `/es`
- Language toggle in the header
- `lang`, `hreflang`, and Open Graph locales set per page

## Theme

System preference by default; user choice persisted in `localStorage`.

## Deployment

Recommended: **GitHub Pages** with custom domain `juanjogramo.pe`.

See [docs/DEPLOY.md](docs/DEPLOY.md) for DNS records and the Actions workflow.

Alternatives: **Vercel** or **Cloudflare Pages** (static `dist/`) if you switch later.

1. Connect the GitHub repo (already: `juanjogramo/juanjogramo-profile`).
2. Build command: `npm run build`
3. Output directory: `dist`
4. Env: `PUBLIC_SITE_URL=https://juanjogramo.pe`
5. Point DNS as documented in `docs/DEPLOY.md`; SSL via GitHub Pages (**Enforce HTTPS**).
6. Preview: use branch workflows or another host for PR previews if needed.
7. Rollback: redeploy a previous Actions run / commit.

## Testing

```bash
npm run build
npm run test
npm run test:e2e
```

E2e starts `astro preview` automatically.

## Privacy notes

- Phone number from the CV is **not** published.
- Certificate Google Drive links are **not** published.
- Portrait is re-encoded without EXIF GPS.

## Troubleshooting

| Issue                       | Fix                                                                   |
| --------------------------- | --------------------------------------------------------------------- |
| Wrong canonical/OG URLs     | Set `PUBLIC_SITE_URL` before build                                    |
| Theme flash                 | Ensure the inline theme boot script in `BaseLayout` is present        |
| Playwright fails locally    | Run `npx playwright install chromium` then `npm run build` before e2e |
| Path alias errors in Vitest | Confirm `vitest.config.ts` `@` alias                                  |

## Technical decisions (summary)

- Stack: Astro + TypeScript + Zod content
- Contact v1: direct links only (no form/backend)
- Containers: not used
- CV sync: manual (see CONTENT.md)
