import { profileSchema, type Profile } from './schema';

/**
 * English profile content derived from ../cv_juanjose_granados/main.tex,
 * plus role updates confirmed by the profile owner.
 */
const profileEnData = {
  fullName: 'Juan José Granados',
  shortName: 'Juan José',
  professionalTitle: 'Technical Leader · Super App Platform @ BCP',
  location: 'Lima, Peru',
  summary:
    'Technical leader with about a decade in software—deep iOS/Swift background, now leading a platform team for a Super App that combines React Native with native iOS and Android.',
  valueProposition:
    'I lead platform teams that make Super App experiences reliable across hybrid and native stacks—architecture, delivery practices, and engineering enablement.',
  about: [
    'I started in web and campus systems work, then moved fully into iOS—shipping consumer and marketplace apps before specializing in financial mobile products.',
    'Over time my role shifted from implementing features to shaping architecture, mentoring teams, and improving how modules are designed, tested, and released.',
    'Today I lead a Platform team for a Super App, working across React Native, iOS, and Android—the same concerns that mattered as an iOS SME, now at platform scale: architecture, cohesion, and a trustworthy delivery path.',
  ],
  contact: {
    email: 'juanjogramo@gmail.com',
    linkedin: 'https://linkedin.com/in/juanjogramo',
    github: 'https://github.com/juanjogramo',
  },
  portrait: {
    src: '/images/portrait.jpg',
    alt: 'Professional portrait of Juan José Granados',
  },
  experience: [
    {
      id: 'bcp-platform-lead',
      company: 'Banco de Crédito del Perú',
      role: 'Technical Leader — Platform (Super App)',
      location: 'Lima, Peru',
      start: '2026',
      end: 'Present',
      current: true,
      featured: true,
      summary:
        'Technical leader of a Platform team for a Super App, using hybrid technologies across React Native, iOS, and Android.',
      highlights: [
        'Lead the Platform team that enables Super App capabilities on a hybrid mobile stack.',
        'Work across React Native alongside native iOS and Android to keep platform foundations coherent.',
      ],
      technologies: ['React Native', 'iOS', 'Android', 'Swift'],
    },
    {
      id: 'bcp-sme',
      company: 'Banco de Crédito del Perú',
      role: 'Subject Matter Expert iOS',
      location: 'Lima, Peru',
      start: '2023',
      end: '2026',
      current: false,
      featured: true,
      summary:
        'Expert iOS engineer supporting iOS teams with sessions on unit testing, reducing coupling, increasing cohesion, and choosing VIPER or MVVM based on business needs for new libraries and modules.',
      highlights: [
        'Enable teams to apply clearer layer responsibilities in VIPER and MVVM.',
        'Guide architecture choices for new libraries and modules against product requirements.',
        'Contribute to a large financial iOS application for managing customer transactions.',
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
      location: 'Lima, Peru',
      start: '2021',
      end: '2023',
      current: false,
      featured: true,
      summary:
        'Lead iOS engineer overseeing initiatives such as Vision framework adoption, Swift Package Manager, and Combine, while improving architecture for maintainability and deployability in a financial environment.',
      highlights: [
        'Migrated dependencies from Carthage to Swift Package Manager.',
        'Applied Combine publishers to keep View and ViewModel layers in sync.',
        'Supported a team implementing financial card provisioning with Apple Wallet.',
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
      location: 'Lima, Peru',
      start: '2020',
      end: '2021',
      current: false,
      featured: true,
      summary:
        'Lead engineer overseeing mobile features (iOS and Android) for a team of about 20 people—developers, QA, and design—on a large financial product initiative.',
      highlights: [
        'Coordinated delivery across a multidisciplinary mobile team.',
        'Built and maintained financial iOS features with Apple Pay and Apple Wallet flows.',
      ],
      technologies: ['Swift', 'CocoaPods', 'Apple Pay', 'Apple Wallet', 'App Center', 'Jenkins'],
    },
    {
      id: 'belatrix-loyalty',
      company: 'Belatrix SF',
      role: 'iOS Developer',
      location: 'Lima, Peru',
      start: '2019',
      end: '2020',
      current: false,
      featured: false,
      summary:
        'Built and maintained an iOS loyalty application for a U.S. company, helping customers find retailer, restaurant, and gym benefits.',
      highlights: [
        'Used MapKit so customers could find nearby promotions.',
        'Introduced new modules with SwiftUI.',
      ],
      technologies: ['Swift', 'SwiftUI', 'MapKit', 'CocoaPods'],
    },
    {
      id: 'belatrix-brand',
      company: 'Belatrix SF',
      role: 'iOS Developer',
      location: 'Lima, Peru',
      start: '2017',
      end: '2018',
      current: false,
      featured: false,
      summary:
        'Built and maintained an iOS application focused on understanding user behavior related to a brand.',
      highlights: [
        'Implemented push notifications with Firebase and APNs.',
        'Added universal links and deep links, including passwordless login flows.',
        'Localized the experience by device language and region.',
      ],
      technologies: ['Swift', 'Firebase', 'APNs', 'Universal Links', 'Deep Links'],
    },
    {
      id: 'iberico',
      company: 'Ibérico',
      role: 'Freelance iOS Developer',
      location: 'Lima, Peru',
      start: '2017',
      end: '2017',
      current: false,
      featured: false,
      summary: 'Built an iOS application for buying food and groceries.',
      highlights: [],
      technologies: ['Swift', 'iOS'],
    },
    {
      id: 'megatur',
      company: 'Megatur',
      role: 'Freelance iOS Developer',
      location: 'Arequipa, Peru',
      start: '2016',
      end: '2016',
      current: false,
      featured: false,
      summary: 'Built an iOS application that lets users request a taxi.',
      highlights: [],
      technologies: ['Swift', 'iOS'],
    },
    {
      id: 'el-comercio',
      company: 'El Comercio',
      role: 'iOS Developer',
      location: 'Lima, Peru',
      start: '2015',
      end: '2017',
      current: false,
      featured: true,
      summary:
        'Built iOS applications across the company’s product portfolio, including real estate, jobs, automotive, and prepaid payments.',
      highlights: [
        'Urbania: property search and listing experiences with Google Maps.',
        'Aptitus: job marketplace features with push notifications via AWS and APNs.',
        'NeoAuto: buy and sell new or used cars.',
        'PagoEfectivo: prepaid credit card management.',
      ],
      technologies: ['Swift', 'Objective-C', 'Google Maps', 'AWS', 'APNs'],
    },
    {
      id: 'esan-web',
      company: 'Universidad ESAN',
      role: 'Web Developer Assistant',
      location: 'Lima, Peru',
      start: '2014',
      end: '2015',
      current: false,
      featured: false,
      summary:
        'Built and maintained university web pages and contributed to a student iOS app for schedules, courses, locations, and weekly menus.',
      highlights: [],
      technologies: ['Web', 'iOS'],
    },
    {
      id: 'esan-intern',
      company: 'Universidad ESAN',
      role: 'Intern',
      location: 'Lima, Peru',
      start: '2013',
      end: '2014',
      current: false,
      featured: false,
      summary: 'Maintained computer labs and resolved workstation issues for university staff.',
      highlights: [],
      technologies: [],
    },
  ],
  education: [
    {
      id: 'upc',
      institution: 'Universidad Peruana de Ciencias Aplicadas',
      degree: "Bachelor's degree",
      field: 'Systems Engineering',
      location: 'Lima, Peru',
      start: '2015',
      end: '2021',
    },
    {
      id: 'area51',
      institution: 'Area 51 and Training Center',
      degree: 'iOS Developer training',
      field: 'iOS with Objective-C',
      location: 'Lima, Peru',
      start: '2014',
      end: '2014',
    },
    {
      id: 'tecsup',
      institution: 'TECSUP',
      degree: 'Technical degree',
      field: 'Network and Data Communication',
      location: 'Lima, Peru',
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
      name: 'iOS Certification',
      issuer: 'Area 51 and Training Center',
      year: '2014',
    },
  ],
  skills: [
    {
      id: 'mobile',
      title: 'Mobile Engineering',
      items: [
        'React Native',
        'iOS application development',
        'Android (platform collaboration)',
        'Swift',
        'SwiftUI',
        'Objective-C (training & early career)',
        'Apple Pay & Apple Wallet',
        'MapKit & location features',
        'Push notifications (APNs, Firebase)',
      ],
    },
    {
      id: 'architecture',
      title: 'Software Architecture',
      items: [
        'Super App platform foundations',
        'Hybrid + native mobile architecture',
        'VIPER',
        'MVVM',
        'Modular design & cohesion',
        'Dependency boundaries / coupling reduction',
        'Combine-based reactive flows',
      ],
    },
    {
      id: 'platform',
      title: 'Delivery & Platform Practices',
      items: [
        'CI/CD with Jenkins',
        'Fastlane automation',
        'TestFlight & App Store Connect',
        'CocoaPods & Swift Package Manager',
        'Artifactory-backed dependency distribution',
      ],
    },
    {
      id: 'leadership',
      title: 'Technical Leadership',
      items: [
        'Platform team leadership for Super App initiatives',
        'Subject-matter enablement for iOS teams',
        'Architecture guidance for new modules',
        'Cross-functional mobile delivery (devs, QA, design)',
        'Mentoring on testing and code quality',
      ],
    },
  ],
  caseStudies: [
    {
      id: 'super-app-platform',
      title: 'Leading the Platform team for a Super App',
      context:
        'A financial Super App initiative that needs shared platform capabilities across hybrid and native mobile clients.',
      problem:
        'Platform work must stay coherent across React Native, iOS, and Android without fragmenting architecture or delivery practices.',
      role: 'Technical Leader of the Platform team.',
      approach:
        'Lead the Platform team with a hybrid stack—React Native plus native iOS and Android—focusing on foundations that product teams can build on.',
      outcome:
        'Work is ongoing. Specific internal metrics, product names, and proprietary details are intentionally omitted.',
      technologies: ['React Native', 'iOS', 'Android'],
      confidential: true,
    },
    {
      id: 'team-enablement',
      title: 'Raising iOS engineering standards across teams',
      context:
        'A large financial institution with multiple iOS squads working on a shared consumer banking application.',
      problem:
        'Teams needed clearer guidance on testing, module boundaries, and when to use VIPER versus MVVM for new libraries.',
      role: 'Subject Matter Expert iOS — facilitator and technical coach.',
      approach:
        'Ran enablement sessions on unit testing, coupling/cohesion, and layer responsibilities so teams could choose architectures aligned with business requirements.',
      outcome:
        'Teams gained a shared vocabulary for architecture decisions and stronger practices for maintainable module design. Specific internal metrics are intentionally omitted.',
      technologies: ['Swift', 'VIPER', 'MVVM', 'XCTest'],
      confidential: true,
    },
    {
      id: 'spm-combine',
      title: 'Modernizing dependency and reactive architecture',
      context: 'A financial iOS application that needed better maintainability and deployability.',
      problem:
        'Legacy dependency management and view-layer update patterns limited how safely the app could evolve.',
      role: 'Staff Software Engineer iOS — technical lead for modernization initiatives.',
      approach:
        'Migrated dependencies from Carthage to Swift Package Manager and introduced Combine publishers between ViewModel and View layers; supported Wallet-related provisioning work with peer teams.',
      outcome:
        'Dependency management and reactive update paths became more aligned with current Apple tooling, improving long-term maintainability.',
      technologies: ['Swift', 'SPM', 'Combine', 'Apple Wallet'],
      confidential: true,
    },
    {
      id: 'multidisciplinary-delivery',
      title: 'Leading multidisciplinary mobile feature delivery',
      context:
        'A large financial product initiative delivered by a mixed team of roughly twenty people.',
      problem:
        'Mobile features needed coordinated delivery across iOS, Android, QA, and design without losing technical quality.',
      role: 'Lead engineer for assigned mobile features.',
      approach:
        'Oversaw feature delivery for the mobile track, including Apple Pay and Apple Wallet payment experiences on iOS.',
      outcome:
        'Features progressed through a structured delivery model spanning engineering, QA, and design. Client-confidential details are not published.',
      technologies: ['Swift', 'Apple Pay', 'Apple Wallet', 'Jenkins'],
      confidential: true,
    },
  ],
  projects: [],
  writing: [],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Advanced' },
  ],
  features: {
    projects: false,
    writing: false,
    caseStudies: true,
    portrait: true,
  },
} satisfies Profile;

export const profileEn: Profile = profileSchema.parse(profileEnData);
