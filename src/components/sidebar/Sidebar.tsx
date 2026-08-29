"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TableOfContents from "./TableOfContents";
import type { TocHeading } from "@/lib/piliers";
import { motionVariants } from "@/components/ui/design-tokens";

export type SidebarExtraCard = {
  variant: "stumpr" | "aidant";
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
};

function ExtraCard({ card, delay }: { card: SidebarExtraCard; delay: number }) {
  const isStumpr = card.variant === "stumpr";

  return (
    <motion.div
      variants={motionVariants.fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={
        isStumpr
          ? "rounded-xl bg-brand-light p-5 shadow-card border-t-[3px] border-brand-amber"
          : "rounded-xl bg-brand-teal-light p-5 shadow-card border border-brand-teal/25"
      }
    >
      <Image
        src={isStumpr ? "/logo-stumpr.png" : "/logo-guide-aidant.png"}
        alt={isStumpr ? "Stumpr" : "Guide-Aidant"}
        width={130}
        height={isStumpr ? 41 : 64}
        className="h-auto w-[130px] mb-4"
      />
      <p className="text-sm font-semibold text-brand-dark mb-1.5 leading-snug">
        {card.title}
      </p>
      <p className="text-xs text-brand-dark/70 leading-relaxed mb-4">
        {card.subtitle}
      </p>
      <Button
        asChild
        size="sm"
        className={
          isStumpr
            ? "w-full bg-brand-dark hover:bg-brand-dark/90 text-white text-xs"
            : "w-full bg-brand-teal hover:bg-brand-teal-light text-white text-xs"
        }
      >
        <Link href={card.href} target="_blank" rel="noopener noreferrer">
          {card.buttonText} <ArrowRight size={12} />
        </Link>
      </Button>
    </motion.div>
  );
}

export default function Sidebar({
  headings,
  extraCards,
}: {
  headings: TocHeading[];
  extraCards?: SidebarExtraCard[];
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[88px] max-h-[calc(100vh-108px)] overflow-y-auto
                      space-y-6 pr-1 scrollbar-none"
           style={{ scrollbarWidth: "none" }}
      >
        {/* ── Table of contents */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-xl border border-border bg-card p-5 shadow-card"
        >
          <TableOfContents headings={headings} />
        </motion.div>

        {/* ── Guide remboursement card (amber) */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.12 }}
          className="rounded-xl bg-brand-amber p-5 text-white shadow-amber-glow/20 shadow-md"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center
                          rounded-lg bg-white/15">
            <BookOpen size={17} aria-hidden />
          </div>
          <p className="font-semibold text-sm leading-snug mb-1.5">
            Guide remboursement LPPR
          </p>
          <p className="text-xs text-white/75 leading-relaxed mb-4">
            Comprendre les codes, les tarifs et les démarches de prise en
            charge par l&rsquo;Assurance Maladie.
          </p>
          <Link
            href="/guides/remboursement-lppr"
            className="inline-flex items-center gap-1.5 text-xs font-semibold
                       text-white/90 hover:text-white transition-colors duration-150
                       focus-ring rounded"
          >
            Lire le guide <ArrowRight size={12} />
          </Link>
        </motion.div>

        {/* ── "Cet article vous a aidé ?" mini CTA */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.22 }}
          className="rounded-xl border border-border bg-card p-5 shadow-card"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center
                          rounded-lg bg-brand-teal-muted">
            <ThumbsUp size={16} className="text-brand-teal" aria-hidden />
          </div>
          <p className="text-sm font-semibold text-brand-dark mb-1.5 leading-snug">
            Cet article vous a aidé ?
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            Trouvez un professionnel agréé près de chez vous pour aller plus
            loin dans votre démarche.
          </p>
          <Button
            asChild
            size="sm"
            className="w-full bg-brand-teal hover:bg-brand-teal-light text-white text-xs"
          >
            <Link href="/trouver-praticien">Trouver un praticien</Link>
          </Button>
        </motion.div>

        {/* ── Extra promotional cards (Stumpr / guide-aidant) */}
        {extraCards?.map((card, i) => (
          <ExtraCard key={card.variant} card={card} delay={0.3 + i * 0.1} />
        ))}
      </div>
    </aside>
  );
}
