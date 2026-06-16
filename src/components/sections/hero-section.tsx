"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#06071f] text-white"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(72% 52% at 0% 66%, rgba(0, 234, 255, .92) 0%, rgba(5, 101, 220, .58) 36%, transparent 68%), radial-gradient(70% 54% at 100% 68%, rgba(112, 101, 184, .76) 0%, rgba(49, 38, 104, .62) 38%, transparent 72%), linear-gradient(180deg, #0d0a2f 0%, #0c0b36 20%, #08156d 40%, #0d2db3 58%, #26aaf0 80%, #bdd9fb 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-[34rem] top-[19rem] z-0 h-[66rem] w-[66rem] rounded-full bg-[rgba(0,234,255,.9)] opacity-85 blur-[300px] md:-left-[40rem] md:top-36 md:h-[82rem] md:w-[82rem] md:opacity-100 md:blur-[320px]" />
      <div className="pointer-events-none absolute -right-72 top-40 z-0 h-[42rem] w-[42rem] rounded-full bg-[#4d3589] opacity-70 blur-[130px] md:-right-80 md:top-52 md:h-[54rem] md:w-[54rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[35rem] bg-[linear-gradient(180deg,transparent_0%,rgba(0,234,255,.22)_50%,rgba(186,218,255,.78)_100%)]" />
      <Image
        src="/images/hero/top-pattern.svg"
        alt=""
        width={1440}
        height={405}
        priority
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[45%] w-full select-none object-cover object-top opacity-26 md:h-[46%] md:opacity-46"
      />
      <Image
        src="/images/hero/bottom-pattern.svg"
        alt=""
        width={1440}
        height={405}
        priority
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[55%] w-full select-none object-cover object-bottom opacity-36 md:h-[58%] md:opacity-48"
      />

      <div className="relative z-10 mx-auto grid min-h-[760px] w-full max-w-full content-between gap-7 px-4 pb-0 pt-24 sm:px-6 md:min-h-[980px] md:max-w-[1184px] md:grid-cols-[minmax(0,0.92fr)_minmax(560px,1fr)] md:content-stretch md:items-stretch md:gap-4 md:px-0 md:pt-28 lg:min-h-[1024px]">
        <motion.div
          className="w-full min-w-0 max-w-[640px] pb-0 md:self-center md:pb-12"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h1 className="max-w-[361px] text-[35px] font-black leading-[1.08] tracking-normal text-white sm:max-w-xl sm:text-[56px] md:max-w-[640px] md:text-[64px] md:leading-[1.06] lg:text-[64px]">
            <span className="mb-1 inline-block bg-[#f7a51b] px-1.5 text-[#080717]">
              Crafting
            </span>
            <span> Interfaces,</span>
            <span className="block">One Line at a Time</span>
          </h1>

          <p className="mt-5 max-w-[335px] text-base font-medium leading-7 text-white/84 sm:max-w-[540px] md:mt-9 md:text-xl md:leading-9">
            Build fast, accessible, and responsive web experiences that users
            love.
          </p>

          <Button
            asChild
            className="mt-7 h-11 w-full max-w-[361px] rounded-full bg-white text-sm font-semibold text-[#080717] shadow-[0_18px_45px_rgba(0,0,0,.22)] hover:bg-white/90 sm:w-52 md:mt-14 md:h-11 md:w-[300px] md:max-w-none md:text-base"
          >
            <a href="#contact">Say Hello</a>
          </Button>
        </motion.div>

        <div className="relative mx-auto flex w-full max-w-[330px] self-end justify-center sm:max-w-[430px] md:mx-0 md:max-w-none md:self-end md:justify-end">
          <Image
            src="/images/hero/Hero-Image.png"
            alt="Smiling developer character wearing a blue cap"
            width={760}
            height={760}
            priority
            className="h-auto w-full max-w-[330px] select-none object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:max-w-[430px] md:w-[740px] md:max-w-none lg:w-[760px]"
          />
        </div>
      </div>

      <div className="absolute -bottom-16 left-1/2 z-20 h-28 w-[150%] -translate-x-1/2 rounded-[50%_50%_0_0] bg-white md:-bottom-24 md:h-32" />
    </section>
  );
}
