export const links = {
  email: 'tomaspalauposse@gmail.com',
  github: 'https://github.com/tomasp92',
  linkedin: 'https://www.linkedin.com/in/tomaspalau/',
  whatsapp: 'https://wa.me/5491131745215',
  cv: '/cv/Tomas_Palau_Posse_CV.pdf',
}

const skills = [
  { group: { en: 'Frontend', es: 'Frontend' }, items: ['React', 'TypeScript', 'JavaScript', 'GraphQL'] },
  { group: { en: 'Backend', es: 'Backend' }, items: ['Python', 'Django', 'Node.js', 'Express', 'PHP (Laravel)'] },
  { group: { en: 'Data', es: 'Datos' }, items: ['SQL', 'MongoDB'] },
  { group: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' }, items: ['GCP', 'Terraform', 'CI/CD'] },
]

export const content = {
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', background: 'Background', contact: 'Contact' },
    role: 'Full Stack Engineer · Tech Lead',
    location: 'Buenos Aires, Argentina · Remote (UTC-3)',
    status: 'Open to new opportunities',
    downloadCv: 'Download CV',
    hero: {
      title: 'I build products end to end, and help the teams that build them grow.',
      lead:
        'Full Stack Engineer with 5+ years of experience and 4 years as Tech Lead at Reply Pro. React, TypeScript and GraphQL on the frontend; Python/Django and Node.js on the backend; GCP and Terraform underneath.',
    },
    about: {
      question: 'Is a developer valuable just for their technical skills?',
      paragraphs: [
        'Before writing code I graduated in Psychology and taught at university. That background shapes how I work: I listen to stakeholders, turn fuzzy business needs into well-scoped projects, and care about how the people around me grow.',
        'On the technical side I own features from the database to the UI, design GraphQL APIs consumed by multiple frontends, and run CI/CD and cloud infrastructure as code. I like keeping quality high in production — through code review, testing and documentation that the whole team actually uses.',
      ],
    },
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Tech Lead & Full Stack Engineer',
        company: 'Reply Pro',
        dates: '2022 – Nov 2026',
        place: 'Remote',
        summary: 'Omnichannel communications platform.',
        bullets: [
          'Led frontend development with React, TypeScript and GraphQL, raising feature delivery velocity.',
          'Built backend features in Python/Django and designed GraphQL APIs consumed by multiple frontends.',
          'Owned CI/CD pipelines and cloud infrastructure on GCP, managed as code with Terraform.',
          'Planned and executed large-scale projects with business stakeholders, from scoping to production rollout.',
          'Onboarded and mentored developers; set team practices for code review, testing and documentation.',
        ],
        tags: ['React', 'TypeScript', 'GraphQL', 'Django', 'GCP', 'Terraform'],
      },
      {
        role: 'Frontend Developer',
        company: 'Selehann',
        dates: 'Apr 2022 – Sep 2022',
        place: 'Remote',
        bullets: [
          'Developed features for the Texas State website using React and JavaScript.',
          'Performed code reviews and contributed to frontend quality standards.',
        ],
        tags: ['React', 'JavaScript'],
      },
      {
        role: 'Assistant Instructor – Full Stack Web Development',
        company: 'Digital House',
        dates: 'Mar 2022 – Sep 2022',
        place: 'Remote',
        bullets: ['Taught Node.js, Express, React and MongoDB; reviewed student code and resolved technical questions.'],
        tags: ['Node.js', 'Express', 'React', 'MongoDB'],
      },
      {
        role: 'Full Stack Developer',
        company: 'Atexto',
        dates: 'May 2021 – Apr 2022',
        place: 'Remote',
        bullets: [
          'Built and maintained features with Node.js, PHP (Laravel), React, MongoDB and SQL.',
          'Worked with product teams to plan new functionality and fix production bugs.',
        ],
        tags: ['Node.js', 'Laravel', 'React', 'MongoDB', 'SQL'],
      },
    ],
    skillsTitle: 'Skills',
    skills: skills.map((s) => ({ group: s.group.en, items: s.items })),
    languagesLabel: 'Languages',
    languages: ['English — C2 Proficient (EF SET)', 'Spanish — native'],
    backgroundTitle: 'Education & certificates',
    background: [
      {
        title: 'Graduate in Psychology',
        org: 'Universidad Católica Argentina',
        dates: '2011 – 2016',
        note: 'University teaching experience; a background that shapes how I communicate, lead and mentor.',
      },
      {
        title: 'CS50: Introduction to Computer Science',
        org: 'Harvard University',
        dates: '2021',
        href: 'https://www.linkedin.com/feed/update/urn:li:share:6775933718940004352/',
        linkLabel: 'See post',
      },
      {
        title: 'EF SET English Certificate — C2 Proficient (80/100)',
        org: 'EF Standard English Test',
        dates: '2022',
        href: 'https://cert.efset.org/f1GeqH',
        linkLabel: 'See certificate',
      },
    ],
    contact: {
      title: 'Let’s talk',
      text: 'Looking for a full stack engineer or a tech lead who can also talk to the business? I’m available for full-time roles and part-time engagements.',
      email: 'Send an email',
    },
    footer: 'Built with Next.js',
    switchTo: 'Ver en español',
  },
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', skills: 'Skills', background: 'Formación', contact: 'Contacto' },
    role: 'Full Stack Engineer · Tech Lead',
    location: 'Buenos Aires, Argentina · Remoto (UTC-3)',
    status: 'Abierto a nuevas oportunidades',
    downloadCv: 'Descargar CV',
    hero: {
      title: 'Construyo productos de punta a punta, y ayudo a crecer a los equipos que los construyen.',
      lead:
        'Full Stack Engineer con más de 5 años de experiencia y 4 años como Tech Lead en Reply Pro. React, TypeScript y GraphQL en el frontend; Python/Django y Node.js en el backend; GCP y Terraform por debajo.',
    },
    about: {
      question: '¿Es valioso un programador sólo por sus capacidades técnicas?',
      paragraphs: [
        'Antes de programar me recibí de Licenciado en Psicología y fui docente universitario. Esa formación define cómo trabajo: escucho a los stakeholders, convierto necesidades de negocio difusas en proyectos bien acotados y me importa que las personas a mi alrededor crezcan.',
        'En lo técnico, me hago cargo de features desde la base de datos hasta la UI, diseño APIs GraphQL que consumen varios frontends y manejo CI/CD e infraestructura cloud como código. Me gusta sostener la calidad en producción con code review, testing y documentación que el equipo realmente usa.',
      ],
    },
    experienceTitle: 'Experiencia',
    experience: [
      {
        role: 'Tech Lead y Full Stack Engineer',
        company: 'Reply Pro',
        dates: '2022 – nov 2026',
        place: 'Remoto',
        summary: 'Plataforma de comunicaciones omnicanal.',
        bullets: [
          'Lideré el desarrollo frontend con React, TypeScript y GraphQL, acelerando la entrega de features.',
          'Desarrollé features de backend en Python/Django y diseñé APIs GraphQL consumidas por varios frontends.',
          'Fui responsable de los pipelines de CI/CD y la infraestructura en GCP, gestionada como código con Terraform.',
          'Planifiqué y ejecuté proyectos de gran escala junto a stakeholders de negocio, desde el alcance hasta producción.',
          'Hice onboarding y mentoría de desarrolladores; definí prácticas de code review, testing y documentación.',
        ],
        tags: ['React', 'TypeScript', 'GraphQL', 'Django', 'GCP', 'Terraform'],
      },
      {
        role: 'Frontend Developer',
        company: 'Selehann',
        dates: 'abr 2022 – sep 2022',
        place: 'Remoto',
        bullets: [
          'Desarrollé features para el sitio web del Estado de Texas con React y JavaScript.',
          'Hice code reviews y contribuí a los estándares de calidad del frontend.',
        ],
        tags: ['React', 'JavaScript'],
      },
      {
        role: 'Docente asistente – Desarrollo Web Full Stack',
        company: 'Digital House',
        dates: 'mar 2022 – sep 2022',
        place: 'Remoto',
        bullets: ['Enseñé Node.js, Express, React y MongoDB; revisé código de alumnos y resolví consultas técnicas.'],
        tags: ['Node.js', 'Express', 'React', 'MongoDB'],
      },
      {
        role: 'Full Stack Developer',
        company: 'Atexto',
        dates: 'may 2021 – abr 2022',
        place: 'Remoto',
        bullets: [
          'Desarrollé y mantuve features con Node.js, PHP (Laravel), React, MongoDB y SQL.',
          'Trabajé con equipos de producto planificando funcionalidades nuevas y resolviendo bugs en producción.',
        ],
        tags: ['Node.js', 'Laravel', 'React', 'MongoDB', 'SQL'],
      },
    ],
    skillsTitle: 'Skills',
    skills: skills.map((s) => ({ group: s.group.es, items: s.items })),
    languagesLabel: 'Idiomas',
    languages: ['Inglés — C2 Proficient (EF SET)', 'Español — nativo'],
    backgroundTitle: 'Formación y certificados',
    background: [
      {
        title: 'Licenciado en Psicología',
        org: 'Universidad Católica Argentina',
        dates: '2011 – 2016',
        note: 'Experiencia como docente universitario; una formación que define cómo comunico, lidero y acompaño.',
      },
      {
        title: 'CS50: Introduction to Computer Science',
        org: 'Harvard University',
        dates: '2021',
        href: 'https://www.linkedin.com/feed/update/urn:li:share:6775933718940004352/',
        linkLabel: 'Ver publicación',
      },
      {
        title: 'Certificado de inglés EF SET — C2 Proficient (80/100)',
        org: 'EF Standard English Test',
        dates: '2022',
        href: 'https://cert.efset.org/f1GeqH',
        linkLabel: 'Ver certificado',
      },
    ],
    contact: {
      title: 'Hablemos',
      text: '¿Buscás un full stack engineer o un tech lead que además sepa hablar con el negocio? Estoy disponible para posiciones full time y proyectos part time.',
      email: 'Mandame un mail',
    },
    footer: 'Hecho con Next.js',
    switchTo: 'View in English',
  },
}
