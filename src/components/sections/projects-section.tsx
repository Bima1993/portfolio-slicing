import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio 1",
    image: "/images/projects/Portfolio-Image-1.png",
  },
  {
    title: "Portfolio 2",
    image: "/images/projects/Portfolio-Image-2.png",
  },
  {
    title: "Portfolio 3",
    image: "/images/projects/Portfolio-Image-3.png",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-white px-4 py-16 text-center sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[1184px]">
        <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-[#dce2ec] px-4 text-xs font-black text-[#6f7785]">
          Portfolio
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[34px]">
          Built with Passion, Shipped with Precision
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[8px] bg-[#f5f7fb] text-white shadow-[0_18px_45px_rgba(12,18,32,.1)]"
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={373}
                height={373}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-7 bottom-5 rounded-full bg-[#4c4a58]/72 px-6 py-3 text-center text-lg font-extrabold text-white backdrop-blur-sm">
                {project.title}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
