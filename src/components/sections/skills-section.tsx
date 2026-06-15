import Image from "next/image";

const skills = [
  {
    name: "HTML",
    logo: "/images/brand/HTML-Logo.svg",
  },
  {
    name: "CSS",
    logo: "/images/brand/Css-Logo.svg",
  },
  {
    name: "Javascript",
    logo: "/images/brand/JS-Logo.svg",
  },
  {
    name: "React JS",
    logo: "/images/brand/React-Logo.svg",
  },
  {
    name: "Mongo DB",
    logo: "/images/brand/MongoDB-logo.svg",
  },
  {
    name: "Docker",
    logo: "/images/brand/Docker-Logo.svg",
  },
  {
    name: "Express JS",
    logo: "/images/brand/ExpressJs-Logo.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/images/brand/Postgresql-Logo.svg",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#2f8cff] px-4 py-16 text-center text-white sm:px-6 md:py-24"
    >
      <Image
        src="/images/skills/skill-grid-vector.svg"
        alt=""
        width={1440}
        height={405}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[42%] w-full select-none object-cover object-bottom opacity-70"
      />
      <div className="relative mx-auto max-w-[1184px]">
        <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-white/55 px-4 text-xs font-semibold text-white/82">
          Skillset
        </p>
        <h2 className="mx-auto mt-3 max-w-full text-[20px] font-extrabold leading-tight text-white sm:text-3xl md:whitespace-nowrap md:text-[38px]">
          Skills That Build Great Interfaces
        </h2>

        <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="flex min-h-44 flex-col items-center justify-center rounded-[8px] bg-white p-5 text-[#171922] shadow-[0_18px_45px_rgba(2,42,88,.13)]"
            >
              <Image
                src="/images/skills/radial-progress.svg"
                alt="90 percent proficiency"
                width={114}
                height={113}
                className="h-[72px] w-[73px] select-none object-contain"
              />

              <div className="mt-5 flex min-w-0 items-center justify-center gap-2">
                <Image
                  src={skill.logo}
                  alt=""
                  width={18}
                  height={18}
                  className="size-4 object-contain"
                />
                <h3 className="truncate text-sm font-bold">{skill.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
