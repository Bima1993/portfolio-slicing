import Image from "next/image";

import { Button } from "@/components/ui/button";

const strengths = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];

const gaps = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];

export function SpecialtySection() {
  return (
    <section className="bg-white px-4 py-16 text-center sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1184px]">
        <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-[#dce2ec] px-4 text-xs font-black text-[#6f7785]">
          Superiority
        </p>
        <h2 className="mx-auto mt-5 max-w-[780px] text-[26px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[40px]">
          Built with design, speed, and UX in mind.
        </h2>

        <div className="mx-auto mt-14 grid max-w-[1184px] gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-[8px] bg-[#f8b743] px-6 py-8 text-left text-[#171922] shadow-[0_18px_45px_rgba(248,183,67,.22)] sm:px-8 md:py-9">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold leading-tight">
                Working with me
              </h3>
              <Image
                src="/images/brand/Edwin-Avatar-Logo.png"
                alt="Edwin Anderson"
                width={80}
                height={80}
                className="mx-auto mt-7 size-20 rounded-full"
              />
            </div>

            <ul className="mt-8 divide-y divide-white/44">
              {strengths.map((label) => (
                <li key={label} className="flex items-center gap-5 py-5">
                  <Image
                    src="/images/superiority/feature-star.svg"
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden="true"
                    className="size-8 shrink-0"
                  />
                  <span className="text-lg font-extrabold leading-tight">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-[8px] border border-[#d9dde5] bg-white px-6 py-8 text-left text-[#171922] sm:px-8 md:py-9">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold leading-tight">
                Another Developer
              </h3>
              <Image
                src="/images/superiority/developer-placeholder.svg"
                alt="Another developer profile"
                width={80}
                height={80}
                className="mx-auto mt-7 size-20"
              />
            </div>

            <ul className="mt-8 divide-y divide-[#d9dde5]">
              {gaps.map((label) => (
                <li key={label} className="flex items-center gap-5 py-5">
                  <Image
                    src="/images/superiority/muted-star.svg"
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden="true"
                    className="size-8 shrink-0"
                  />
                  <span className="text-lg font-semibold leading-tight text-[#202430]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <Button
          asChild
          className="mt-8 h-11 w-full max-w-56 rounded-full bg-[#2f8cff] text-sm font-semibold text-white hover:bg-[#1677ee]"
        >
          <a href="#contact">Hire Me</a>
        </Button>
      </div>
    </section>
  );
}
