"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TableOfContents from "./TableOfContents";
import type { TocHeading } from "@/lib/piliers";
import { motionVariants } from "@/components/ui/design-tokens";

export default function Sidebar({ headings }: { headings: TocHeading[] }) {
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
            href="/guide/remboursement"
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
      </div>
    </aside>
  );
}
