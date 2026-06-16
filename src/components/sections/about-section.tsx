import { ChevronRight, Mail } from "lucide-react";
import Image from "next/image";

import { socialLinks } from "@/components/icons/social-icons";

const technologyOrbit = [
  {
    src: "/images/brand/Css-Logo.svg",
    alt: "CSS",
    position:
      "left-[-0.75rem] top-[55%] -translate-y-1/2 sm:left-[2%] lg:left-[-0.25rem]",
  },
  {
    src: "/images/brand/JS-Logo.svg",
    alt: "JavaScript",
    position: "left-[15%] top-[34%]",
  },
  {
    src: "/images/brand/TS-Logo.svg",
    alt: "TypeScript",
    position: "left-1/2 top-[27%] -translate-x-1/2",
  },
  {
    src: "/images/brand/HTML-Logo.svg",
    alt: "HTML",
    position: "right-[15%] top-[34%]",
  },
  {
    src: "/images/brand/React-Logo.svg",
    alt: "React",
    position:
      "right-[-0.75rem] top-[55%] -translate-y-1/2 sm:right-[2%] lg:right-[-0.25rem]",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-30 bg-white px-4 pb-16 pt-12 text-center sm:px-6 md:pb-24 md:pt-14"
    >
      <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-[#dce2ec] px-4 text-xs font-semibold text-[#8c929f]">
        About
      </p>
      <h2 className="mx-auto mt-5 max-w-[780px] text-[26px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[40px]">
        The Developer Behind the Pixel
      </h2>

      <div className="mx-auto mt-10 grid max-w-[1184px] gap-5 text-left lg:grid-cols-12 lg:grid-rows-[27.5rem_31.5rem]">
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
              I create frontend solutions that not only look good but also load
              fast, work everywhere, and scale well.
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

        <article className="overflow-hidden rounded-[8px] bg-[#080717] p-6 text-white shadow-[0_18px_45px_rgba(8,7,23,.18)] sm:p-8 lg:col-span-5 lg:row-start-2">
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

        <article className="relative min-h-[28rem] overflow-hidden rounded-[8px] bg-[#ffb441] text-center text-[#171922] lg:col-span-5 lg:row-start-2 lg:min-h-0">
          <div className="absolute left-1/2 top-[43%] size-[36rem] -translate-x-1/2 rounded-full bg-[#ffa33b]" />
          <div className="absolute left-1/2 top-[52%] size-[29rem] -translate-x-1/2 rounded-full bg-[#ffc06a]" />
          <div className="absolute left-1/2 top-[61%] size-[21rem] -translate-x-1/2 rounded-full bg-[#ffd59c]" />
          <div className="absolute left-1/2 top-[69%] size-[13rem] -translate-x-1/2 rounded-full bg-[#ffe1bb]" />

          {technologyOrbit.map(({ src, alt, position }) => (
            <span
              key={alt}
              className={`absolute z-10 inline-flex size-[72px] items-center justify-center rounded-full bg-[#fff0df] shadow-[0_18px_40px_rgba(143,77,21,.16)] ${position}`}
            >
              <Image
                src={src}
                alt={alt}
                width={44}
                height={44}
                className="size-11 object-contain"
              />
            </span>
          ))}

          <h3 className="absolute left-1/2 top-[57%] z-10 w-[17rem] -translate-x-1/2 text-[26px] font-extrabold leading-tight sm:text-[28px]">
            Built with 10+ Trusted Technologies
          </h3>
        </article>

        <a
          href="mailto:edwinanderson@email.com"
          aria-label="Email Edwin Anderson"
          className="flex min-h-32 items-center justify-center rounded-[8px] bg-[#2f8cff] text-white shadow-[0_18px_45px_rgba(47,140,255,.24)] transition hover:bg-[#1677ee] lg:col-span-2 lg:row-start-2 lg:min-h-0"
        >
          <Mail className="size-9 fill-white/12" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
