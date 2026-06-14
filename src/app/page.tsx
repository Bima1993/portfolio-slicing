import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />

        <section
          id="about"
          className="relative z-30 bg-white px-4 pb-10 pt-5 text-center sm:px-6 md:pt-8"
        >
          <p className="text-[11px] font-semibold text-[#8c929f]">About</p>
          <h2 className="mx-auto mt-1 max-w-xs text-[22px] font-extrabold leading-tight text-[#171922] sm:max-w-lg sm:text-3xl">
            The Developer Behind the Pixel
          </h2>
        </section>
      </main>
    </div>
  );
}
