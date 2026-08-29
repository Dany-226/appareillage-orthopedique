"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { motionVariants, shadows, viewport } from "@/components/ui/design-tokens";
import { getArticlesByPilier } from "@/lib/articles";

export default function RelatedArticles({ pilier }: { pilier: string }) {
  const articles = getArticlesByPilier(pilier);
  if (articles.length === 0) return null;

  return (
    <section
      className="section-padding bg-brand-light"
      aria-labelledby="related-articles-heading"
    >
      <div className="container-editorial px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="mb-10"
        >
          <motion.span
            variants={motionVariants.fadeUp}
            className="label-mono text-brand-amber block mb-3"
          >
            Pour aller plus loin
          </motion.span>
          <motion.h2
            variants={motionVariants.fadeUp}
            id="related-articles-heading"
            className="font-display text-display-lg font-normal text-brand-dark"
          >
            Approfondir avec nos articles
          </motion.h2>
        </motion.div>

        {/* Article cards */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.div
              key={article.slug}
              variants={motionVariants.fadeUp}
              whileHover={{
                y: -4,
                boxShadow: shadows.cardHover,
                transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
              }}
              className="h-full"
            >
              <Link
                href={`/${article.pilier}/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card
                           p-8 shadow-card border border-border/60 focus-ring"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="label-mono text-brand-teal/60 text-[10px]">
                    Dossier complet
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={11} />
                    {article.readingTime}
                  </span>
                </div>

                <h3
                  className="font-display text-xl font-normal text-brand-dark leading-[1.25]
                             mb-4 group-hover:text-brand-teal transition-colors duration-300"
                >
                  {article.title}
                </h3>

                <p className="text-body-md text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-brand-teal font-medium text-sm">
                  Lire le dossier
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
