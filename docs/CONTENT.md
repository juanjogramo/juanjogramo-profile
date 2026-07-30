# Content update guide

## Source of truth

| Concern              | Source                                                     |
| -------------------- | ---------------------------------------------------------- |
| Web copy & structure | `src/content/profile.en.ts`, `profile.es.ts`, `i18n/ui.ts` |
| Site URL / SEO base  | `src/content/site.ts` + `PUBLIC_SITE_URL`                  |
| Career archive (PDF) | `../cv_juanjose_granados/main.tex`                         |

## Manual sync strategy

Automatic sync from LaTeX is **not** implemented: `main.tex` is unstructured prose inside macros and would produce fragile parsers.

Recommended process:

1. Update the LaTeX CV when career facts change.
2. Mirror factual changes into `profile.en.ts`.
3. Localize naturally into `profile.es.ts` (do not machine-translate blindly).
4. Run `npm run test` (schema + EN/ES id alignment) and `npm run build`.

## Feature flags

```ts
features: {
  projects: false,
  writing: false,
  caseStudies: true,
  portrait: true,
}
```

## Placeholders

Search the repo for `[PLACEHOLDER]` before publishing.
