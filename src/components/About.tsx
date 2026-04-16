"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  {
    label: "LANGUAGES",
    color: "var(--accent-gold)",
    items: "Python, TypeScript, Rust, JavaScript",
  },
  {
    label: "BLOCKCHAIN & TOOLS",
    color: "var(--accent-ice)",
    items: "Solana, Web3.js, Anchor, DeFi Protocols",
  },
  {
    label: "FRAMEWORKS",
    color: "var(--accent-gold)",
    items: "Next.js, React, Tailwind CSS, Framer Motion",
  },
  {
    label: "INFRASTRUCTURE",
    color: "var(--accent-ice)",
    items: "Vercel, Docker, GitHub Actions, PostgreSQL, Redis",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set(".about-label", { opacity: 0, y: 20 });
      gsap.set(".bio-line", { opacity: 0, y: 30 });
      gsap.set(".avatar-card", { opacity: 0, scale: 0.95 });
      gsap.set(".stack-item", { opacity: 0, x: 30 });

      gsap.to(".about-label", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-label",
          start: "top 85%",
        },
      });

      gsap.to(".bio-line", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".bio-line"),
          start: "top 85%",
        },
      });

      gsap.to(".avatar-card", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".avatar-card",
          start: "top 85%",
        },
      });

      gsap.to(".stack-item", {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".stack-item"),
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="about-label font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary mb-12">
          {"// 02 — ABOUT"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-6">
              <p
                className="bio-line font-mono text-[18px] leading-[1.8]"
                style={{ color: "var(--text-primary)" }}
              >
                I don&apos;t manage infrastructure. I build weapons.
              </p>
              <p
                className="bio-line font-mono text-[15px] leading-[1.8]"
                style={{ color: "var(--text-secondary)" }}
              >
                Python and TypeScript by day, Rust and Solana by night.
                <br />
                The bots run. The market moves. I ship.
              </p>
              <p
                className="bio-line font-mono text-[15px] leading-[1.8]"
                style={{ color: "var(--text-secondary)" }}
              >
                Crypto doesn&apos;t sleep. Neither does the code.
              </p>
            </div>

            <div
              className="avatar-card rounded-xl overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/avatar.jpg"
                  alt="SAVAGE✰"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-display text-text-primary text-[18px]">
                  SAVAGE✰
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-0">
              {stack.map((category, i) => (
                <div
                  key={category.label}
                  className={`stack-item py-5 ${i > 0 ? "border-t" : ""}`}
                  style={
                    i > 0
                      ? { borderColor: "var(--border-subtle)" }
                      : undefined
                  }
                >
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.15em]"
                    style={{ color: category.color }}
                  >
                    {category.label}
                  </span>
                  <p className="font-mono text-[14px] text-text-secondary mt-2">
                    {category.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
