import {
  ArrowUpRight,
  Camera,
  Code2,
  Globe2,
  Mail,
  PenTool,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "Website", icon: Globe2 },
  { label: "Gallery", icon: Camera },
  { label: "Design", icon: PenTool },
  { label: "Code", icon: Code2 },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-30 bg-white px-4 pb-16 pt-8 text-center sm:px-6 md:pb-24 md:pt-12"
    >
      <p className="text-[11px] font-semibold text-[#8c929f]">About</p>
      <h2 className="mx-auto mt-1 max-w-xs text-[22px] font-extrabold leading-tight text-[#171922] sm:max-w-lg sm:text-3xl md:text-[34px]">
        The Developer Behind the Pixel
      </h2>

      <div className="mx-auto mt-8 grid max-w-[1184px] gap-5 text-left md:grid-cols-[1.1fr_.92fr_5.5rem] md:grid-rows-[18rem_18rem]">
        <article className="overflow-hidden rounded-[8px] bg-[#2f8cff] p-6 text-white shadow-[0_18px_45px_rgba(47,140,255,.28)] md:p-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/Edwin-Avatar-Logo.png"
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-bold">Edwin Anderson</h3>
                <p className="text-xs text-white/78">edwinanderson@gmail.com</p>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="inline-flex size-7 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-white/24"
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-16">
            <h3 className="max-w-md text-2xl font-extrabold leading-tight md:text-[26px]">
              Pushing boundaries through innovation
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/78">
              I create frontend solutions that not only look great but also load
              fast, scale everywhere, and work well.
            </p>
          </div>
        </article>

        <div className="flex min-h-64 items-end justify-center overflow-hidden rounded-[8px] bg-[#ffe4bd] md:min-h-0">
          <Image
            src="/images/about/Developer-Image-2.png"
            alt="Developer character waving"
            width={393}
            height={400}
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        <article className="overflow-hidden rounded-[8px] bg-[#080717] p-5 text-white md:row-start-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold">Check My Portfolio</h3>
              <p className="mt-1 text-xs leading-5 text-white/62">
                Explore selected works and real-world projects.
              </p>
            </div>
            <ArrowUpRight className="size-5 text-white/70" aria-hidden="true" />
          </div>
          <div className="mt-5 overflow-hidden rounded-[8px] bg-white/6">
            <Image
              src="/images/projects/Portfolio-Image-3.png"
              alt="Portfolio project preview"
              width={373}
              height={373}
              className="h-auto w-full object-cover"
            />
          </div>
        </article>

        <article className="relative flex min-h-56 flex-col items-center justify-center overflow-hidden rounded-[8px] bg-[#ffb441] px-6 py-7 text-center text-[#171922] md:row-start-2 md:min-h-0">
          <div className="absolute -bottom-20 left-1/2 size-80 -translate-x-1/2 rounded-full bg-[#ffa52d]" />
          <div className="absolute inset-x-8 bottom-10 h-28 rounded-t-full border border-white/22" />
          <div className="relative grid grid-cols-5 items-center gap-3">
            {[
              ["/images/brand/Css-Logo.svg", "CSS"],
              ["/images/brand/JS-Logo.svg", "JavaScript"],
              ["/images/brand/TS-Logo.svg", "TypeScript"],
              ["/images/brand/HTML-Logo.svg", "HTML"],
              ["/images/brand/React-Logo.svg", "React"],
            ].map(([src, alt]) => (
              <span
                key={alt}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,.14)]"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={28}
                  height={28}
                  className="size-7 object-contain"
                />
              </span>
            ))}
          </div>
          <h3 className="relative mt-8 max-w-[13rem] text-xl font-extrabold leading-tight">
            Built with 10+ Trusted Technologies
          </h3>
        </article>

        <a
          href="mailto:edwinanderson@gmail.com"
          aria-label="Email Edwin Anderson"
          className="flex min-h-20 items-center justify-center rounded-[8px] bg-[#2f8cff] text-white shadow-[0_18px_45px_rgba(47,140,255,.24)] transition hover:bg-[#1677ee] md:row-start-2 md:min-h-0"
        >
          <Mail className="size-7" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
