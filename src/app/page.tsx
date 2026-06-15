import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SpecialtySection } from "@/components/sections/specialty-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SpecialtySection />
        <ProjectsSection />
        <div className="relative overflow-hidden bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[34rem] top-24 z-0 hidden h-[62rem] w-[71rem] bg-[#c7defb] md:block lg:-right-[24rem] lg:top-28"
            style={{
              WebkitMaskImage:
                "url('/images/timeline/timeline-flow-vector.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage: "url('/images/timeline/timeline-flow-vector.svg')",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-24 z-0 hidden h-[62rem] w-[20rem] bg-[#c7defb] md:block lg:-left-12 lg:bottom-28"
            style={{
              WebkitMaskImage:
                "url('/images/timeline/timeline-flow-vector-edge.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage:
                "url('/images/timeline/timeline-flow-vector-edge.svg')",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          />
          <TimelineSection />
          <TestimonialsSection />
        </div>
        <FaqSection />
      </main>
      <ContactSection />
    </div>
  );
}
