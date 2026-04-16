"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

function SplitText({
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

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set(".projects-label", { opacity: 0, y: 20 });
      gsap.set(".project-card", { opacity: 0, y: 40, scale: 0.95 });

      gsap.to(".projects-label", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-label",
          start: "top 85%",
        },
      });

      gsap.to(".project-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <p className="projects-label font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary mb-4">
            {"// 01 — PROJECTS"}
          </p>
          <SplitText
            text="WHAT I BUILD"
            className="font-display text-[32px] md:text-[48px] uppercase text-accent-gold"
          />
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--bg-secondary)",
                borderTop: "1px solid var(--accent-gold-dim)",
                borderLeft: "1px solid var(--border-subtle)",
                borderRight: "1px solid var(--border-subtle)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
              whileHover={{
                borderTopColor: "rgba(201, 168, 76, 0.6)",
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-[20px] text-text-primary">
                    {project.title}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:text-accent-gold transition-all duration-200 mt-1 flex-shrink-0 ml-3"
                  />
                </div>
                <p className="font-mono text-[14px] text-text-secondary mt-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5">
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary px-3 py-1 rounded-full"
                    style={{ border: "1px solid var(--border-subtle)" }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
