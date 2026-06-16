"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Lim",
    role: "Product Manager at Layerspace",
    avatar: "/images/testimonials/Testimonial-Avatar-1.png",
    quote:
      "Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.",
  },
  {
    name: "Brandon Cole",
    role: "Founder at Northbyte",
    avatar: "/images/testimonials/Testimonial-Avatar-2.jpg",
    quote:
      "The final website matched our design direction beautifully and felt polished on every screen size. Communication was clear from start to finish.",
  },
  {
    name: "Nina Patel",
    role: "Design Lead at Flowkit",
    avatar: "/images/testimonials/Testimonial-Avatar-3.jpg",
    quote:
      "He translated our Figma file with impressive attention to spacing, motion, and responsive detail. The result felt production-ready.",
  },
  {
    name: "Marcus Hale",
    role: "CEO at Pixelbridge",
    avatar: "/images/testimonials/Testimonial-Avatar-4.jpg",
    quote:
      "Edwin brought structure, speed, and taste to the project. The frontend is easier to maintain and the user experience feels sharper.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeTestimonial = testimonials[activeIndex];

  function showTestimonial(step: number) {
    setDirection(step);
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + step + testimonials.length) % testimonials.length,
    );
  }

  return (
    <section className="relative z-10 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1184px]">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="mx-auto flex h-7 w-fit items-center justify-center rounded-full border border-[#dce2ec] px-4 text-xs font-black text-[#6f7785] md:mx-0">
              Testimony
            </p>
            <h2 className="mx-auto mt-5 max-w-[19rem] text-[28px] font-extrabold leading-[1.28] text-[#171922] sm:max-w-none sm:text-3xl md:mx-0 md:whitespace-nowrap md:text-[34px]">
              Built with Trust &amp; Collaboration
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => showTestimonial(-1)}
              className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => showTestimonial(1)}
              className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative mt-9 overflow-hidden">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.article
              key={activeTestimonial.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mx-auto max-w-[42rem] rounded-[8px] border border-[#e8edf3] bg-white p-6 text-center shadow-[0_18px_45px_rgba(12,18,32,.07)] sm:p-8"
              aria-live="polite"
            >
              <Image
                src={activeTestimonial.avatar}
                alt={`${activeTestimonial.name} avatar`}
                width={80}
                height={80}
                className="mx-auto size-20 rounded-full object-cover"
              />
              <div className="mt-6 flex justify-center gap-1 text-[#fff45d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mx-auto mt-6 max-w-[35rem] text-base font-semibold leading-8 text-[#171922]">
                &quot;{activeTestimonial.quote}&quot;
              </blockquote>
              <div className="mt-8">
                <p className="text-base font-extrabold text-[#171922]">
                  &mdash; {activeTestimonial.name}
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-[#7b8491]">
                  {activeTestimonial.role}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => showTestimonial(-1)}
            className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => showTestimonial(1)}
            className="grid size-8 place-items-center rounded-full border border-[#dfe5ee] text-[#7b8491] transition hover:border-[#2f8cff] hover:text-[#2f8cff]"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
