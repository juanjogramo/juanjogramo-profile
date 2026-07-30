import type { Locale } from '../schema';

export type UiCopy = {
  skipToContent: string;
  nav: {
    about: string;
    experience: string;
    expertise: string;
    work: string;
    projects: string;
    writing: string;
    education: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
  };
  hero: {
    ctaPrimary: string;
    ctaSecondary: string;
    availableIn: string;
  };
  about: {
    title: string;
    eyebrow: string;
  };
  experience: {
    title: string;
    eyebrow: string;
    present: string;
    technologies: string;
    highlights: string;
  };
  expertise: {
    title: string;
    eyebrow: string;
  };
  work: {
    title: string;
    eyebrow: string;
    context: string;
    problem: string;
    role: string;
    approach: string;
    outcome: string;
    technologies: string;
    confidentialNote: string;
  };
  projects: {
    title: string;
    eyebrow: string;
    empty: string;
    status: Record<'planned' | 'active' | 'archived', string>;
  };
  writing: {
    title: string;
    eyebrow: string;
    empty: string;
  };
  education: {
    title: string;
    eyebrow: string;
    certifications: string;
    languages: string;
  };
  contact: {
    title: string;
    eyebrow: string;
    body: string;
    email: string;
    github: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    theme: string;
    language: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
    label: string;
  };
  meta: {
    titleTemplate: string;
    description: string;
    ogDescription: string;
  };
};

const en: UiCopy = {
  skipToContent: 'Skip to content',
  nav: {
    about: 'About',
    experience: 'Experience',
    expertise: 'Expertise',
    work: 'Featured work',
    projects: 'Projects',
    writing: 'Writing',
    education: 'Education',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary',
  },
  hero: {
    ctaPrimary: 'View experience',
    ctaSecondary: 'Get in touch',
    availableIn: 'Based in',
  },
  about: {
    title: 'A path from shipping apps to enabling teams',
    eyebrow: 'About',
  },
  experience: {
    title: 'Professional experience',
    eyebrow: 'Experience',
    present: 'Present',
    technologies: 'Technologies',
    highlights: 'Highlights',
  },
  expertise: {
    title: 'Where I contribute most',
    eyebrow: 'Expertise',
  },
  work: {
    title: 'Selected initiatives',
    eyebrow: 'Featured work',
    context: 'Context',
    problem: 'Problem',
    role: 'Role',
    approach: 'Approach',
    outcome: 'Outcome',
    technologies: 'Technologies',
    confidentialNote:
      'Details are anonymized. Internal metrics and proprietary systems are not disclosed.',
  },
  projects: {
    title: 'Projects',
    eyebrow: 'Projects',
    empty: 'Personal and open-source projects will appear here.',
    status: {
      planned: 'Planned',
      active: 'Active',
      archived: 'Archived',
    },
  },
  writing: {
    title: 'Writing & speaking',
    eyebrow: 'Writing',
    empty: 'Articles and talks will be published here.',
  },
  education: {
    title: 'Education & credentials',
    eyebrow: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
  },
  contact: {
    title: 'Let’s talk',
    eyebrow: 'Contact',
    body: 'Open to conversations about mobile platform work, technical leadership, and engineering enablement.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Astro.',
    theme: 'Theme',
    language: 'Language',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    label: 'Color theme',
  },
  meta: {
    titleTemplate: '%s · Juan José Granados',
    description:
      'Juan José Granados — Technical Leader for Super App Platform work across React Native, iOS, and Android, with deep experience in mobile architecture and engineering enablement.',
    ogDescription:
      'Technical Leader · Super App Platform. React Native, iOS, Android, architecture, and engineering enablement.',
  },
};

const es: UiCopy = {
  skipToContent: 'Saltar al contenido',
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    expertise: 'Expertise',
    work: 'Trabajo destacado',
    projects: 'Proyectos',
    writing: 'Escritura',
    education: 'Educación',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    primaryNav: 'Principal',
  },
  hero: {
    ctaPrimary: 'Ver experiencia',
    ctaSecondary: 'Contactar',
    availableIn: 'Basado en',
  },
  about: {
    title: 'De entregar apps a habilitar equipos',
    eyebrow: 'Sobre mí',
  },
  experience: {
    title: 'Experiencia profesional',
    eyebrow: 'Experiencia',
    present: 'Actualidad',
    technologies: 'Tecnologías',
    highlights: 'Logros',
  },
  expertise: {
    title: 'Dónde aporto más',
    eyebrow: 'Expertise',
  },
  work: {
    title: 'Iniciativas seleccionadas',
    eyebrow: 'Trabajo destacado',
    context: 'Contexto',
    problem: 'Problema',
    role: 'Rol',
    approach: 'Enfoque',
    outcome: 'Resultado',
    technologies: 'Tecnologías',
    confidentialNote:
      'Los detalles están anonimizados. No se publican métricas internas ni sistemas propietarios.',
  },
  projects: {
    title: 'Proyectos',
    eyebrow: 'Proyectos',
    empty: 'Aquí aparecerán proyectos personales y de código abierto.',
    status: {
      planned: 'Planificado',
      active: 'Activo',
      archived: 'Archivado',
    },
  },
  writing: {
    title: 'Escritura y charlas',
    eyebrow: 'Escritura',
    empty: 'Aquí se publicarán artículos y presentaciones.',
  },
  education: {
    title: 'Educación y credenciales',
    eyebrow: 'Educación',
    certifications: 'Certificaciones',
    languages: 'Idiomas',
  },
  contact: {
    title: 'Hablemos',
    eyebrow: 'Contacto',
    body: 'Abierto a conversaciones sobre plataformas mobile, liderazgo técnico y habilitación de ingeniería.',
    email: 'Correo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Construido con Astro.',
    theme: 'Tema',
    language: 'Idioma',
  },
  theme: {
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
    label: 'Tema de color',
  },
  meta: {
    titleTemplate: '%s · Juan José Granados',
    description:
      'Juan José Granados — Líder Técnico de Plataforma Super App con React Native, iOS y Android, con experiencia profunda en arquitectura mobile y habilitación de ingeniería.',
    ogDescription:
      'Líder Técnico · Plataforma Super App. React Native, iOS, Android, arquitectura y habilitación de equipos.',
  },
};

const catalog: Record<Locale, UiCopy> = { en, es };

export function getUi(locale: Locale): UiCopy {
  return catalog[locale] ?? catalog.en;
}
