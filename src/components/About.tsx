"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <ScrollReveal>
              <div className="bg-surface border border-border rounded-xl p-8 aspect-square flex flex-col items-center justify-center">
                <span className="text-7xl font-bold text-violet-400 select-none">
                  S✰
                </span>
                <p className="text-xl font-semibold text-text-primary mt-4">
                  SAVAGE✰
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-3 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">
                  Overview
                </span>
                <h3 className="text-xl font-semibold text-text-primary mt-2">
                  What I Do
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-3">
                  I build tools that move fast and execute precisely — trading
                  bots, DeFi scanners, NFT snipers, and whatever automation the
                  crypto space demands. Python and TypeScript by day, Rust and
                  Solana by night. I ship relentlessly because the market
                  doesn&apos;t wait.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <span className="absolute top-6 right-6 bg-violet-500/20 text-violet-400 text-xs px-3 py-1 rounded-full">
                  Full-Stack
                </span>
                <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">
                  Technical Arsenal
                </span>
                <h3 className="text-xl font-semibold text-text-primary mt-2">
                  The Stack
                </h3>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <span className="text-xs font-mono text-violet-400">
                      LANGUAGES
                    </span>
                    <p className="text-sm text-text-secondary mt-1">
                      Python, TypeScript, Rust, JavaScript
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-accent-secondary">
                      BLOCKCHAIN &amp; TOOLS
                    </span>
                    <p className="text-sm text-text-secondary mt-1">
                      Solana, Web3.js, Anchor, DeFi Protocols
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-violet-400">
                      FRAMEWORKS
                    </span>
                    <p className="text-sm text-text-secondary mt-1">
                      Next.js, React, Tailwind CSS, Framer Motion
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-accent-secondary">
                      INFRASTRUCTURE
                    </span>
                    <p className="text-sm text-text-secondary mt-1">
                      Vercel, Docker, GitHub Actions, PostgreSQL, Redis
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
