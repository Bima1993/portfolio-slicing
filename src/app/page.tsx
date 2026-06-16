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
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-12 z-0 hidden h-[calc(100%-5rem)] w-full md:block"
            viewBox="0 0 1440 2200"
            preserveAspectRatio="none"
          >
            <path
              d="M1555 10C1328 93 1323 308 1320 556C1316 877 1235 1008 1033 1058C804 1115 656 956 443 1001C241 1044 170 1231 122 1422C61 1663 98 1853 -130 1944"
              fill="none"
              stroke="#C7DEFB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="128"
            />
          </svg>
          <TimelineSection />
          <TestimonialsSection />
        </div>
        <FaqSection />
      </main>
      <ContactSection />
    </div>
  );
}
