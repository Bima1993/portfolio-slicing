import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Lim",
    role: "Product Manager at Layerspace",
    avatar: "/images/testimonials/Testimonial-Avatar-1.png",
  },
  {
    name: "Brandon Cole",
    role: "Founder at Northbyte",
    avatar: "/images/testimonials/Testimonial-Avatar-2.jpg",
  },
  {
    name: "Nina Patel",
    role: "Design Lead at Flowkit",
    avatar: "/images/testimonials/Testimonial-Avatar-3.jpg",
  },
  {
    name: "Marcus Hale",
    role: "CEO at Pixelbridge",
    avatar: "/images/testimonials/Testimonial-Avatar-4.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1184px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold text-[#8c929f]">
              Testimony
            </p>
            <h2 className="mt-1 max-w-lg text-[22px] font-extrabold leading-tight text-[#171922] sm:text-3xl md:text-[34px]">
              Built with Trust &amp; Collaboration
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-9 flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="min-w-[18.5rem] snap-start rounded-[8px] border border-[#e8edf3] bg-white p-6 shadow-[0_18px_45px_rgba(12,18,32,.07)] md:min-w-0 md:flex-1"
            >
              <Image
                src={item.avatar}
                alt={`${item.name} avatar`}
                width={80}
                height={80}
                className="size-14 rounded-full object-cover"
              />
              <div className="mt-5 flex gap-1 text-[#f8b743]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm font-semibold leading-7 text-[#171922]">
                &quot;Edwin delivered beyond expectations. The interface feels
                built with care, flows well, and our users finally talk about
                the product instead of the confusing parts.&quot;
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-extrabold text-[#171922]">
                  {item.name}
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-[#7b8491]">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
