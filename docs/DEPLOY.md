# Deploy to GitHub Pages (`juanjogramo.pe`)

## One-time setup

### 1. Repository settings

In GitHub → **Settings → Pages**:

1. **Source**: GitHub Actions
2. **Custom domain**: `juanjogramo.pe` (already verified)
3. Enable **Enforce HTTPS** once the certificate is ready (can take a few minutes after DNS works)

### 2. DNS records (at your DNS provider)

For an **apex** domain (`juanjogramo.pe`), create these **A** records:

| Type | Name/Host      | Value             |
| ---- | -------------- | ----------------- |
| A    | `@` (or blank) | `185.199.108.153` |
| A    | `@`            | `185.199.109.153` |
| A    | `@`            | `185.199.110.153` |
| A    | `@`            | `185.199.111.153` |

Optional IPv6 (**AAAA**):

| Type | Name/Host | Value                 |
| ---- | --------- | --------------------- |
| AAAA | `@`       | `2606:50c0:8000::111` |
| AAAA | `@`       | `2606:50c0:8001::111` |
| AAAA | `@`       | `2606:50c0:8002::111` |
| AAAA | `@`       | `2606:50c0:8003::111` |

Recommended **www** → Pages:

| Type  | Name/Host | Value                   |
| ----- | --------- | ----------------------- |
| CNAME | `www`     | `juanjogramo.github.io` |

Keep the verification TXT if GitHub still shows it; it does not hurt.

Propagation can take from minutes up to 24 hours.

### 3. Deploy

Every push to `main` runs `.github/workflows/deploy-pages.yml` and publishes `dist/`.

Manual run: **Actions → Deploy GitHub Pages → Run workflow**.

The repo includes `public/CNAME` → `juanjogramo.pe` so Pages keeps the custom domain on each deploy.

## Local build (same as CI)

```bash
PUBLIC_SITE_URL=https://juanjogramo.pe npm run build
```

Output: `dist/`
