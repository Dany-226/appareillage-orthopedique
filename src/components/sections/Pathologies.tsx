"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { motionVariants, viewport } from "@/components/ui/design-tokens";

const pathologies = [
  { label: "Amputation",          slug: "amputation",          featured: true  },
  { label: "AVC",                 slug: "avc",                 featured: false },
  { label: "SEP",                 slug: "sep",                 featured: false },
  { label: "Arthrose",            slug: "arthrose",            featured: false },
  { label: "Lésion médullaire",   slug: "lesion-medullaire",   featured: true  },
  { label: "Paralysie cérébrale", slug: "paralysie-cerebrale", featured: false },
];

export default function Pathologies() {
  return (
    <section
      className="section-padding-sm bg-background border-y border-border/60"
      aria-labelledby="pathologies-heading"
    >
      <div className="container-editorial px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginSmall }}
          className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <motion.span
              variants={motionVariants.fadeUp}
              className="label-mono text-brand-teal block mb-3"
            >
              Navigation par pathologie
            </motion.span>
            <motion.h2
              variants={motionVariants.fadeUp}
              id="pathologies-heading"
              className="font-display text-display-md font-normal text-brand-dark"
            >
              Par pathologie
            </motion.h2>
          </div>
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-sm text-muted-foreground max-w-xs leading-relaxed"
          >
            Trouvez les dispositifs adaptés à votre situation clinique.
          </motion.p>
        </motion.div>

        {/* Horizontal scroll chips */}
        <motion.div
          variants={motionVariants.fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginSmall }}
          className="relative"
        >
          {/* Fade-out gradient right edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16
                       bg-gradient-to-l from-background to-transparent z-10"
          />

          <div
            className="flex gap-3 overflow-x-auto pb-2 pr-16 scrollbar-none
                       -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
            role="list"
            aria-label="Pathologies"
            style={{ scrollbarWidth: "none" }}
          >
            {pathologies.map((p) => (
              <Link
                key={p.slug}
                href={`/pathologie/${p.slug}`}
                role="listitem"
                className={`flex-none inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                            border text-sm font-medium whitespace-nowrap transition-all duration-200
                            focus-ring
                            ${
                              p.featured
                                ? "bg-brand-teal text-white border-brand-teal hover:bg-brand-teal-light"
                                : "bg-card text-brand-text/70 border-border hover:border-brand-teal/40 hover:text-brand-teal hover:bg-brand-teal-muted/50"
                            }`}
              >
                {p.label}
                <ChevronRight size={12} className="opacity-50" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Dot navigation hint */}
        <p className="mt-5 text-xs text-muted-foreground/60 sm:hidden">
          Glissez pour voir plus →
        </p>
      </div>
    </section>
  );
}
