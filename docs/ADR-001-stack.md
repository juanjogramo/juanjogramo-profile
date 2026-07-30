# ADR-001: Technology stack for personal brand site

## Status

Accepted — 2026-07-29

## Context

Build a maintainable personal brand / portfolio site from a LaTeX CV source, with strong SEO, bilingual support (EN/ES), dark/light themes, and room to grow into case studies, projects, and writing.

## Options considered

| Option                   | Pros                                                                       | Cons                                                    |
| ------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------- |
| **Astro**                | Excellent static output, minimal JS, native i18n, MDX-ready, simple deploy | React ecosystem slightly less central                   |
| **Next.js (App Router)** | Rich ecosystem, great DX for React apps                                    | Heavier default client surface for a mostly static site |
| **Vite + React SPA**     | Simple tooling                                                             | Weak SEO unless adding a separate SSG layer             |

## Decision

Use **Astro 5+ with TypeScript**, content modules validated by **Zod**, optional React islands only if needed later, deploy as a static site to **Vercel or Cloudflare Pages**.

## Container decision

**Do not use Docker or Apple Containers** for local development or production of this static site.

Reasons:

- Reproducibility is achieved via Node version (`engines`) + lockfile.
- CI already runs on GitHub-hosted runners with Node setup.
- Containers add operational complexity without improving a zero-backend static build.

Local workflow: Node.js 22+ and npm.

## Consequences

- Fast pages by default; hydrate only interactive controls (theme, menu).
- Content updates happen in `src/content/*`, not in presentational components.
- Future blog/MDX can use Astro content collections without a stack rewrite.
- Deployment is a static `dist/` artifact.
