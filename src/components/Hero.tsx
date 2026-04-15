"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-300">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.132V3.198S18.28 0 11.914 0zM8.708 1.85a1.06 1.06 0 110 2.12 1.06 1.06 0 010-2.12z" />
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.402-3.35 3.402H9.451s-3.24-.052-3.24 3.132v5.33S5.72 24 12.086 24zm3.206-1.85a1.06 1.06 0 110-2.12 1.06 1.06 0 010 2.12z" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-300">
      <path d="M0 12v12h24V0H0v12zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 00.102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38 1.023-1.325 1.716-2.655 1.95-.41.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141l.89-.513.69-.4.145.212c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 00.313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 01-.659-1.2c-.091-.364-.114-1.28-.042-1.644.236-1.191 1.12-2.022 2.417-2.273.422-.082 1.399-.05 1.834.06v.003zM11.119 12.11l.007 1.11H7.534v9.78H5.382v-9.78H1.79v-1.085c0-.604.017-1.11.039-1.128.016-.018 2.11-.03 4.646-.027l4.613.011.03 1.12z" />
    </svg>
  );
}

function SolanaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-300">
      <path d="M4.172 18.31a.79.79 0 01.557-.231h18.49a.395.395 0 01.279.675l-3.717 3.715a.79.79 0 01-.558.231H.733a.395.395 0 01-.279-.675l3.718-3.715zM4.172 1.3A.804.804 0 014.73 1.07h18.49a.395.395 0 01.279.675L19.78 5.46a.79.79 0 01-.558.231H.733a.395.395 0 01-.279-.675L4.172 1.3zm15.609 8.607a.79.79 0 00-.558-.231H.733a.395.395 0 00-.279.675l3.718 3.715a.79.79 0 00.557.231h18.49a.395.395 0 00.279-.675l-3.717-3.715z" />
    </svg>
  );
}

function RustIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-300">
      <path d="M23.835 11.703a1.18 1.18 0 00-.357-.123l-.088-.027c-.032-.134-.073-.266-.12-.396l.06-.078a1.18 1.18 0 00.154-.355 1.2 1.2 0 00-.635-1.293l-.057-.035a5.4 5.4 0 00-.233-.347l.03-.09a1.18 1.18 0 00.019-.377 1.2 1.2 0 00-.906-1.115l-.067-.022a6 6 0 00-.316-.28l-.003-.093a1.18 1.18 0 00-.118-.37 1.2 1.2 0 00-1.129-.868l-.07-.007a7 7 0 00-.381-.195l-.036-.089a1.18 1.18 0 00-.252-.342 1.2 1.2 0 00-1.291-.264l-.068.012a7 7 0 00-.424-.098l-.065-.08a1.18 1.18 0 00-.37-.291A1.2 1.2 0 0016.3 5.19l-.063.03a7 7 0 00-.445.005l-.086-.065a1.18 1.18 0 00-.464-.22 1.2 1.2 0 00-1.32.414l-.05.046a7 7 0 00-.438.108l-.101-.043a1.18 1.18 0 00-.525-.125 1.2 1.2 0 00-1.143.74l-.033.058a7 7 0 00-.404.21l-.108-.017a1.18 1.18 0 00-.548-.015 1.2 1.2 0 00-.907.992l-.014.065c-.12.09-.238.184-.35.283l-.108.009a1.18 1.18 0 00-.53.106 1.2 1.2 0 00-.63 1.176l.006.067a7 7 0 00-.277.342l-.1.037a1.18 1.18 0 00-.468.226 1.2 1.2 0 00-.328 1.286l.025.063c-.068.128-.131.258-.188.392l-.085.06a1.18 1.18 0 00-.367.338 1.2 1.2 0 00-.013 1.328l.042.054c-.04.14-.073.28-.1.424l-.066.08a1.18 1.18 0 00-.233.427 1.2 1.2 0 00.293 1.29l.054.04a5 5 0 00-.005.445l-.043.094a1.18 1.18 0 00-.078.48 1.2 1.2 0 00.576 1.173l.062.024c.033.145.072.287.117.427l-.017.103a1.18 1.18 0 00.08.47 1.2 1.2 0 00.822.975l.065.008a7 7 0 00.235.385l.01.105a1.18 1.18 0 00.23.43 1.2 1.2 0 00 1.027.7l.064-.008a7 7 0 00.339.322l.037.1a1.18 1.18 0 00.364.365 1.2 1.2 0 001.18.345l.058-.024c.127.086.258.166.392.24l.06.088a1.18 1.18 0 00.473.274 1.2 1.2 0 001.255-.071l.049-.038c.142.054.286.102.433.143l.08.07a1.18 1.18 0 00.55.16 1.2 1.2 0 001.243-.396l.036-.05c.147.017.295.027.444.03l.093.047a1.18 1.18 0 00.587.029 1.2 1.2 0 001.14-.7l.02-.06a7 7 0 00.427-.086l.098.02a1.18 1.18 0 00.578-.107 1.2 1.2 0 00.955-.943l.004-.063c.13-.058.256-.12.38-.186l.096-.009a1.18 1.18 0 00.524-.237 1.2 1.2 0 00.705-1.116l-.013-.063c.11-.094.214-.193.314-.296l.087-.035a1.18 1.18 0 00.428-.355 1.2 1.2 0 00.407-1.215l-.029-.058a7 7 0 00.23-.385l.072-.058a1.18 1.18 0 00.295-.449 1.2 1.2 0 00.076-1.234l-.042-.049c.058-.14.11-.282.156-.428l.053-.077a1.18 1.18 0 00.133-.51 1.2 1.2 0 00-.27-1.169zM12 19.81a7.81 7.81 0 110-15.62 7.81 7.81 0 010 15.62z" />
    </svg>
  );
}

const heroWords = ["Hello"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-32 lg:py-0">
        <div className="order-2 lg:order-1">
          <div className="mb-4">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-text-secondary"
          >
            — It&apos;s SAVAGE✰. Developer &amp; Builder.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="text-base text-text-muted mt-1"
          >
            Python. TypeScript. Solana. Rust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex gap-12 mt-10"
          >
            <div>
              <div className="text-5xl font-bold text-text-primary">
                <CountUp target={10} />+
              </div>
              <p className="text-sm text-text-muted mt-1">Projects Shipped</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-text-primary">
                <CountUp target={5} />+
              </div>
              <p className="text-sm text-text-muted mt-1">Languages</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
            className="flex gap-4 mt-8"
          >
            {[PythonIcon, TypeScriptIcon, SolanaIcon, RustIcon].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center"
                >
                  <Icon />
                </div>
              )
            )}
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-2 border-zinc-800/50 -top-4 -left-4"
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/10 border border-zinc-800 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-violet-400 select-none">
                S✰
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
