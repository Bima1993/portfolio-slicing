import { ChevronRight, Mail } from "lucide-react";
import Image from "next/image";

import { socialLinks } from "@/components/icons/social-icons";

const technologyOrbit = [
  {
    src: "/images/brand/Css-Logo.svg",
    alt: "CSS",
    position: "left-[-2.625rem] top-[79%] -translate-y-1/2",
  },
  {
    src: "/images/brand/JS-Logo.svg",
    alt: "JavaScript",
    position: "left-[21%] top-[62%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "/images/brand/TS-Logo.svg",
    alt: "TypeScript",
    position: "left-1/2 top-[55.5%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "/images/brand/HTML-Logo.svg",
    alt: "HTML",
    position: "left-[75%] top-[62%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "/images/brand/React-Logo.svg",
    alt: "React",
    position: "right-[-2.625rem] top-[79%] -translate-y-1/2",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-30 bg-white px-4 pb-16 pt-12 text-center sm:px-6 md:pb-24 md:pt-14"
    >
      <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-[#dce2ec] px-4 text-xs font-black text-[#8c929f]">
        About
      </p>
      <h2 className="mx-auto mt-5 max-w-[780px] text-[26px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[40px]">
        The Developer Behind the Pixel
      </h2>

      <div className="mx-auto mt-10 max-w-[1184px] text-left">
        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[27.5rem]">
          <article className="relative overflow-hidden rounded-[8px] bg-[#2f8cff] p-6 text-white shadow-[0_18px_45px_rgba(47,140,255,.28)] sm:p-8 lg:col-span-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:radial-gradient(rgba(255,255,255,.5)_2px,transparent_2px)] [background-size:16px_16px]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(12,74,183,.52)_0%,rgba(47,140,255,.92)_62%,rgba(47,140,255,1)_100%)]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/brand/Edwin-Avatar-Logo.png"
                  alt=""
                  width={72}
                  height={72}
                  className="size-16 rounded-full sm:size-[72px]"
                />
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    Edwin Anderson
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/86 sm:text-base">
                    edwinanderson@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#contact"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/72 bg-white/6 text-white transition hover:bg-white/18"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mt-20 max-w-[34rem] sm:mt-24 lg:mt-28">
              <h3 className="text-[30px] font-extrabold leading-tight sm:text-[38px] lg:text-[40px]">
                Pushing boundaries through innovation
              </h3>
              <p className="mt-5 text-base leading-8 text-white/88">
                I create frontend solutions that not only look good but also
                load fast, work everywhere, and scale well.
              </p>
            </div>
          </article>

          <div className="flex min-h-[22rem] items-end justify-center overflow-hidden rounded-[8px] bg-[#ffe4bd] lg:col-span-4 lg:min-h-0">
            <Image
              src="/images/about/Developer-Image-2.png"
              alt="Developer character waving"
              width={393}
              height={400}
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_140px] lg:grid-rows-[31.5rem]">
          <article className="overflow-hidden rounded-[8px] bg-[#080717] p-6 text-white shadow-[0_18px_45px_rgba(8,7,23,.18)] sm:p-8 lg:h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold leading-tight">
                  Check My Portfolio
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/72 sm:text-base">
                  Explore selected works and real-world projects
                </p>
              </div>
              <a
                href="#projects"
                aria-label="Open portfolio projects"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/4 text-white transition hover:bg-white/12"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </a>
            </div>

            <div className="relative mt-8 h-[20rem] overflow-hidden rounded-[8px] bg-[linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.72)_42%,rgba(118,53,230,.92)_100%)] sm:h-[24rem] lg:h-[20rem]">
              <Image
                src="/images/projects/Portfolio-Image-2.png"
                alt=""
                width={373}
                height={373}
                aria-hidden="true"
                className="absolute -right-8 top-0 h-[82%] w-[72%] rounded-[6px] object-contain opacity-[0.92]"
              />
              <Image
                src="/images/projects/Portfolio-Image-3.png"
                alt="Portfolio project preview"
                width={373}
                height={373}
                className="absolute bottom-0 left-5 h-[86%] w-[73%] rounded-[6px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,.24)] sm:left-8"
              />
            </div>
          </article>

          <article className="relative aspect-square min-h-[22.5rem] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#f8bd4b_0%,#ffad38_43%,#ff8b13_100%)] text-center text-[#12151d] lg:h-full lg:min-h-0 lg:aspect-auto">
            <div className="absolute left-1/2 top-[84%] size-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffbd68]" />
            <div className="absolute left-1/2 top-[84%] size-[99%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd09b]" />
            <div className="absolute left-1/2 top-[84%] size-[71%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffdfbc]" />
            <div className="absolute left-1/2 top-[84%] size-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6d3b1]" />

            {technologyOrbit.map(({ src, alt, position }) => (
              <span
                key={alt}
                className={`absolute z-10 inline-flex size-[84px] items-center justify-center rounded-full bg-[#fff0df] shadow-[0_18px_40px_rgba(143,77,21,.16)] ${position}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={52}
                  height={52}
                  className="size-[52px] object-contain"
                />
              </span>
            ))}

            <h3 className="absolute left-1/2 top-[75%] z-20 w-[22rem] max-w-[86%] -translate-x-1/2 text-[25px] font-extrabold leading-[1.42] sm:text-[26px]">
              Built with 10+ Trusted
              <br />
              Technologies
            </h3>
          </article>

          <a
            href="mailto:edwinanderson@email.com"
            aria-label="Email Edwin Anderson"
            className="flex min-h-32 items-center justify-center rounded-[12px] bg-[#2f8cff] text-white shadow-[0_18px_45px_rgba(47,140,255,.24)] transition hover:bg-[#1677ee] lg:h-full lg:min-h-0 lg:w-full"
          >
            <Mail className="size-9 fill-white/12" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
