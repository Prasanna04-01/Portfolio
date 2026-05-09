import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WorkflowShowcase } from "@/components/sections/workflow-showcase";
import { Skills } from "@/components/sections/skills";
import { Journey } from "@/components/sections/journey";
import { CertificatesPreview } from "@/components/sections/certificates-preview";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedProjects />
      <WorkflowShowcase />
      <Skills />
      <About />
      <Journey />
      <CertificatesPreview />
      
      {/* Contact Section explicitly for smooth scroll target */}
      <section id="contact" className="h-px w-full" />
    </MainLayout>
  );
}
