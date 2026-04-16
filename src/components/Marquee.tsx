"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const inner = ref.current?.querySelector(".marquee-inner");
      if (!inner) return;
      gsap.to(inner, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none",
      });
    },
    { scope: ref }
  );

  const text =
    "BUILD RELENTLESSLY \u25C6 SHIP RUTHLESSLY \u25C6 THE MARKET DOESN\u2019T WAIT \u25C6 ";

  return (
    <div
      ref={ref}
      className="overflow-hidden py-8 border-y"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="marquee-inner whitespace-nowrap inline-flex">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-display text-[clamp(24px,4vw,48px)] uppercase tracking-wide text-text-tertiary mx-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
