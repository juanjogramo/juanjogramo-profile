# Analysis report — CV → personal site

## LaTeX repository summary

Source: `../cv_juanjose_granados`

- Single-document moderncv project.
- Primary file: `main.tex`.
- Compiled via latexmk/pdflatex to `main.pdf`.
- Vendored moderncv assets; photo `Granados.jpg`.
- No README/CI in the CV repo.

## Extracted information

See `src/content/profile.en.ts` and `src/content/profile.es.ts`.

Covered: identity, experience (2013–present), education, certifications, languages, skills derived from roles, anonymized featured initiatives.

## Ambiguous / missing

- LinkedIn URL ([PLACEHOLDER])
- Confirmed production domain (`PUBLIC_SITE_URL` placeholder: `https://juanjogramo.dev`)
- Possible gap between Belatrix periods (2018–2019)
- Whether “Currently” at BCP remains accurate after CV last update
- Experience areas from the product brief not present in the CV (React Native, Super Apps, observability platforms, AI-assisted development) — **not invented**

## Privacy risks handled

- Phone number excluded
- Google Drive certificate links excluded
- Portrait EXIF stripped via sharp re-encode
- Case studies anonymized; no internal metrics

## Editorial recommendations

1. Tighten CV quote language before reuse (avoid “passionate”).
2. Add LinkedIn when ready.
3. Expand case studies with public, non-confidential outcomes when available.
4. Keep LaTeX CV as career archive; treat `src/content` as the web source of truth.
