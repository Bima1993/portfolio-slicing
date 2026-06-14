import Image from "next/image";

const skills = [
  {
    name: "HTML",
    logo: "/images/brand/HTML-Logo.svg",
    color: "#f36b38",
  },
  {
    name: "CSS",
    logo: "/images/brand/Css-Logo.svg",
    color: "#2f8cff",
  },
  {
    name: "Javascript",
    logo: "/images/brand/JS-Logo.svg",
    color: "#f6c537",
  },
  {
    name: "React JS",
    logo: "/images/brand/React-Logo.svg",
    color: "#58c9f5",
  },
  {
    name: "Mongo DB",
    logo: "/images/brand/MongoDB-logo.svg",
    color: "#50b85d",
  },
  {
    name: "Docker",
    logo: "/images/brand/Docker-Logo.svg",
    color: "#2496ed",
  },
  {
    name: "Express JS",
    logo: "/images/brand/ExpressJs-Logo.svg",
    color: "#222222",
  },
  {
    name: "PostgreSQL",
    logo: "/images/brand/Postgresql-Logo.svg",
    color: "#396c9c",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#2f8cff] px-4 py-16 text-center text-white sm:px-6 md:py-24"
    >
      <div className="absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-[1184px]">
        <p className="text-[11px] font-semibold text-white/70">Skills</p>
        <h2 className="mx-auto mt-1 max-w-md text-[22px] font-extrabold leading-tight sm:text-3xl md:text-[34px]">
          Skills That Build Great Interfaces
        </h2>

        <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="flex min-h-44 flex-col items-center justify-center rounded-[8px] bg-white p-5 text-[#171922] shadow-[0_18px_45px_rgba(2,42,88,.13)]"
            >
              <div
                className="grid size-16 place-items-center rounded-full"
                style={{
                  background: `conic-gradient(${skill.color} 0deg 324deg, #eef3f8 324deg 360deg)`,
                }}
              >
                <div className="grid size-12 place-items-center rounded-full bg-white text-sm font-extrabold">
                  90%
                </div>
              </div>

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
