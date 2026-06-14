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
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#041d35_0%,#071044_42%,#10061f_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent_0%,rgba(22,139,255,.34)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[760px] w-full max-w-full content-start gap-7 px-4 pb-20 pt-24 sm:px-6 md:min-h-[820px] md:max-w-7xl md:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] md:content-center md:items-center md:gap-10 md:px-8 md:pb-28 md:pt-28 lg:min-h-[900px] lg:gap-14">
        <motion.div
          className="w-full min-w-0 max-w-xl pb-0 md:pb-10"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h1 className="max-w-[361px] text-[39px] font-black leading-[1.02] tracking-normal text-white sm:max-w-xl sm:text-[56px] md:text-[72px] lg:text-[86px]">
            <span className="mb-1 inline-block bg-[#f7a51b] px-1.5 text-[#080717]">
              Crafting
            </span>
            <span className="block">Interfaces, One</span>
            <span className="block">Line at a Time</span>
          </h1>

          <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/72 sm:max-w-md sm:text-base md:mt-7">
            Build fast, accessible, and responsive web experiences that users
            love.
          </p>

          <Button
            asChild
            className="mt-7 h-11 w-full max-w-[361px] rounded-full bg-white text-sm font-semibold text-[#080717] shadow-[0_18px_45px_rgba(0,0,0,.22)] hover:bg-white/90 sm:w-52 md:mt-10"
          >
            <a href="#contact">Say Hello</a>
          </Button>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[330px] justify-center sm:max-w-[430px] md:max-w-none"
          initial={false}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/hero/Hero-Image.png"
            alt="Smiling developer character wearing a blue cap"
            width={760}
            height={760}
            priority
            className="h-auto w-full max-w-[330px] select-none object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:max-w-[430px] md:max-w-[560px] lg:max-w-[640px]"
          />
        </motion.div>
      </div>

      <div className="absolute -bottom-16 left-1/2 z-20 h-28 w-[150%] -translate-x-1/2 rounded-[50%_50%_0_0] bg-white md:-bottom-20 md:h-40" />
    </section>
  );
}
