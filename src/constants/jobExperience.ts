export interface Experience {
  dateEnd: string
  dateStart: string
  description?: string
  descriptionPoints?: string[]
  location: string
  logoUrl: string
  name: string
  positionTitle: string
}

export const experienceList: Experience[] = [
  {
    dateEnd: "November 2022",
    dateStart: "September 2023",
    description:
      "I was met with an unexpected end of a project and decided to move on to keep actively working.",
    descriptionPoints: [
      "Web Browser Technologies Expertise",
      "Communication (mentoring, UX, assistive management)",
      "Planning, Code reviews, and knowledge sharing",
      "Architectural insights",
    ],
    location: "Prague, Czech republic",
    logoUrl: "/images/companies/kpmg.jpeg",
    name: "KPMG Czech republic",
    positionTitle: "Senior Frontend engineer · React · TypeScript",
  },
  {
    dateEnd: "May 2022",
    dateStart: "September 2021",
    description:
      "I enjoyed managing multiple projects and people and I was proud of my team.",
    descriptionPoints: [
      "Project management: planning, scoping, roadmapping",
      "Hands-on coding and leadership",
      "Shared UI component library development",
      "Coding guidelines and styleguide manager",
      "UX research & design",
    ],
    location: "California, United States",
    logoUrl: "/images/companies/wordly.jpeg",
    name: "Wordly, Inc.",
    positionTitle: "Frontend Lead · Senior Frontend engineer & mentor · TypeScript",
  },
  {
    dateEnd: "September 2018",
    dateStart: "August 2023",
    description:
      "I founded Neka Stores with two partners to continue the Neka brand's family legacy starting in 1993.",
    descriptionPoints: [
      "Co-founder and CEO of 5+ years",
      "Leadership in business, operations, and technology",
      "Digital transformation and e-commerce expertise",
      "Innovative solutions: microservices, bots, custom app suite",
    ],
    location: "Trnava, Slovak republic",
    logoUrl: "/images/companies/nekastores.jpeg",
    name: "Neka Stores",
    positionTitle: "Marketing and Executive Director · Co-Founder · CTO",
  },
  {
    dateEnd: "September 2018",
    dateStart: "May 2018",
    description:
      "Unfortunately, my tenure in ČSOB was ended prematurely as our projects approached their finish lines.",
    descriptionPoints: [
      "Web application management",
      "Component library development & design",
      "Public-facing frontend tech stack upgrade",
      "Innovative Development Methodologies",
    ],
    location: "Prague, Czech republic",
    logoUrl: "/images/companies/csob.jpeg",
    name: "ČSOB",
    positionTitle: "Senior Frontend Engineer · Software Architect · Git & UI expert",
  },
  {
    dateEnd: "September 2017",
    dateStart: "September 2016",
    description:
      "I gave public presentations about styleguides and UI methodologies multiple times under the ROI Hunter brand.",
    descriptionPoints: [
      "React.js Frontend engineering",
      "UI/UX expertise, CSS, CSS-in-JS and preprocessors expert",
      "Project management & Team leadership (UIKit)",
      "Node.js and microservice architecture",
    ],
    location: "Brno, Czech republic",
    logoUrl: "/images/companies/roihunter.jpeg",
    name: "ROI Hunter",
    positionTitle: "Frontend Engineering · React · UI & CSS Expert",
  },
  {
    dateEnd: "August 2016",
    dateStart: "February 2016",
    description:
      "I got to start using React professionally in it's early adoption days and I loved communicating with English speaking clients.",
    descriptionPoints: [
      "React.js Frontend engineering",
      "CSS, CSS-in-JS and Webpack expert",
      "Client collaboration (US based clients)",
      "Full-stack with Node.js (learning)",
    ],
    location: "Brno, Czech republic",
    logoUrl: "/images/companies/strv.jpeg",
    name: "STRV",
    positionTitle: "Frontend Engineering · React · UI & CSS Expert",
  },
  {
    dateEnd: "September 2015",
    dateStart: "March 2014",
    description:
      "At the start of my professional career, I started learning Frontend development, UX engineering and design and account management.",
    descriptionPoints: [
      "Frontend web and app development",
      "Client management (English speaking clients)",
      "UI/UX Consultation and co-designing",
    ],
    location: "Trnava, Slovak republic",
    logoUrl: "/images/companies/vizion.jpeg",
    name: "Vizion",
    positionTitle: "Frontend Development · Client Management · UI/UX Consultation",
  },
]
