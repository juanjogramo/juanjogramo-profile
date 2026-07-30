# Information architecture

## Sitemap

```
/                 English landing (default)
/es               Spanish landing
/sitemap-index.xml
/robots.txt
```

Future (not in v1 routes): `/projects/[slug]`, `/work/[slug]`, `/writing/[slug]`

## Section hierarchy (landing)

1. Hero — name, title, value prop, CTAs, social
2. About — narrative career arc
3. Experience — full timeline
4. Expertise — grouped capabilities
5. Featured work — anonymized initiatives (`features.caseStudies`)
6. Projects — hidden until `features.projects = true`
7. Writing — hidden until `features.writing = true`
8. Education & certifications
9. Contact — mailto + GitHub (+ LinkedIn when set)

## Visibility flags

Configured in profile content (`features` object). Components no-op when disabled.
