import { CaseStudy } from "@/types";

export const repoAnalyzerCaseStudy: CaseStudy = {
  id: "repo-analyzer-case-study",
  projectId: "repo-analyzer",
  problem: {
    statement: "Engineering teams often struggle to maintain a clear architectural mental model as repositories grow in size and complexity. New developers face steep learning curves, while existing teams find it difficult to identify hidden dependencies or assess the impact of structural changes.",
    points: [
      "Difficulty understanding large, multi-module repositories.",
      "Lack of real-time architecture visibility and documentation.",
      "Complex onboarding processes for new team members.",
      "Dependency confusion leading to maintainability bottlenecks.",
      "Opaque code relationships hindering structural refactoring."
    ],
  },
  solution: {
    overview: "A premium repository intelligence platform that automates architectural discovery, visualizes dependency relationships, and provides actionable insights into code health through a high-performance system-thinking approach.",
    features: [
      { title: "Repository Scanning", description: "Automated crawling and indexing of repository file structures.", icon: "Search" },
      { title: "Dependency Visualization", description: "Interactive graph-based mapping of module and file relationships.", icon: "Share2" },
      { title: "Commit Timeline", description: "Visual analysis of architectural evolution and commit hotspots.", icon: "History" },
      { title: "Risk Analysis", description: "Identifying high-complexity modules and circular dependencies.", icon: "ShieldAlert" },
      { title: "Architecture Overview", description: "High-level visualization of system components and boundaries.", icon: "Layout" },
      { title: "AI Repo Assistant", description: "Optional LLM-powered chatbot for natural language repo queries.", icon: "MessageSquare" }
    ],
  },
  architecture: {
    nodes: [
      { label: "Repository Input", sublabel: "Git/Local Source", type: "input" },
      { label: "File Parser", sublabel: "Multi-language Scanner", type: "process" },
      { label: "Import Extractor", sublabel: "Dependency Mapping", type: "process" },
      { label: "Analysis Engine", sublabel: "Metrics & Graph Logic", type: "process" },
      { label: "FastAPI Backend", sublabel: "Core Orchestrator", type: "process" },
      { label: "Visualization Layer", sublabel: "Interactive D3.js UI", type: "output" }
    ],
  },
  challenges: [
    { title: "Dependency Graph Scaling", description: "Optimizing graph rendering performance for repositories with thousands of file connections without sacrificing UI clarity." },
    { title: "Parsing Multi-language Syntax", description: "Implementing a flexible parsing strategy that could accurately extract import/export patterns across different programming languages." },
    { title: "Time-Constrained Engineering", description: "Architecting a functional prototype within a 24-hour hackathon environment while maintaining code quality and system modularity." }
  ],
  learnings: [
    "Mastered graph theory applications for real-world architectural visualization.",
    "Gained deep experience in developer-tool engineering and workflow design.",
    "Refined rapid prototyping capabilities under high-pressure environments.",
    "Understood the critical value of system-thinking in repository management."
  ],
  future: [
    "AST-based Deep Parsing for infrastructure-level code analysis.",
    "Multi-language Support expansion (Rust, C++, Java, etc.).",
    "Automated AI Summaries for complex code modules and directories.",
    "Predictive Impact Analysis for proposed architectural refactors."
  ],
};
