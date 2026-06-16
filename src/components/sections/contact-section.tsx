"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

import { socialLinks } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";

type MessageStatus = "success" | "failed" | null;

const messagePopups = {
  failed: {
    image: "/images/contact/Failed-3d-envelope.png",
    title: "Message Failed to Send",
    description:
      "Sorry about that. Please check your connection and try again.",
    buttonLabel: "Try Again",
  },
  success: {
    image: "/images/contact/success-3d-envelope.png",
    title: "Got Your Message!",
    description: "Really appreciate you reaching out. I'll be in touch soon.",
    buttonLabel: "Back to Home",
  },
};

export function ContactSection() {
  const [messageStatus, setMessageStatus] = useState<MessageStatus>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!navigator.onLine) {
      setMessageStatus("failed");
      return;
    }

    event.currentTarget.reset();
    setMessageStatus("success");
  }

  function handlePopupAction() {
    setMessageStatus(null);

    if (messageStatus === "success") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const popup = messageStatus ? messagePopups[messageStatus] : null;

  return (
    <footer
      id="contact"
      className="bg-[#070b12] px-4 py-16 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-[1184px] gap-12 md:grid-cols-[.9fr_1fr] md:items-start">
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-3"
            aria-label="Edwin home"
          >
            <Image
              src="/images/brand/Edwin-Avatar-Logo.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full"
            />
            <span>
              <span className="block text-sm font-extrabold">
                Edwin Anderson
              </span>
              <span className="block text-xs font-medium text-white/52">
                edwinanderson@gmail.com
              </span>
            </span>
          </a>

          <h2 className="mt-24 max-w-sm text-[28px] font-extrabold leading-tight sm:text-4xl md:mt-32">
            Great results begin with clear ideas.
          </h2>

          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="grid size-8 place-items-center rounded-full bg-[#2f8cff] text-white transition hover:bg-[#1677ee]"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-white/52">Contact</p>
          <h2 className="mt-2 text-[26px] font-extrabold leading-tight sm:text-4xl">
            Start Your Next Project
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-5"
          >
            <label className="grid gap-2 text-sm font-semibold text-white/70">
              Name
              <input
                name="name"
                type="text"
                required
                placeholder="What's your full name..."
                className="h-12 rounded-none border-0 border-b border-white/12 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#2f8cff]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-white/70">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="Where can I reach you?..."
                className="h-12 rounded-none border-0 border-b border-white/12 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#2f8cff]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-white/70">
              Message
              <textarea
                name="message"
                required
                placeholder="Tell me about your project or goal..."
                rows={4}
                className="resize-none rounded-none border-0 border-b border-white/12 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#2f8cff]"
              />
            </label>

            <Button className="mt-2 h-11 rounded-full bg-[#2f8cff] text-sm font-semibold text-white hover:bg-[#1677ee]">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-[1184px] border-t border-white/8 pt-8 text-center text-xs text-white/32">
        &copy; 2025 Edwin Anderson. All rights reserved.
      </p>

      {popup ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/55 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="message-popup-title"
        >
          <div className="w-full max-w-[361px] overflow-hidden rounded-[16px] bg-white text-center text-[#151821] shadow-[0_24px_80px_rgba(0,0,0,.32)]">
            <div className="relative h-[201px] w-full">
              <Image
                src={popup.image}
                alt=""
                fill
                sizes="361px"
                className="object-cover"
                priority
              />
            </div>

            <div className="px-4 pb-7 pt-6">
              <h3
                id="message-popup-title"
                className="text-xl font-extrabold leading-tight"
              >
                {popup.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[314px] text-[15px] font-medium leading-7 text-[#3d4350]">
                {popup.description}
              </p>

              <Button
                type="button"
                onClick={handlePopupAction}
                className="mt-5 h-11 w-full rounded-full bg-[#2f8cff] text-sm font-semibold text-white hover:bg-[#1677ee]"
              >
                {popup.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
