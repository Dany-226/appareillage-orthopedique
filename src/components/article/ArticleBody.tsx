"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ContentBlock } from "@/lib/piliers";
import type { ArticleBlock } from "@/lib/articles";
import type { PathologieBlock } from "@/lib/pathologies";
import StatCallout    from "./blocks/StatCallout";
import InfoBox        from "./blocks/InfoBox";
import ComparisonTable from "./blocks/ComparisonTable";
import FaqAccordion   from "./blocks/FaqAccordion";
import CtaBlock       from "./blocks/CtaBlock";
import { easing }     from "@/components/ui/design-tokens";

type AnyBlock = ContentBlock | ArticleBlock | PathologieBlock;

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easing.editorial } },
};

const viewportOpts = { once: true, margin: "-48px" } as const;

function Block({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
    >
      {children}
    </motion.div>
  );
}

// Safely read a field that exists under different names across the two type sets
function getText(block: AnyBlock): string {
  return ('content' in block ? (block as { content: string }).content : undefined)
    ?? ('text' in block ? (block as { text: string }).text : "");
}

export default function ArticleBody({ blocks }: { blocks: AnyBlock[] }) {
  return (
    <div className="mt-10">
      {blocks.map((block, i) => {
        switch (block.type) {

          // ── Paragraph
          case "paragraph":
            return (
              <Block key={i}>
                <p
                  className="mb-6 font-sans leading-[1.8] text-on-surface"
                  style={{ fontSize: "18px" }}
                >
                  {getText(block)}
                </p>
              </Block>
            );

          // ── H2 — amber left border, Fraunces
          case "h2":
            return (
              <Block key={i}>
                <h2
                  id={(block as { id?: string }).id}
                  className="mt-12 mb-4 pl-4 font-heading font-semibold
                             border-l-4 border-brand-amber leading-tight"
                  style={{ fontSize: "32px", color: "#00374e" }}
                >
                  {getText(block)}
                </h2>
              </Block>
            );

          // ── H3
          case "h3":
            return (
              <Block key={i}>
                <h3
                  className="mt-8 mb-3 font-sans font-semibold text-on-surface"
                  style={{ fontSize: "22px" }}
                >
                  {getText(block)}
                </h3>
              </Block>
            );

          // ── Stat (old ContentBlock format)
          case "stat": {
            const b = block as Extract<ContentBlock, { type: "stat" }>;
            return (
              <Block key={i}>
                <StatCallout value={b.value} label={b.label} source={b.source} />
              </Block>
            );
          }

          // ── Stat callout (new ArticleBlock format)
          case "stat_callout": {
            const b = block as Extract<ArticleBlock, { type: "stat_callout" }>;
            return (
              <Block key={i}>
                <StatCallout
                  value={b.percentage}
                  label={b.description}
                  source={b.source}
                />
              </Block>
            );
          }

          // ── Info (old ContentBlock format)
          case "info": {
            const b = block as Extract<ContentBlock, { type: "info" }>;
            return (
              <Block key={i}>
                <InfoBox title={b.title} text={b.text} />
              </Block>
            );
          }

          // ── Info box (new ArticleBlock format)
          case "info_box": {
            const b = block as Extract<ArticleBlock, { type: "info_box" }>;
            return (
              <Block key={i}>
                <InfoBox title={b.title} text={b.content} />
              </Block>
            );
          }

          // ── Table (old ContentBlock format)
          case "table": {
            const b = block as Extract<ContentBlock, { type: "table" }>;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                <ComparisonTable headers={b.headers} rows={b.rows} />
              </motion.div>
            );
          }

          // ── Comparison table (new ArticleBlock format)
          case "comparison_table": {
            const b = block as Extract<ArticleBlock, { type: "comparison_table" }>;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                <ComparisonTable headers={b.headers} rows={b.rows} />
              </motion.div>
            );
          }

          // ── FAQ (old ContentBlock format)
          case "faq": {
            const rawItems = (block as { items: Array<{ q?: string; a?: string; question?: string; answer?: string }> }).items;
            const items = rawItems.map(item => ({
              q: item.question ?? item.q ?? "",
              a: item.answer  ?? item.a  ?? "",
            }));
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                <FaqAccordion items={items} />
              </motion.div>
            );
          }

          // ── CTA (old ContentBlock format)
          case "cta": {
            const b = block as Extract<ContentBlock, { type: "cta" }>;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                <CtaBlock
                  headline={b.headline}
                  sub={b.sub}
                  btnLabel={b.btnLabel}
                  href={b.href}
                />
              </motion.div>
            );
          }

          // ── CTA block (new ArticleBlock format)
          case "cta_block": {
            const b = block as Extract<ArticleBlock, { type: "cta_block" }>;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                <CtaBlock
                  headline={b.title}
                  sub={b.subtitle}
                  btnLabel={b.buttonText}
                  href={b.buttonHref}
                />
              </motion.div>
            );
          }

          // ── Image (new ArticleBlock only)
          case "image": {
            const b = block as Extract<ArticleBlock, { type: "image" }>;
            return (
              <Block key={i}>
                <figure className="my-8 rounded-xl overflow-hidden">
                  <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  {b.caption && (
                    <figcaption
                      className="mt-2 text-center font-mono uppercase tracking-wide
                                 text-on-surface-variant"
                      style={{ fontSize: "12px" }}
                    >
                      {b.caption}
                    </figcaption>
                  )}
                </figure>
              </Block>
            );
          }

          // ── Device card (PathologieBlock)
          case "device_card": {
            const b = block as Extract<PathologieBlock, { type: "device_card" }>;
            return (
              <Block key={i}>
                <Link
                  href={b.href}
                  className="group my-3 flex items-start gap-4 rounded-lg border
                             border-surface-container-high bg-white p-5
                             hover:-translate-y-0.5 hover:shadow-card-hover
                             transition-all duration-200 focus-ring"
                >
                  <div className="flex-1">
                    <span
                      className="font-mono uppercase tracking-widest text-brand-amber block mb-1"
                      style={{ fontSize: "10px" }}
                    >
                      {b.pilier}
                    </span>
                    <span
                      className="font-heading font-semibold text-stitch-primary
                                 group-hover:text-brand-amber transition-colors block mb-1"
                      style={{ fontSize: "15px" }}
                    >
                      {b.title}
                    </span>
                    <span
                      className="font-sans text-on-surface-variant"
                      style={{ fontSize: "13px" }}
                    >
                      {b.description}
                    </span>
                  </div>
                </Link>
              </Block>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
