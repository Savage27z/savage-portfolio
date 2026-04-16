"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const phrases = [
  "I build bots.",
  "I ship relentlessly.",
  "The market doesn't wait.",
];

function VegvisirSVG() {
  return (
    <svg
      viewBox="0 0 800 800"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
      style={{ opacity: 0.06 }}
      fill="none"
      stroke="var(--accent-gold-dim)"
      strokeWidth="1.5"
    >
      <circle cx="400" cy="400" r="350" />
      <circle cx="400" cy="400" r="300" />
      <circle cx="400" cy="400" r="250" />
      <circle cx="400" cy="400" r="120" />
      <circle cx="400" cy="400" r="60" />
      <line x1="400" y1="50" x2="400" y2="750" />
      <line x1="50" y1="400" x2="750" y2="400" />
      <line x1="153" y1="153" x2="647" y2="647" />
      <line x1="647" y1="153" x2="153" y2="647" />
      <line x1="400" y1="50" x2="340" y2="150" />
      <line x1="400" y1="50" x2="460" y2="150" />
      <line x1="400" y1="750" x2="340" y2="650" />
      <line x1="400" y1="750" x2="460" y2="650" />
      <line x1="50" y1="400" x2="150" y2="340" />
      <line x1="50" y1="400" x2="150" y2="460" />
      <line x1="750" y1="400" x2="650" y2="340" />
      <line x1="750" y1="400" x2="650" y2="460" />
      <line x1="153" y1="153" x2="210" y2="230" />
      <line x1="153" y1="153" x2="230" y2="210" />
      <line x1="647" y1="647" x2="590" y2="570" />
      <line x1="647" y1="647" x2="570" y2="590" />
      <line x1="647" y1="153" x2="570" y2="210" />
      <line x1="647" y1="153" x2="590" y2="230" />
      <line x1="153" y1="647" x2="230" y2="590" />
      <line x1="153" y1="647" x2="210" y2="570" />
      <path d="M 400 150 A 250 250 0 0 1 575 225" />
      <path d="M 575 225 A 250 250 0 0 1 650 400" />
      <path d="M 650 400 A 250 250 0 0 1 575 575" />
      <path d="M 575 575 A 250 250 0 0 1 400 650" />
      <path d="M 400 650 A 250 250 0 0 1 225 575" />
      <path d="M 225 575 A 250 250 0 0 1 150 400" />
      <path d="M 150 400 A 250 250 0 0 1 225 225" />
      <path d="M 225 225 A 250 250 0 0 1 400 150" />
      <circle cx="400" cy="100" r="8" />
      <circle cx="400" cy="700" r="8" />
      <circle cx="100" cy="400" r="8" />
      <circle cx="700" cy="400" r="8" />
      <circle cx="188" cy="188" r="6" />
      <circle cx="612" cy="188" r="6" />
      <circle cx="188" cy="612" r="6" />
      <circle cx="612" cy="612" r="6" />
    </svg>
  );
}

export default function Hero({ animate = false }: { animate?: boolean }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      if (!animate) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-label", { opacity: 0, y: 16, duration: 0.6 })
        .from(
          ".hero-char",
          { y: "100%", opacity: 0, stagger: 0.04, duration: 0.6 },
          "-=0.3"
        )
        .from(
          ".hero-tagline",
          { opacity: 0, y: 16, duration: 0.6 },
          "-=0.2"
        )
        .from(
          ".hero-phrase",
          { opacity: 0, y: 16, duration: 0.6 },
          "-=0.2"
        )
        .from(
          ".hero-ctas",
          { opacity: 0, y: 16, duration: 0.6 },
          "-=0.2"
        )
        .from(
          ".hero-scroll",
          { opacity: 0, duration: 0.8 },
          "-=0.1"
        );
    },
    { scope: heroRef, dependencies: [animate] }
  );

  const initialStyle = animate
    ? {}
    : { opacity: 0 as number };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <ParticleField />
      <VegvisirSVG />

      <div
        ref={heroRef}
        className="relative z-10 max-w-4xl mx-auto text-center py-32"
      >
        <p
          className="hero-label font-mono text-[15px] text-text-secondary mb-4"
          style={initialStyle}
        >
          — It&apos;s
        </p>

        <h1
          className="font-display font-bold text-text-primary tracking-[-0.03em] overflow-hidden"
          style={{ fontSize: "clamp(64px, 10vw, 120px)" }}
        >
          {"SAVAGE\u2729".split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span
                className="hero-char inline-block"
                style={{
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  ...initialStyle,
                }}
              >
                {char}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="hero-tagline font-mono text-[18px] md:text-[20px] text-text-secondary mt-2"
          style={initialStyle}
        >
          Developer &amp; Builder
        </p>

        <div
          className="hero-phrase h-[32px] mt-6 flex items-center justify-center"
          style={initialStyle}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={phraseIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[15px] text-accent-gold-dim"
            >
              {phrases[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div
          className="hero-ctas flex items-center justify-center gap-6 mt-10"
          style={initialStyle}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (
                window as unknown as Record<string, unknown>
              ).__lenis as { scrollTo: (t: string) => void } | undefined;
              if (lenis) lenis.scrollTo("#projects");
              else
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden border font-mono text-[13px] uppercase tracking-wide px-6 py-3 transition-colors duration-250"
            style={{
              borderColor: "var(--accent-gold)",
              color: "var(--accent-gold)",
            }}
          >
            <span
              className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250"
              style={{ background: "var(--accent-gold)" }}
            />
            <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-250">
              View Projects →
            </span>
          </a>
          <a
            href="https://github.com/Savage27z"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-text-secondary hover:text-accent-gold transition-colors duration-300"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-scroll mt-20 flex flex-col items-center gap-2" style={initialStyle}>
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-[40px]"
            style={{ background: "var(--accent-gold-dim)" }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}
