"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SplitHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const words = ref.current.querySelectorAll(".word-inner");
      gsap.from(words, {
        y: "100%",
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    },
    { scope: ref }
  );

  return (
    <h2 ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </h2>
  );
}

const socialLinks = [
  {
    href: "https://github.com/Savage27z",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
  {
    href: "https://x.com/savage27z",
    icon: <XIcon />,
    label: "Twitter/X",
  },
  {
    href: "mailto:savage27zzz@gmail.com",
    icon: <Mail size={18} />,
    label: "Email",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const targets = [".footer-sub", ".footer-cta", ".social-icon", ".footer-bottom"];
      gsap.set(targets, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".footer-sub", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          ".footer-cta",
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          ".social-icon",
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          ".footer-bottom",
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SplitHeading
            text="READY TO BUILD?"
            className="font-display text-[32px] md:text-[48px] uppercase text-text-primary"
          />
          <p className="footer-sub font-mono text-[12px] uppercase tracking-[0.15em] text-text-tertiary mt-4">
            {"// feel free to reach out for collaborations"}
          </p>

          <div className="footer-cta mt-10">
            <a
              href="mailto:savage27zzz@gmail.com"
              className="group relative inline-block overflow-hidden font-mono text-[13px] uppercase tracking-wide px-8 py-3 transition-colors duration-250"
              style={{
                border: "1px solid var(--accent-gold)",
                color: "var(--accent-gold)",
              }}
            >
              <span
                className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250"
                style={{ background: "var(--accent-gold)" }}
              />
              <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-250">
                REACH OUT →
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  s.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="social-icon w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:text-accent-gold transition-all duration-300"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="footer-bottom mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="font-mono text-[12px] text-text-tertiary">
            © 2025 SAVAGE✰ | Forged in code
          </p>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse-gold"
              style={{ background: "var(--accent-gold)" }}
            />
            <span className="font-mono text-[12px] text-text-tertiary">
              AVAILABLE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
