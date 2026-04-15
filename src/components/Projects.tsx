"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Scan } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/constants";

const iconMap = {
  bot: Bot,
  zap: Zap,
  scan: Scan,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-text-primary">My Top </span>
              <span className="text-accent">Projects</span>
            </h2>
            <p className="text-text-secondary text-base mt-4 max-w-xl mx-auto">
              Building tools for crypto, DeFi, and the future of Web3.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={project.title} delay={0.1 + i * 0.1}>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                  whileHover={{ scale: 1.01 }}
                >
                  <div
                    className={`h-[200px] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <Icon size={48} className="text-white/20" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <span className="border border-zinc-700 rounded-full px-3 py-1 text-xs font-mono text-zinc-400">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
