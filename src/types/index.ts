export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: "AI" | "Full Stack" | "Systems";
  highlights: string[];
  workflow: {
    title: string;
    steps: { label: string; description: string }[];
  };
}

export interface Skill {
  category: string;
  items: string[];
}

export interface CaseStudy {
  id: string;
  projectId: string;
  problem: {
    statement: string;
    points: string[];
  };
  solution: {
    overview: string;
    features: { title: string; description: string; icon: string }[];
  };
  architecture: {
    nodes: { label: string; sublabel: string; type: "input" | "process" | "output" }[];
  };
  challenges: { title: string; description: string }[];
  learnings: string[];
  future: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  imageUrl?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  description: string;
  email: string;
  location: string;
  resumeUrl: string;
  profilePhoto?: string;
  links: {
    github: string;
    linkedin: string;
    instagram?: string;
    twitter?: string;
  };
  navLinks: { label: string; href: string }[];
}

export interface TimelineEvent {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "education" | "experience" | "achievement";
}
