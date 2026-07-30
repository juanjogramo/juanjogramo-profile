import type { Locale } from '@/content/schema';

export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\//, '');
  if (locale === 'en') {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/es/${clean}` : '/es';
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}

export function htmlLang(locale: Locale): string {
  return locale === 'es' ? 'es-PE' : 'en-US';
}

export function formatPeriod(
  start: string,
  end: string,
  current: boolean,
  presentLabel: string,
): string {
  const endLabel = current ? presentLabel : end;
  return `${start} – ${endLabel}`;
}
