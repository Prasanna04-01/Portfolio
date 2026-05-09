import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "healthcare-platform",
    title: "AI-Powered Healthcare Platform",
    description: "A comprehensive healthcare orchestration system integrating explainable AI for patient diagnostics and monitoring.",
    techStack: ["Next.js", "Python", "FastAPI", "TensorFlow", "PostgreSQL"],
    category: "AI",
    featured: true,
    imageUrl: "/project-assets/healthcare/dashboard.jpg",
    githubUrl: "https://github.com/Prasanna04-01",
    highlights: [
      "Architected a multi-modal data collection pipeline for patient records.",
      "Integrated an XAI (Explainable AI) layer to provide diagnostic reasoning.",
      "Built a real-time monitoring dashboard with automated alert systems.",
    ],
    workflow: {
      title: "Patient Diagnostic Workflow",
      steps: [
        { label: "Registration", description: "Secure patient onboarding and history collection." },
        { label: "Data Collection", description: "Multi-modal input from sensors and manual logs." },
        { label: "ML Processing", description: "Core diagnostic engine processing patient data." },
        { label: "AI Recommendation", description: "Generating clinical insights and suggestions." },
        { label: "XAI Layer", description: "Providing human-readable reasoning for AI outputs." },
        { label: "Monitoring", description: "Continuous tracking and automated reporting." },
      ],
    },
  },
  {
    id: "repo-analyzer",
    title: "Engineering Repo Analyzer",
    description: "A developer tool designed to visualize repository architectures and analyze dependency graphs in real-time.",
    techStack: ["Go", "TypeScript", "D3.js", "Redis", "Docker"],
    category: "Systems",
    featured: true,
    imageUrl: "/project-assets/repo-analyzer/dashboard.png",
    githubUrl: "https://github.com/Prasanna04-01",
    highlights: [
      "Developed a high-performance parser engine for multi-language support.",
      "Implemented a graph-based dependency extractor for architecture mapping.",
      "Designed a custom visualization layer for interactive repo exploration.",
    ],
    workflow: {
      title: "Repository Analysis Pipeline",
      steps: [
        { label: "Input", description: "Secure repository connection and file scanning." },
        { label: "Parser Engine", description: "Lexical analysis and AST generation." },
        { label: "Extractor", description: "Mapping module relationships and dependencies." },
        { label: "Analysis Engine", description: "Computing complexity metrics and hotspots." },
        { label: "Visualization", description: "Interactive architectural graph rendering." },
      ],
    },
  },
];
