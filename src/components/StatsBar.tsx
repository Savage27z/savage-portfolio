"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 3, suffix: "+", label: "Projects" },
  { value: 4, suffix: "", label: "Languages" },
  { value: 6, suffix: "+", label: "Tools" },
  { status: true, label: "Status" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set(".stat-item", { opacity: 0, y: 30 });

      gsap.to(".stat-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      sectionRef.current.querySelectorAll<HTMLSpanElement>(".counter-num").forEach((el) => {
        const target = parseInt(el.dataset.target || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val));
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item flex flex-col items-center text-center ${
                i > 0 ? "md:border-l" : ""
              }`}
              style={
                i > 0 ? { borderColor: "var(--accent-gold-dim)" } : undefined
              }
            >
              {stat.status ? (
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse-gold"
                    style={{ background: "var(--accent-gold)" }}
                  />
                  <span
                    className="font-display text-[36px] md:text-[56px] leading-none"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    AVAILABLE
                  </span>
                </div>
              ) : (
                <span
                  className="font-display text-[36px] md:text-[56px] leading-none"
                  style={{ color: "var(--accent-gold)" }}
                >
                  <span className="counter-num" data-target={stat.value}>
                    0
                  </span>
                  {stat.suffix}
                </span>
              )}
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
