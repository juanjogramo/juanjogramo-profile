import { describe, expect, it } from 'vitest';
import { profileEn } from '@/content/profile.en';
import { profileEs } from '@/content/profile.es';
import { profileSchema } from '@/content/schema';
import { formatPeriod, localePath } from '@/lib/i18n';

describe('profile content', () => {
  it('validates English profile against schema', () => {
    expect(() => profileSchema.parse(profileEn)).not.toThrow();
  });

  it('validates Spanish profile against schema', () => {
    expect(() => profileSchema.parse(profileEs)).not.toThrow();
  });

  it('keeps EN/ES experience ids aligned', () => {
    const enIds = profileEn.experience.map((item) => item.id);
    const esIds = profileEs.experience.map((item) => item.id);
    expect(esIds).toEqual(enIds);
  });

  it('includes LinkedIn contact when configured', () => {
    expect(profileEn.contact.linkedin).toBe('https://linkedin.com/in/juanjogramo');
    expect(profileEs.contact.linkedin).toBe('https://linkedin.com/in/juanjogramo');
  });

  it('lists the current Super App platform lead role first', () => {
    expect(profileEn.experience[0]?.id).toBe('bcp-platform-lead');
    expect(profileEn.experience[0]?.current).toBe(true);
  });
});

describe('i18n helpers', () => {
  it('builds locale paths', () => {
    expect(localePath('en')).toBe('/');
    expect(localePath('es')).toBe('/es');
    expect(localePath('en', 'about')).toBe('/about');
    expect(localePath('es', '/about')).toBe('/es/about');
  });

  it('formats periods with present label', () => {
    expect(formatPeriod('2023', 'Present', true, 'Present')).toBe('2023 – Present');
    expect(formatPeriod('2021', '2023', false, 'Present')).toBe('2021 – 2023');
  });
});
