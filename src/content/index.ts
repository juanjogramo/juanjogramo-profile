import type { Locale, Profile } from './schema';
import { profileEn } from './profile.en';
import { profileEs } from './profile.es';

const profiles: Record<Locale, Profile> = {
  en: profileEn,
  es: profileEs,
};

export function getProfile(locale: Locale): Profile {
  return profiles[locale] ?? profiles.en;
}

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'es';
}
