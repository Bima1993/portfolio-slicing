import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Dribbble",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-1.png",
    accent: "#ea4c89",
  },
  {
    company: "Adobe",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-2.png",
    accent: "#fa0f00",
  },
  {
    company: "Upwork",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-3.png",
    accent: "#14a800",
  },
  {
    company: "Paypal",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-4.png",
    accent: "#2f8cff",
  },
];

export function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24">
      <Image
        src="/images/timeline/Timeline-Vector.png"
        alt=""
        width={1137}
        height={999}
        aria-hidden="true"
        className="pointer-events-none absolute -left-[28rem] top-56 z-0 hidden w-[54rem] max-w-none select-none md:block lg:-left-[34rem] lg:top-44 lg:w-[68rem]"
      />
      <Image
        src="/images/timeline/Timeline-Vector.png"
        alt=""
        width={1137}
        height={999}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[26rem] top-[26rem] z-0 w-[42rem] max-w-none select-none md:hidden"
      />

      <div className="relative z-10 mx-auto max-w-[1064px] text-center">
        <p className="text-[11px] font-semibold text-[#8c929f]">
          Work Experience
        </p>
        <h2 className="mx-auto mt-1 max-w-2xl text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[34px]">
          A timeline of companies and roles that helped shape my skills.
        </h2>

        <div className="mt-10 grid gap-5 text-left md:grid-cols-2 md:gap-6">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${index}`}
              className={`flex overflow-hidden rounded-[8px] border border-[#e8edf3] bg-white shadow-[0_18px_45px_rgba(12,18,32,.08)] ${
                index % 2 === 1 ? "md:translate-y-12" : ""
              } flex-col`}
            >
              <Image
                src={item.image}
                alt={`${item.company} team collaboration`}
                width={552}
                height={285}
                className={`aspect-[552/285] w-full object-cover ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className={`p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[8px] text-white"
                    style={{ backgroundColor: item.accent }}
                  >
                    <BriefcaseBusiness className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#8c929f]">
                      {item.period}
                    </p>
                    <p
                      className="mt-1 text-sm font-extrabold"
                      style={{ color: item.accent }}
                    >
                      {item.company}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold text-[#171922]">
                      {item.role}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#606a78]">
                  Built responsive and high-performance web applications with
                  clean, maintainable code. I focus on translating UI/UX designs
                  into polished interfaces across platforms and workflows.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
