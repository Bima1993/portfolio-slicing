"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-full items-center justify-between px-4 sm:px-6 md:max-w-7xl lg:h-20 lg:px-8"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold text-white"
          aria-label="Edwin home"
        >
          <Image
            src="/images/brand/Edwin-Avatar-Logo.png"
            alt=""
            width={40}
            height={40}
            className="size-8 rounded-full lg:size-10"
            priority
          />
          <span className="text-[13px] lg:text-lg">Edwin</span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-white/68 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          className="hidden h-11 min-w-40 rounded-full bg-white px-8 text-sm font-semibold text-[#080717] hover:bg-white/90 md:inline-flex"
        >
          <a href="#contact">Hire Me</a>
        </Button>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="mobile-menu-trigger"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-white px-4 py-5 text-[#151821] md:hidden"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 32 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-xl font-semibold"
              >
                <Image
                  src="/images/brand/Edwin-Avatar-Logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <span>Edwin</span>
              </a>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-full text-[#11131a] transition hover:bg-black/5"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-8 text-base font-medium">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors hover:text-[#2f8cff]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button
              asChild
              className="mt-9 h-12 w-full rounded-full bg-[#2f8cff] text-base font-semibold text-white hover:bg-[#1677ee]"
            >
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Hire Me
              </a>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
