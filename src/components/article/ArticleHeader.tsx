"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/articles";
import { easing } from "@/components/ui/design-tokens";

// ── Shared animation ──────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: easing.editorial },
});

// ── Hub format (backward compat) ─────────────────────────────────────────────
type HubAuthor = { name: string; title: string; updatedAt: string };

type HubProps = {
  category: string;
  readingTime: number;
  h1: string;
  author: HubAuthor;
  article?: never;
};

// ── Long-tail article format ──────────────────────────────────────────────────
type ArticleProps = {
  article: Article;
  category?: never;
  readingTime?: never;
  h1?: never;
  author?: never;
};

type Props = HubProps | ArticleProps;

// ── Avatar initials ───────────────────────────────────────────────────────────
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="h-11 w-11 flex-none rounded-full bg-brand-teal-light
                 flex items-center justify-center text-brand-teal
                 font-semibold text-sm select-none"
      aria-hidden
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {initials}
    </div>
  );
}

// ── Article format header ─────────────────────────────────────────────────────
function ArticleFormatHeader({ article }: { article: Article }) {
  const author = article.author ?? {
    name: "Jean-Marc Tissier",
    title: "Expert appareillage — 15 ans chez Össur France",
  };

  const updatedLabel = new Date(article.updatedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="mb-10">
      {/* Badge + reading time */}
      <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
        <Badge
          className="bg-brand-amber text-white border-0 px-3 py-1
                     font-mono text-[11px] uppercase tracking-widest"
        >
          {article.badge}
        </Badge>
        <span
          className="flex items-center gap-1.5 text-muted-foreground"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          <Clock size={12} aria-hidden />
          {article.readingTime} de lecture
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        {...fadeUp(0.1)}
        className="font-heading font-semibold text-on-surface leading-[1.12]
                   tracking-tight mb-6"
        style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
      >
        {article.title}
      </motion.h1>

      {/* Excerpt */}
      <motion.p
        {...fadeUp(0.18)}
        className="font-sans text-on-surface-variant leading-[1.75]
                   italic mb-8"
        style={{ fontSize: "20px" }}
      >
        {article.excerpt}
      </motion.p>

      {/* Author byline */}
      <motion.div
        {...fadeUp(0.25)}
        className="flex items-center gap-4 pb-8 border-b"
        style={{ borderColor: "#eae8e5" }}
      >
        <Avatar name={author.name} />
        <div>
          <p
            className="font-semibold leading-tight"
            style={{ fontSize: "14px", color: "#1b1c1a" }}
          >
            Par {author.name}
          </p>
          <p
            className="mt-0.5 leading-snug"
            style={{ fontSize: "13px", color: "#41484d" }}
          >
            {author.title}
          </p>
        </div>
        <p
          className="ml-auto hidden sm:block text-right"
          style={{ fontSize: "12px", color: "#41484d", fontFamily: "var(--font-mono)" }}
        >
          Mis à jour le {updatedLabel}
        </p>
      </motion.div>

      {/* Hero image (if provided) */}
      {article.heroImage && (
        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 relative w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: "16 / 9" }}
        >
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </motion.div>
      )}
    </header>
  );
}

// ── Hub format header (original, preserved) ───────────────────────────────────
function HubFormatHeader({ category, readingTime, h1, author }: HubProps) {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <Badge
          className="bg-brand-amber text-white border-0 px-3 py-1
                     font-mono text-[11px] uppercase tracking-widest"
        >
          {category}
        </Badge>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock size={13} aria-hidden />
          {readingTime} min de lecture
        </span>
      </div>

      <h1
        className="font-display font-normal text-brand-dark leading-[1.08]
                   tracking-[-0.03em] mb-8"
        style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
      >
        {h1}
      </h1>

      <div className="flex items-center gap-4 pb-8 border-b border-border">
        <div
          className="h-11 w-11 flex-none rounded-full bg-brand-teal-light
                     flex items-center justify-center text-brand-teal
                     font-semibold text-sm select-none"
          aria-hidden
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {author.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-text leading-tight">
            Par {author.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
            {author.title}
          </p>
        </div>
        <div className="ml-auto hidden sm:block">
          <p className="text-xs text-muted-foreground text-right">{author.updatedAt}</p>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div
        className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br
                   from-brand-teal-light to-brand-teal/15
                   flex items-center justify-center"
        style={{ aspectRatio: "16 / 9" }}
        role="img"
        aria-label={`Image illustrative — ${category}`}
      >
        <div className="flex flex-col items-center gap-3 text-brand-teal/40">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <p className="font-mono text-xs text-brand-teal/40 uppercase tracking-widest">
            [Photo article {category}]
          </p>
        </div>
      </div>
    </header>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function ArticleHeader(props: Props) {
  if (props.article) {
    return <ArticleFormatHeader article={props.article} />;
  }
  return <HubFormatHeader {...(props as HubProps)} />;
}
