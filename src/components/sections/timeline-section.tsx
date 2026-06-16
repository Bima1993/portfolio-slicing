import { CalendarDays } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Adobe",
    logo: "/images/brand/Adobe-Svg-Logo.svg",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-1.png",
    imagePosition: "left",
  },
  {
    company: "Dribbble",
    logo: "/images/brand/Dribble-Svg-Logo.svg",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-2.png",
    imagePosition: "right",
  },
  {
    company: "Dropbox",
    logo: "/images/brand/Drop-Box-Svg-Logo.svg",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-3.png",
    imagePosition: "left",
  },
  {
    company: "PayPal",
    logo: "/images/brand/Paypal-Svg-Logo.svg",
    role: "Frontend Developer",
    period: "2025 - Present",
    image: "/images/timeline/Timeline-4.png",
    imagePosition: "right",
  },
] as const;

function ExperienceImage({
  company,
  image,
}: {
  company: string;
  image: string;
}) {
  return (
    <Image
      src={image}
      alt={`${company} team collaboration`}
      width={552}
      height={285}
      className="aspect-[552/285] w-full rounded-[8px] object-cover shadow-[0_18px_45px_rgba(12,18,32,.07)]"
    />
  );
}

function ExperienceCard({
  company,
  logo,
  period,
  role,
}: {
  company: string;
  logo: string;
  period: string;
  role: string;
}) {
  return (
    <article className="flex min-h-[17.8125rem] flex-col justify-center rounded-[8px] border border-[#e8edf3] bg-white p-6 text-left shadow-[0_18px_45px_rgba(12,18,32,.08)] sm:p-8">
      <div className="flex items-center gap-2 text-sm font-extrabold text-[#171922]">
        <CalendarDays className="size-4 fill-[#2f8cff]/20 text-[#2f8cff]" />
        <span>{period}</span>
      </div>
      <Image
        src={logo}
        alt={`${company} logo`}
        width={97}
        height={35}
        className="mt-4 h-8 w-[7.25rem] object-contain object-left"
      />
      <h3 className="mt-4 text-2xl font-extrabold text-[#171922]">{role}</h3>
      <p className="mt-4 text-sm leading-7 text-[#202430]">
        Builds responsive and high-performance web applications with clean,
        maintainable code. Expert in translating UI/UX designs into
        pixel-perfect interfaces using modern frameworks. Focused on optimizing
        performance, accessibility, and seamless user experiences
      </p>
    </article>
  );
}

export function TimelineSection() {
  return (
    <section className="relative z-10 px-4 py-16 sm:px-6 md:py-24">
      <div className="relative mx-auto max-w-[1064px] text-center">
        <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-[#dce2ec] px-4 text-xs font-black text-[#6f7785]">
          Work Experience
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[34px]">
          A timeline of companies and roles that helped shape my skills.
        </h2>

        <div className="relative mt-10 grid gap-8 md:mt-14 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#d9dee7] md:block"
          />
          {experiences.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              className="relative grid gap-5 md:grid-cols-2 md:items-center md:gap-x-20"
            >
              <span
                aria-hidden="true"
                className={`absolute left-1/2 top-1/2 z-20 hidden size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-[7px] md:block ${
                  index === 0
                    ? "border-[#d7eaff] bg-[#2f8cff]"
                    : "border-[#e3e6eb] bg-[#a7adb6]"
                }`}
              />

              {item.imagePosition === "left" ? (
                <>
                  <ExperienceImage company={item.company} image={item.image} />
                  <ExperienceCard {...item} />
                </>
              ) : (
                <>
                  <div className="md:order-2">
                    <ExperienceImage company={item.company} image={item.image} />
                  </div>
                  <div className="md:order-1">
                    <ExperienceCard {...item} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
