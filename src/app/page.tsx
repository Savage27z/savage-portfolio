"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div
        className="flex-1 h-px"
        style={{ background: "var(--border-subtle)" }}
      />
      <span className="px-4 text-accent-gold-dim text-sm">◆</span>
      <div
        className="flex-1 h-px"
        style={{ background: "var(--border-subtle)" }}
      />
    </div>
  );
}

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <SmoothScroll>
      <Preloader onComplete={() => setHeroReady(true)} />
      <main>
        <Navbar />
        <Hero animate={heroReady} />
        <SectionDivider />
        <StatsBar />
        <Marquee />
        <Projects />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
