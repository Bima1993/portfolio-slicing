import { Minus, Plus } from "lucide-react";

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
      className="relative overflow-hidden bg-[#070b12] px-4 pb-36 pt-20 text-center sm:px-6 md:pb-48 md:pt-28"
    >
      <div className="absolute inset-0 bg-[#0b0734]" />
      <div
        aria-hidden="true"
        className="absolute -left-[22rem] top-10 h-[48.35rem] w-[73.35rem] -rotate-[5.93deg] rounded-full"
        style={{
          backgroundColor: "rgba(0, 234, 255, 1)",
          filter: "blur(320px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-[8.625rem] bottom-[-5rem] h-[41.125rem] w-[116.3125rem] -rotate-[5.93deg] rounded-full"
        style={{
          backgroundColor: "rgba(186, 218, 255, 1)",
          filter: "blur(320px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[40%] top-20 h-[77.875rem] w-[85.375rem] -rotate-[5.93deg] rounded-full"
        style={{
          backgroundColor: "rgba(77, 53, 137, 1)",
          filter: "blur(300px)",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-0 h-40 w-full md:h-56"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          d="M0 142Q720 42 1440 142V260H0Z"
          fill="#070b12"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1064px] rounded-[22px] border-[10px] border-[#dceaff]/70 bg-white p-5 text-left shadow-[0_28px_80px_rgba(0,24,72,.28)] sm:p-8 md:p-10">
        <div className="text-center">
          <p className="mx-auto flex h-6 w-fit items-center rounded-full border border-[#e1e6ef] px-3 text-[10px] font-semibold text-[#6f7785]">
            FAQ
          </p>
          <h2 className="mx-auto mt-1 max-w-md text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl">
            Need More Info? Start Here
          </h2>
        </div>

        <div className="mt-8 grid gap-4">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-[8px] border border-[#e1e6ef] bg-white px-4 py-4 text-[#171922] sm:px-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491]">
                  <Plus
                    className="size-4 group-open:hidden"
                    aria-hidden="true"
                  />
                  <Minus
                    className="hidden size-4 group-open:block"
                    aria-hidden="true"
                  />
                </span>
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
