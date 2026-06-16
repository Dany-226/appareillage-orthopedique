"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motionVariants, shadows, viewport } from "@/components/ui/design-tokens";

export default function FeaturedArticle() {
  return (
    <section
      className="section-padding bg-brand-light"
      aria-labelledby="featured-heading"
    >
      <div className="container-editorial px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <motion.span
              variants={motionVariants.fadeUp}
              className="label-mono text-brand-amber block mb-3"
            >
              À la une
            </motion.span>
            <motion.h2
              variants={motionVariants.fadeUp}
              id="featured-heading"
              className="font-display text-display-lg font-normal text-brand-dark"
            >
              Article en vedette
            </motion.h2>
          </div>
          <motion.div variants={motionVariants.fadeUp}>
            <Link
              href="/protheses"
              className="hidden sm:inline-flex items-center gap-2 text-sm
                         font-medium text-brand-teal hover:gap-3 transition-all
                         duration-200 focus-ring rounded"
            >
              Voir tous les articles <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Article card */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          whileHover={{ y: -4, boxShadow: shadows.cardHover, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } }}
        >
          <Link
            href="/protheses/hub-protheses-membres-inferieurs"
            className="group block overflow-hidden rounded-3xl bg-card shadow-card
                       border border-border/60 focus-ring"
          >
            <div className="grid lg:grid-cols-[0.9fr_1fr]">
              {/* Photo */}
              <div className="relative w-full h-full min-h-[420px] overflow-hidden">
                <Image
                  src="https://i.imgur.com/24HLk1q.png"
                  alt="Prothèse tibiale - patient en situation"
                  fill
                  className="object-cover object-center rounded-l-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Amber badge overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-brand-amber text-white border-0 label-mono text-[10px] px-2.5 py-1">
                    Prothèses
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-5">
                  <span className="label-mono text-brand-teal/60 text-[10px]">
                    Dossier complet
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={11} />
                    12 min de lecture
                  </span>
                </div>

                <h3
                  className="font-display text-display-lg font-normal text-brand-dark
                             leading-[1.15] mb-5 group-hover:text-brand-teal
                             transition-colors duration-300"
                  style={{ hyphens: "none", wordBreak: "keep-all", overflowWrap: "normal" }}
                >
                  Prothèses des membres inférieurs - tout comprendre pour bien choisir
                </h3>

                <p className="text-body-md text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                  Tibiale, fémorale, pied dynamique ou avec genou électronique
                  — ce hub rassemble tout ce qu&rsquo;un patient amputé et ses
                  proches doivent savoir avant, pendant et après l&rsquo;appareillage.
                  Codes LPPR, remboursement, entretien.
                </p>

                <div className="flex items-center gap-2 text-brand-teal font-medium text-sm">
                  Lire le dossier
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
