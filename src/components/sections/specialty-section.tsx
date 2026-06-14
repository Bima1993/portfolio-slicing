import {
  BadgeCheck,
  CircleMinus,
  Cloud,
  Code2,
  Gauge,
  Layers3,
  Palette,
  Puzzle,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const strengths = [
  { label: "React Expert", icon: BadgeCheck },
  { label: "Precise Website Implementation", icon: Code2 },
  { label: "TypeScript Proficiency", icon: Puzzle },
  { label: "Clean, Maintainable Code", icon: Cloud },
  { label: "Responsive Website Development", icon: Gauge },
  { label: "UI Design Proficiency (Figma)", icon: Palette },
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
        <p className="text-[11px] font-semibold text-[#8c929f]">Specialty</p>
        <h2 className="mx-auto mt-1 max-w-2xl text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[34px]">
          Built with design, speed, and UX in mind.
        </h2>

        <div className="mx-auto mt-9 grid max-w-[1064px] gap-5 md:grid-cols-2">
          <article className="overflow-hidden rounded-[8px] bg-[#f8b743] text-left text-[#171922] shadow-[0_18px_45px_rgba(248,183,67,.22)]">
            <div className="border-b border-black/10 px-6 py-6 text-center">
              <p className="text-sm font-extrabold">Working with me</p>
              <span className="mx-auto mt-4 grid size-9 place-items-center rounded-full bg-white/42 text-[#171922]">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
            </div>

            <ul className="divide-y divide-black/10 px-6">
              {strengths.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 py-4">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/46 text-[#2f8cff]">
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold">{label}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-[8px] border border-[#e8edf3] bg-white text-left text-[#171922]">
            <div className="border-b border-[#edf1f5] px-6 py-6 text-center">
              <p className="text-sm font-extrabold">Another Developer</p>
              <span className="mx-auto mt-4 grid size-9 place-items-center rounded-full bg-[#eef3f8] text-[#8c929f]">
                <Layers3 className="size-4" aria-hidden="true" />
              </span>
            </div>

            <ul className="divide-y divide-[#edf1f5] px-6">
              {gaps.map((label) => (
                <li key={label} className="flex items-center gap-3 py-4">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#eef3f8] text-[#9aa3af]">
                    <CircleMinus className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-[#7b8491]">
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
