import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mostly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vite. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes. I can collaborate remotely, handle project communication clearly, and ship frontend work in focused milestones.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Yes. I turn design files into responsive, accessible, production-ready interfaces with careful attention to spacing, typography, and interaction states.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Yes. I can integrate REST APIs, coordinate data needs, and keep frontend code organized so teams can maintain it easily.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "I am open to strong full-time opportunities, especially teams that value product quality, design detail, and thoughtful engineering.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#071044] px-4 py-20 text-center sm:px-6 md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(150deg,#071044_0%,#00a5ff_56%,#d7e8ff_100%)]" />
      <div className="absolute inset-0 opacity-22 [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.36)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-[1064px] rounded-[8px] border-8 border-white/45 bg-white p-5 text-left shadow-[0_28px_80px_rgba(0,24,72,.28)] sm:p-8 md:p-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold text-[#8c929f]">FAQ</p>
          <h2 className="mx-auto mt-1 max-w-md text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl">
            Need More Info? Start Here
          </h2>
        </div>

        <div className="mt-8 divide-y divide-[#e8edf3] rounded-[8px] border border-[#e8edf3]">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="group px-4 py-4 text-[#171922] open:bg-[#fbfcfe] sm:px-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDown
                  className="size-4 shrink-0 text-[#7b8491] transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#606a78]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
