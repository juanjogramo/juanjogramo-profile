# Visual direction

## Intent

Confident, calm, technical maturity. Avoid generic “AI portfolio” tropes (purple gradients, cream+terracotta, dense broadsheet).

## Tokens

Defined in `src/styles/global.css`:

- **Light:** cool stone background `#F3F5F7`, ink `#121820`, teal accent `#0F6B63`
- **Dark:** near-black `#0A0E14`, soft ink, brighter teal `#3DB8AC`
- **Type:** Latin Modern Mono (terminal UI) + Latin Modern Sans accents; dark-only phosphor green palette
- **Layout:** Centered terminal shell, max-width ~52rem; no light mode
- **Motion:** short fade/rise; disabled under `prefers-reduced-motion`
- **Layout:** single-column narrative, timeline on desktop with meta rail

## Theme

- Dark-only (no light mode, no theme switcher)
- Phosphor green accent on near-black terminal chrome

## Components

Header, Hero, About, Experience, Expertise, FeaturedWork, Projects, Writing, Education, Contact, Footer, Button — content-driven, no per-page one-off styling beyond section CSS.
