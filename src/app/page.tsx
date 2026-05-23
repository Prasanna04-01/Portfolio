import { MainLayout } from "@/components/layout/main-layout";
import { EngineeringProfile } from "@/components/sections/engineering-profile";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WorkflowShowcase } from "@/components/sections/workflow-showcase";
import { Skills } from "@/components/sections/skills";
import { Journey } from "@/components/sections/journey";
import { CertificatesPreview } from "@/components/sections/certificates-preview";

export default function Home() {
  return (
    <MainLayout>
      <EngineeringProfile />
      <FeaturedProjects />
      <WorkflowShowcase />
      <Skills />
      <Journey />
      <CertificatesPreview />
      
      {/* Contact Section explicitly for smooth scroll target */}
      <section id="contact" className="h-px w-full" />
    </MainLayout>
  );
}
