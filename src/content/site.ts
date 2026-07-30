export const siteConfig = {
  /**
   * Canonical site URL. Override with PUBLIC_SITE_URL at build time.
   */
  url: process.env.PUBLIC_SITE_URL || 'https://juanjogramo.pe',
  name: 'Juan José Granados',
  defaultLocale: 'en' as const,
  locales: ['en', 'es'] as const,
  socialImage: '/og-default.png',
  twitterHandle: undefined as string | undefined,
  author: {
    name: 'Juan José Granados',
    github: 'juanjogramo',
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
