"use client";

import { Home, FolderKanban, User, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const dirLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "About", href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
];

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
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <ScrollReveal className="md:col-span-3">
            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <span className="font-mono text-lg tracking-wider text-text-primary">
                SAVAGE✰
              </span>
              <p className="font-mono text-xs tracking-wider text-text-muted uppercase mt-3">
                {"//"} FEEL FREE TO REACH OUT FOR COLLABORATIONS
              </p>
              <div className="flex gap-3 mt-6">
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
                    className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-300"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="md:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">
                Directory
              </span>
              <nav className="mt-4 space-y-3">
                {dirLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleScroll(link.href)}
                      className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 w-full text-left"
                    >
                      <Icon size={16} />
                      {link.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted font-mono">
              &copy; 2025 SAVAGE✰ | Built with obsession
            </p>
            <div className="bg-surface border border-border rounded-full px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-green animate-pulse-green" />
              <span className="text-xs font-mono text-text-muted">
                STATUS: AVAILABLE
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
