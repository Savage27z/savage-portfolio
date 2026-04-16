"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
          if (ref.current) ref.current.style.display = "none";
        },
      });

      tl.from(".preloader-text", {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(".preloader-text", { opacity: 0, duration: 0.3, delay: 0.3 })
        .to(
          ref.current,
          { yPercent: -100, duration: 0.8, ease: "power3.inOut" },
          "-=0.1"
        );
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "var(--bg-primary)" }}
    >
      <span className="preloader-text font-display text-[clamp(32px,6vw,64px)] text-text-primary tracking-[-0.03em]">
        SAVAGE✰
      </span>
    </div>
  );
}
