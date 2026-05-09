import { CaseStudy } from "@/types";

export const healthcareCaseStudy: CaseStudy = {
  id: "healthcare-case-study",
  projectId: "healthcare-platform",
  problem: {
    statement: "Cancer treatment involves complex, multi-stage workflows where clinical and genomic data often remain siloed, making it difficult for oncologists to synthesize all information for personalized treatment plans.",
    points: [
      "Fragmented data from multiple medical sources.",
      "High cognitive load for physicians in treatment orchestration.",
      "Lack of explainable AI assistance in diagnostic workflows.",
      "Need for real-time monitoring of patient side effects."
    ],
  },
  solution: {
    overview: "An intelligent healthcare support platform designed to orchestrate data collection, provide AI-assisted recommendations, and visualize treatment progress through an engineering-first architecture.",
    features: [
      { title: "Treatment Recommendation", description: "AI-assisted suggestions based on integrated patient data profiles.", icon: "Brain" },
      { title: "Outcome Prediction", description: "Probabilistic modeling of treatment efficacy over time.", icon: "Activity" },
      { title: "Explainable AI (XAI)", description: "Human-readable reasoning for all AI-generated suggestions.", icon: "Search" },
      { title: "Monitoring Dashboard", description: "Real-time tracking of vital signs and patient-reported symptoms.", icon: "Layout" },
      { title: "AI Assistant", description: "Conversational interface for quick data retrieval and coordination.", icon: "MessageSquare" },
      { title: "Reminder Systems", description: "Automated notification engine for medication and follow-ups.", icon: "Bell" }
    ],
  },
  architecture: {
    nodes: [
      { label: "Registration", sublabel: "Patient Onboarding", type: "input" },
      { label: "Clinical Data", sublabel: "Multi-modal Inputs", type: "input" },
      { label: "Processing Pipeline", sublabel: "Data Normalization", type: "process" },
      { label: "ML Engine", sublabel: "Prediction Logic", type: "process" },
      { label: "XAI Layer", sublabel: "Explainability", type: "process" },
      { label: "Monitoring", sublabel: "Real-time Dashboard", type: "output" }
    ],
  },
  challenges: [
    { title: "Conversational AI Logic", description: "Implementing the first version of the AI assistant to handle complex medical context and user intent." },
    { title: "Workflow Orchestration", description: "Coordinating data flow between asynchronous backend services and the real-time frontend." },
    { title: "Multi-system Integration", description: "Ensuring consistency across monitoring dashboards and automated alert systems." }
  ],
  learnings: [
    "Deepened understanding of AI integration within professional workflows.",
    "Developed a backend-oriented mindset for scalable data pipelines.",
    "Gained confidence in architecting multi-system engineering solutions.",
    "Learned the importance of explainability in critical domain applications."
  ],
  future: [
    "Full Genomics Integration for deep personalized diagnostics.",
    "Caregiver Portal for improved patient support networks.",
    "Side-effect Heatmaps to visualize regional treatment outcomes.",
    "Automated Medicine Interaction Checker for patient safety."
  ],
};
