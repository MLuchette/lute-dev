import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Matt Luchette — Software Engineer",
  author: "Matt Luchette",
  description: "Software Engineer and Frontend Architect based in the San Francisco Bay Area.",
  lang: "en",
  siteLogo: "/linkedin.jpg",
  navLinks: [
    { text: "Career", href: "#experience" },
    { text: "Builds", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "/resume.pdf" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/lutedev/" },
    { text: "GitHub", href: "https://github.com/MLuchette" },
  ],
  socialImage: "/linkedin.jpg",
  canonicalURL: "https://lute.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Matt Luchette",
    specialty: "Staff Software Engineer / Frontend Architect",
    summary:
      "Developer with over ten years of experience building for the web. Beyond the code, I'm mission-driven to build things that are stable, intuitive, and ultimately make people's lives easier.",
    email: "m@lute.dev",
  },
  experience: [
    {
      company: "Intuit",
      position: "Staff Software Engineer",
      logo: "/i.svg",
      startDate: "April 2023",
      endDate: "Present",
      summary: [
        "Architecting UI frameworks for next-generation AI experiences in QuickBooks Online, focusing on agentic user interfaces.",
        "Developing high-performance, reusable React architectures that drive cross-platform growth and retention.",
        "Led the technical redesign and launch of the QuickBooks public commerce experience, significantly improving core sales metrics.",
        "Mentoring senior and junior engineers, advocating for technical excellence and frontend best practices.",
      ],
    },
    {
      company: "Google",
      position: "L4 Software Engineer",
      logo: "/g.svg",
      startDate: "April 2022",
      endDate: "March 2023",
      summary: [
        "Optimized Silicon engineering productivity by building specialized internal tools for hardware design and validation.",
        "Pioneered an Angular-based enterprise platform as a central 'source of truth' for hardware data management.",
        "Drove product definitions from initial customer requirements through Figma prototyping to full frontend implementation.",
      ],
    },
    {
      company: "Oracle",
      position: "Senior Software Engineer",
      logo: "/o.svg",
      startDate: "July 2013",
      endDate: "March 2022",
      summary: [
        "Spearheaded core feature development for Oracle Primavera Cloud, managing complex enterprise scheduling and risk analysis tools.",
        "Served as Team Lead for the Risk Analysis vertical, aligning UI efforts with business analysts and UX teams.",
        "Authored and maintained foundational application-wide components used by global engineering teams.",
      ],
    },
  ],
  projects: [
    {
      name: "Liquid Canvas",
      summary:
        "A hands-on experiment with WebGL and fluid simulation. Built to scratch a curiosity itch, because watching rainbow ripples is genuinely satisfying.",
      linkPreview: "/fluid",
      linkLabel: "Play with Fluid",
      linkSource: "https://github.com/MLuchette/react-fluid",
      image: "/fluid.png",
    },
    {
      name: "Intuit Assist for QuickBooks",
      summary: "Part of the founding team that shipped Intuit Assist — the first agentic AI experiences in QuickBooks Online, helping small business owners work smarter through intelligent automation.",
      linkPreview: "https://quickbooks.intuit.com/payments/invoicing/generator/",
      linkLabel: "See It Live",
      linkSource: "#",
      image: "/qbo.png",
    },
    {
      name: "Google Tensor Internal Tools",
      summary:
        "I engineered the mission-critical internal platform used by Google engineers to design and validate the Google Tensor chip.",
      linkPreview: "https://en.wikipedia.org/wiki/Google_Tensor",
      linkLabel: "Learn More",
      linkSource: "https://github.com/MLuchette",
      image: "/gchips.png",
    },
    {
      name: "Oracle Primavera Cloud",
      summary:
        "I developed the foundational data grid and Gantt chart engines for Oracle's flagship enterprise scheduling platform.",
      linkPreview:
        "https://www.oracle.com/a/ocom/docs/oracle-primavera-cloud-ds.pdf",
      linkLabel: "Read Data Sheet",
      linkSource: "#",
      image: "/oracle.png",
    },
  ],
  about: {
    description: `
      I'm Matt, a Software Engineer originally from Philadelphia, now based in Redwood City, CA. I've spent the last ten years building for the web, specializing in frontend architecture and complex applications.
      
      Outside of work, I'm a lifelong gamer with a deep appreciation for immersive storytelling and design. At the end of the day, I just want to build software that makes people's lives easier.
    `,
    image: "/pinnacles.jpeg",
  },
};
