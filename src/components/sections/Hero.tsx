"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ── H1 line definitions ──────────────────────────────────────────────────────
const H1_LINES = [
  { words: ["Comprendre", "votre"],          amber: false },
  { words: ["appareillage,"],                amber: false },
  { words: ["reprendre", "votre", "vie"],    amber: true  },
];

const MICRO_STATS = [
  { value: "65%",       label: "des patients mal informés" },
  { value: "53%",       label: "ont raté un renouvellement" },
  { value: "5 piliers", label: "thématiques couverts" },
];

// ── Framer Motion variants ───────────────────────────────────────────────────
const EASE_PHOTO: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const EASE_WORD:  [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Per-line containers: stagger 0.08s, with increasing delayChildren per line
// so the three H1 lines cascade visually: ~0.15s → ~0.47s → ~0.79s start
const lineContainers = [
  { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } },
  { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.47 } } },
  { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.79 } } },
];

const wordVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_WORD },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#F7F5F2" }}
      aria-labelledby="hero-heading"
    >
      {/* ── Grain texture (SVG inline, mix-blend-multiply) ────────────────── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.025] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* ── Left content — 52% wide, vertically centered ─────────────────── */}
      <div
        className="relative z-20 flex min-h-screen w-full flex-col justify-center
                   py-24 lg:w-[52%]"
        style={{ paddingLeft: "clamp(40px, 8vw, 120px)", paddingRight: "clamp(24px, 4vw, 64px)" }}
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
          className="mb-8 block font-mono text-[12px] uppercase tracking-widest"
          style={{ color: "#E8923A", letterSpacing: "0.14em" }}
        >
          Le guide de référence
        </motion.span>

        {/* H1 — word-by-word stagger ────────────────────────────────────── */}
        <h1
          id="hero-heading"
          className="mb-7 font-heading font-bold"
          style={{
            fontSize: "clamp(3rem, 5.5vw, 5rem)",
            lineHeight: 1.15,
            color: "#1b1c1a",
            overflow: "visible",
          }}
          aria-label="Comprendre votre appareillage, reprendre votre vie"
        >
          {H1_LINES.map((line, li) => (
            <motion.span
              key={li}
              className="block"
              style={{ overflow: "visible" }}
              variants={lineContainers[li]}
              initial="hidden"
              animate="visible"
              aria-hidden
            >
              {line.words.map((word, wi) => (
                /* Extra bottom padding lets descenders (g, y, p…) breathe;
                   negative margin cancels the added space so lines don't gap. */
                <span
                  key={wi}
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    paddingBottom: "0.2em",
                    marginBottom: "-0.2em",
                  }}
                >
                  <motion.span
                    variants={wordVariant}
                    style={{
                      display: "inline-block",
                      ...(line.amber
                        ? { color: "#E8923A", fontStyle: "italic" }
                        : {}),
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle ─────────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          className="mb-10 font-sans leading-relaxed"
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#41484d",
            maxWidth: "400px",
          }}
        >
          Le guide indépendant pour les patients appareillés et leurs proches.
          Expertise terrain, sources cliniques, données réelles.
        </motion.p>

        {/* CTAs ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/protheses"
            className="inline-flex items-center gap-2 rounded-button px-6 py-3
                       text-sm font-semibold transition-all duration-200
                       hover:brightness-95"
            style={{ background: "#E8923A", color: "#1b1c1a" }}
          >
            Découvrir les prothèses
            <ArrowRight size={14} aria-hidden />
          </Link>
          <Link
            href="/guide/remboursement"
            className="inline-flex items-center rounded-button border px-6 py-3
                       text-sm font-semibold transition-all duration-200
                       hover:bg-brand-teal/5"
            style={{
              borderColor: "#0B4F6C",
              color: "#0B4F6C",
              background: "transparent",
            }}
          >
            Guide remboursement LPPR
          </Link>
        </motion.div>

        {/* Micro-stats ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-start gap-6 border-t pt-8"
          style={{ borderColor: "#dbdad7" }}
        >
          {MICRO_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span
                className="font-mono font-semibold leading-none"
                style={{ fontSize: "18px", color: "#1b1c1a" }}
              >
                {stat.value}
              </span>
              <span
                className="font-sans leading-tight"
                style={{ fontSize: "12px", color: "#41484d" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right photo — absolute, desktop only ─────────────────────────── */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 top-0 hidden overflow-hidden lg:block"
        style={{ width: "48%" }}
      >
        {/* Cinematic scale-in on mount */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ delay: 0, duration: 1.4, ease: EASE_PHOTO }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src="https://i.imgur.com/mmcfZpX.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
            sizes="48vw"
          />
        </motion.div>

        {/* Left-edge gradient — blends photo into ivory left column */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            right: "auto",
            width: "55%",
            background:
              "linear-gradient(to right, #F7F5F2 0%, #F7F5F2 8%, transparent 45%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
