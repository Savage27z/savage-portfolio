"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderKanban, User, Mail, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

const iconMap = {
  home: Home,
  folder: FolderKanban,
  user: User,
  mail: Mail,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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

  const handleLinkClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-lg tracking-wider text-text-primary hover:text-accent transition-colors duration-300"
          >
            SAVAGE✰
          </a>

          <div className="hidden md:flex items-center bg-surface border border-border rounded-full p-1 gap-1">
            {navLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-violet-500/20 text-violet-400"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex">
            <a
              href="mailto:savage27zzz@gmail.com"
              className="bg-surface border border-border rounded-full p-1 flex items-center justify-center"
            >
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-violet-400 transition-colors duration-300">
                <Mail size={18} />
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#09090B]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                const isActive = activeSection === link.href;
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`flex items-center gap-4 min-h-[44px] transition-colors duration-300 ${
                      isActive
                        ? "text-violet-400"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <Icon size={22} />
                    <span className="font-mono text-xl tracking-widest uppercase">
                      {link.label}
                    </span>
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
