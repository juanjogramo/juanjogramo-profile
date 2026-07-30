import type { Profile } from '@/content/schema';
import { siteConfig } from '@/content/site';

export function personJsonLd(profile: Profile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    jobTitle: profile.professionalTitle,
    url: siteConfig.url,
    email: profile.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
    },
    sameAs: [profile.contact.github, profile.contact.linkedin].filter(Boolean),
    image: profile.portrait ? new URL(profile.portrait.src, siteConfig.url).toString() : undefined,
    description: profile.summary,
  };
}

export function websiteJsonLd(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    inLanguage: ['en-US', 'es-PE'],
  };
}
