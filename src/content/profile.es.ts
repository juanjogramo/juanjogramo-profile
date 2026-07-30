import { profileSchema, type Profile } from './schema';

/**
 * Spanish profile content — natural localization of CV-derived facts
 * plus role updates confirmed by the profile owner.
 */
const profileEsData = {
  fullName: 'Juan José Granados',
  shortName: 'Juan José',
  professionalTitle: 'Líder Técnico · Plataforma Super App @ BCP',
  location: 'Lima, Perú',
  summary:
    'Líder técnico con cerca de una década en software—base profunda en iOS/Swift, ahora liderando un equipo de Plataforma para una Super App que combina React Native con iOS y Android nativos.',
  valueProposition:
    'Lidero equipos de plataforma que hacen confiables las experiencias de Super App en stacks híbridos y nativos: arquitectura, prácticas de entrega y habilitación de ingeniería.',
  about: [
    'Empecé en web y sistemas universitarios, y luego me enfoqué por completo en iOS: apps de consumo y marketplaces antes de especializarme en productos financieros móviles.',
    'Con el tiempo pasé de implementar features a moldear arquitectura, mentorar equipos y mejorar cómo se diseñan, prueban y liberan los módulos.',
    'Hoy lidero un equipo de Plataforma para una Super App, trabajando con React Native, iOS y Android—las mismas preocupaciones que como SME iOS, ahora a escala de plataforma: arquitectura, cohesión y un camino de entrega confiable.',
  ],
  contact: {
    email: 'juanjogramo@gmail.com',
    linkedin: 'https://linkedin.com/in/juanjogramo',
    github: 'https://github.com/juanjogramo',
  },
  portrait: {
    src: '/images/portrait.jpg',
    alt: 'Retrato profesional de Juan José Granados',
  },
  experience: [
    {
      id: 'bcp-platform-lead',
      company: 'Banco de Crédito del Perú',
      role: 'Líder Técnico — Plataforma (Super App)',
      location: 'Lima, Perú',
      start: '2026',
      end: 'Actualidad',
      current: true,
      featured: true,
      summary:
        'Líder técnico de un equipo de Plataforma para una Super App, usando tecnologías híbridas entre React Native, iOS y Android.',
      highlights: [
        'Lidero el equipo de Plataforma que habilita capacidades de Super App sobre un stack mobile híbrido.',
        'Trabajo con React Native junto a iOS y Android nativos para mantener coherentes las bases de plataforma.',
      ],
      technologies: ['React Native', 'iOS', 'Android', 'Swift'],
    },
    {
      id: 'bcp-sme',
      company: 'Banco de Crédito del Perú',
      role: 'Subject Matter Expert iOS',
      location: 'Lima, Perú',
      start: '2023',
      end: '2026',
      current: false,
      featured: true,
      summary:
        'Ingeniero iOS experto que apoya a los equipos iOS con sesiones sobre unit testing, reducción de acoplamiento, aumento de cohesión y elección entre VIPER o MVVM según el negocio para nuevas librerías y módulos.',
      highlights: [
        'Habilito a los equipos a aplicar responsabilidades de capa más claras en VIPER y MVVM.',
        'Guío decisiones de arquitectura para nuevas librerías y módulos según requisitos de negocio.',
        'Contribuyo a una aplicación iOS financiera de gran escala para gestionar transacciones de clientes.',
      ],
      technologies: [
        'Swift',
        'CocoaPods',
        'Artifactory',
        'TestFlight',
        'App Center',
        'Jenkins',
        'Fastlane',
      ],
    },
    {
      id: 'scotia-staff',
      company: 'Scotiabank Perú',
      role: 'Staff Software Engineer iOS',
      location: 'Lima, Perú',
      start: '2021',
      end: '2023',
      current: false,
      featured: true,
      summary:
        'Ingeniero iOS lead impulsando iniciativas como Vision, Swift Package Manager y Combine, y mejorando la arquitectura para mantenibilidad y deployabilidad en un entorno financiero.',
      highlights: [
        'Migré dependencias de Carthage a Swift Package Manager.',
        'Apliqué publishers de Combine para sincronizar capas View y ViewModel.',
        'Apoyé a un equipo en el provisioning de tarjetas financieras con Apple Wallet.',
      ],
      technologies: [
        'Swift',
        'Swift Package Manager',
        'Combine',
        'Vision',
        'Apple Wallet',
        'TestFlight',
        'Jenkins',
        'Fastlane',
      ],
    },
    {
      id: 'everis-ios',
      company: 'Everis Perú SAC',
      role: 'iOS Developer',
      location: 'Lima, Perú',
      start: '2020',
      end: '2021',
      current: false,
      featured: true,
      summary:
        'Ingeniero lead supervisando features mobile (iOS y Android) para un equipo de alrededor de 20 personas—desarrollo, QA y diseño—en una iniciativa financiera de gran alcance.',
      highlights: [
        'Coordine la entrega en un equipo mobile multidisciplinario.',
        'Construí y mantuve features financieras iOS con flujos de Apple Pay y Apple Wallet.',
      ],
      technologies: ['Swift', 'CocoaPods', 'Apple Pay', 'Apple Wallet', 'App Center', 'Jenkins'],
    },
    {
      id: 'belatrix-loyalty',
      company: 'Belatrix SF',
      role: 'iOS Developer',
      location: 'Lima, Perú',
      start: '2019',
      end: '2020',
      current: false,
      featured: false,
      summary:
        'Construí y mantuve una app iOS de lealtad para una empresa estadounidense, ayudando a clientes a encontrar beneficios en retail, restaurantes y gimnasios.',
      highlights: [
        'Usé MapKit para mostrar promociones cercanas.',
        'Introduje nuevos módulos con SwiftUI.',
      ],
      technologies: ['Swift', 'SwiftUI', 'MapKit', 'CocoaPods'],
    },
    {
      id: 'belatrix-brand',
      company: 'Belatrix SF',
      role: 'iOS Developer',
      location: 'Lima, Perú',
      start: '2017',
      end: '2018',
      current: false,
      featured: false,
      summary:
        'Construí y mantuve una aplicación iOS orientada a entender el comportamiento del usuario respecto a una marca.',
      highlights: [
        'Implementé notificaciones push con Firebase y APNs.',
        'Agregué universal links y deep links, incluyendo login sin contraseña.',
        'Localicé la experiencia según idioma y región del dispositivo.',
      ],
      technologies: ['Swift', 'Firebase', 'APNs', 'Universal Links', 'Deep Links'],
    },
    {
      id: 'iberico',
      company: 'Ibérico',
      role: 'Freelance iOS Developer',
      location: 'Lima, Perú',
      start: '2017',
      end: '2017',
      current: false,
      featured: false,
      summary: 'Construí una aplicación iOS para comprar comida y abarrotes.',
      highlights: [],
      technologies: ['Swift', 'iOS'],
    },
    {
      id: 'megatur',
      company: 'Megatur',
      role: 'Freelance iOS Developer',
      location: 'Arequipa, Perú',
      start: '2016',
      end: '2016',
      current: false,
      featured: false,
      summary: 'Construí una aplicación iOS para solicitar un taxi.',
      highlights: [],
      technologies: ['Swift', 'iOS'],
    },
    {
      id: 'el-comercio',
      company: 'El Comercio',
      role: 'iOS Developer',
      location: 'Lima, Perú',
      start: '2015',
      end: '2017',
      current: false,
      featured: true,
      summary:
        'Construí aplicaciones iOS del portafolio de la compañía, incluyendo inmobiliaria, empleo, automotriz y pagos prepago.',
      highlights: [
        'Urbania: búsqueda y listados de propiedades con Google Maps.',
        'Aptitus: marketplace de empleo con push via AWS y APNs.',
        'NeoAuto: compra y venta de autos nuevos o usados.',
        'PagoEfectivo: gestión de tarjeta de crédito prepago.',
      ],
      technologies: ['Swift', 'Objective-C', 'Google Maps', 'AWS', 'APNs'],
    },
    {
      id: 'esan-web',
      company: 'Universidad ESAN',
      role: 'Asistente de desarrollo web',
      location: 'Lima, Perú',
      start: '2014',
      end: '2015',
      current: false,
      featured: false,
      summary:
        'Construí y mantuve páginas web de la universidad y contribuí a una app iOS estudiantil de horarios, cursos, ubicaciones y menú semanal.',
      highlights: [],
      technologies: ['Web', 'iOS'],
    },
    {
      id: 'esan-intern',
      company: 'Universidad ESAN',
      role: 'Practicante',
      location: 'Lima, Perú',
      start: '2013',
      end: '2014',
      current: false,
      featured: false,
      summary:
        'Mantuve laboratorios de cómputo y resolví incidencias en estaciones de trabajo del personal.',
      highlights: [],
      technologies: [],
    },
  ],
  education: [
    {
      id: 'upc',
      institution: 'Universidad Peruana de Ciencias Aplicadas',
      degree: 'Bachiller',
      field: 'Ingeniería de Sistemas',
      location: 'Lima, Perú',
      start: '2015',
      end: '2021',
    },
    {
      id: 'area51',
      institution: 'Area 51 and Training Center',
      degree: 'Formación iOS Developer',
      field: 'iOS con Objective-C',
      location: 'Lima, Perú',
      start: '2014',
      end: '2014',
    },
    {
      id: 'tecsup',
      institution: 'TECSUP',
      degree: 'Título técnico',
      field: 'Redes y comunicación de datos',
      location: 'Lima, Perú',
      start: '2009',
      end: '2012',
    },
  ],
  certifications: [
    {
      id: 'bachiller-upc',
      name: 'Bachiller en Ingeniería de Sistemas',
      issuer: 'UPC',
      year: '2021',
    },
    {
      id: 'scrum',
      name: 'Certified in Scrum Fundamentals',
      year: '2018',
    },
    {
      id: 'ios-area51',
      name: 'Certificación iOS',
      issuer: 'Area 51 and Training Center',
      year: '2014',
    },
  ],
  skills: [
    {
      id: 'mobile',
      title: 'Ingeniería mobile',
      items: [
        'React Native',
        'Desarrollo de aplicaciones iOS',
        'Android (colaboración de plataforma)',
        'Swift',
        'SwiftUI',
        'Objective-C (formación e inicio de carrera)',
        'Apple Pay y Apple Wallet',
        'MapKit y funcionalidades de ubicación',
        'Notificaciones push (APNs, Firebase)',
      ],
    },
    {
      id: 'architecture',
      title: 'Arquitectura de software',
      items: [
        'Fundamentos de plataforma Super App',
        'Arquitectura mobile híbrida + nativa',
        'VIPER',
        'MVVM',
        'Diseño modular y cohesión',
        'Límites de dependencia / reducción de acoplamiento',
        'Flujos reactivos con Combine',
      ],
    },
    {
      id: 'platform',
      title: 'Entrega y prácticas de plataforma',
      items: [
        'CI/CD con Jenkins',
        'Automatización con Fastlane',
        'TestFlight y App Store Connect',
        'CocoaPods y Swift Package Manager',
        'Distribución de dependencias con Artifactory',
      ],
    },
    {
      id: 'leadership',
      title: 'Liderazgo técnico',
      items: [
        'Liderazgo de equipo de Plataforma para Super App',
        'Habilitación SME para equipos iOS',
        'Guía de arquitectura para nuevos módulos',
        'Entrega mobile multidisciplinaria (devs, QA, diseño)',
        'Mentoría en testing y calidad de código',
      ],
    },
  ],
  caseStudies: [
    {
      id: 'super-app-platform',
      title: 'Liderar el equipo de Plataforma de una Super App',
      context:
        'Una iniciativa de Super App financiera que necesita capacidades de plataforma compartidas entre clientes mobile híbridos y nativos.',
      problem:
        'El trabajo de plataforma debe mantenerse coherente entre React Native, iOS y Android sin fragmentar arquitectura ni prácticas de entrega.',
      role: 'Líder Técnico del equipo de Plataforma.',
      approach:
        'Lidero el equipo de Plataforma con un stack híbrido—React Native más iOS y Android nativos—enfocado en bases sobre las que los equipos de producto puedan construir.',
      outcome:
        'Trabajo en curso. Las métricas internas, nombres de producto y detalles propietarios se omiten a propósito.',
      technologies: ['React Native', 'iOS', 'Android'],
      confidential: true,
    },
    {
      id: 'team-enablement',
      title: 'Elevar el estándar de ingeniería iOS entre equipos',
      context:
        'Una institución financiera grande con múltiples squads iOS sobre una app bancaria compartida.',
      problem:
        'Los equipos necesitaban guía más clara sobre testing, límites de módulos y cuándo usar VIPER frente a MVVM.',
      role: 'Subject Matter Expert iOS — facilitador y coach técnico.',
      approach:
        'Facilité sesiones de enablement sobre unit testing, acoplamiento/cohesión y responsabilidades de capa para alinear arquitectura con el negocio.',
      outcome:
        'Los equipos compartieron un vocabulario común para decisiones de arquitectura y mejores prácticas de diseño modular. Las métricas internas se omiten a propósito.',
      technologies: ['Swift', 'VIPER', 'MVVM', 'XCTest'],
      confidential: true,
    },
    {
      id: 'spm-combine',
      title: 'Modernizar dependencias y arquitectura reactiva',
      context:
        'Una aplicación iOS financiera que necesitaba mejor mantenibilidad y deployabilidad.',
      problem:
        'La gestión legacy de dependencias y los patrones de actualización de la capa de vista limitaban la evolución segura.',
      role: 'Staff Software Engineer iOS — lead técnico de modernización.',
      approach:
        'Migré dependencias de Carthage a SPM e introduje publishers de Combine entre ViewModel y View; apoyé trabajo de provisioning con Wallet junto a otros equipos.',
      outcome:
        'La gestión de dependencias y los flujos reactivos quedaron más alineados con el tooling actual de Apple.',
      technologies: ['Swift', 'SPM', 'Combine', 'Apple Wallet'],
      confidential: true,
    },
    {
      id: 'multidisciplinary-delivery',
      title: 'Liderar la entrega mobile multidisciplinaria',
      context:
        'Una iniciativa financiera grande entregada por un equipo mixto de alrededor de veinte personas.',
      problem:
        'Las features mobile requerían coordinación entre iOS, Android, QA y diseño sin perder calidad técnica.',
      role: 'Ingeniero lead de las features mobile asignadas.',
      approach:
        'Supervisé la entrega del track mobile, incluyendo experiencias de Apple Pay y Apple Wallet en iOS.',
      outcome:
        'Las features avanzaron con un modelo de entrega estructurado entre ingeniería, QA y diseño. Los detalles confidenciales del cliente no se publican.',
      technologies: ['Swift', 'Apple Pay', 'Apple Wallet', 'Jenkins'],
      confidential: true,
    },
  ],
  projects: [],
  writing: [],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Avanzado' },
  ],
  features: {
    projects: false,
    writing: false,
    caseStudies: true,
    portrait: true,
  },
} satisfies Profile;

export const profileEs: Profile = profileSchema.parse(profileEsData);
