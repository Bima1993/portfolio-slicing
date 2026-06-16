"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const portfolioSlides = [
  {
    title: "Portfolio 1",
    foreground: "/images/projects/Portfolio-Image-1.png",
    background: "/images/projects/Portfolio-Image-2.png",
  },
  {
    title: "Portfolio 2",
    foreground: "/images/projects/Portfolio-Image-2.png",
    background: "/images/projects/Portfolio-Image-3.png",
  },
  {
    title: "Portfolio 3",
    foreground: "/images/projects/Portfolio-Image-3.png",
    background: "/images/projects/Portfolio-Image-1.png",
  },
];

export function AboutPortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeSlide = portfolioSlides[activeIndex];

  function showSlide(step: number) {
    setDirection(step);
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + step + portfolioSlides.length) %
        portfolioSlides.length,
    );
  }

  function selectSlide(nextIndex: number) {
    if (nextIndex === activeIndex) {
      return;
    }

    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  }

  return (
    <article className="overflow-hidden rounded-[8px] bg-[#080717] p-6 text-white shadow-[0_18px_45px_rgba(8,7,23,.18)] sm:p-8 lg:h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold leading-tight">
            Check My Portfolio
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/72 sm:text-base">
            Explore selected works and real-world projects
          </p>
        </div>

        <button
          type="button"
          aria-label="Next portfolio preview"
          onClick={() => showSlide(1)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/4 text-white transition hover:bg-white/12"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative mt-8 h-[20rem] overflow-hidden rounded-[8px] bg-[linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.72)_42%,rgba(118,53,230,.92)_100%)] sm:h-[24rem] lg:h-[20rem]">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={activeSlide.title}
            custom={direction}
            initial={{ opacity: 0, x: direction * 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -36 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute inset-0"
            aria-live="polite"
          >
            <Image
              src={activeSlide.background}
              alt=""
              width={373}
              height={373}
              aria-hidden="true"
              className="absolute -right-8 top-0 h-[82%] w-[72%] rounded-[6px] object-contain opacity-[0.86]"
            />
            <Image
              src={activeSlide.foreground}
              alt={`${activeSlide.title} project preview`}
              width={373}
              height={373}
              className="absolute bottom-0 left-5 h-[86%] w-[73%] rounded-[6px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,.24)] sm:left-8"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous portfolio preview"
            onClick={() => showSlide(-1)}
            className="grid size-8 place-items-center rounded-full border border-white/18 bg-[#080717]/80 text-white backdrop-blur-sm transition hover:bg-[#2f8cff]"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next portfolio preview"
            onClick={() => showSlide(1)}
            className="grid size-8 place-items-center rounded-full border border-white/18 bg-[#080717]/80 text-white backdrop-blur-sm transition hover:bg-[#2f8cff]"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {portfolioSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show ${slide.title}`}
            aria-current={index === activeIndex}
            onClick={() => selectSlide(index)}
            className={`h-2 rounded-full transition ${
              index === activeIndex ? "w-6 bg-[#2f8cff]" : "w-2 bg-white/24"
            }`}
          />
        ))}
      </div>
    </article>
  );
}
