"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
      });
    },
    { scope: navRef }
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback((href: string) => {
    setMobileOpen(false);
    const lenis = (window as unknown as Record<string, unknown>).__lenis as
      | { scrollTo: (t: string | number, opts?: Record<string, unknown>) => void }
      | undefined;
    if (lenis) {
      if (href === "#") {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        lenis.scrollTo(href, { duration: 1.2 });
      }
    } else {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-[8px] border-b"
            : "bg-transparent border-b border-transparent"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(10, 10, 11, 0.8)",
                borderColor: "var(--border-subtle)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#");
            }}
            className="font-display text-[16px] tracking-wide text-text-primary hover:text-accent-gold transition-colors duration-300"
          >
            SAVAGE✰
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-mono text-[12px] uppercase tracking-[0.1em] transition-colors duration-300 ${
                    isActive
                      ? "text-accent-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-[16px] md:hidden flex flex-col items-center justify-center"
            style={{ background: "rgba(10, 10, 11, 0.95)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`font-mono text-xl uppercase tracking-[0.15em] min-h-[44px] transition-colors duration-300 ${
                      isActive
                        ? "text-accent-gold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
