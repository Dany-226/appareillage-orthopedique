"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, BarChart3 } from "lucide-react";
import { motionVariants, viewport } from "@/components/ui/design-tokens";

const pillars = [
  {
    icon: Award,
    eyebrow: "Expertise terrain",
    title: "15 ans d'expérience Össur",
    body: "Notre équipe éditoriale réunit d'anciens appareilleurs et conseils de patients ayant travaillé avec les principaux fabricants européens. Chaque contenu est relu par un professionnel de santé.",
    stat: "15",
    statLabel: "ans d'expérience cumulée",
  },
  {
    icon: BookOpen,
    eyebrow: "Sources cliniques",
    title: "Fondé sur HAS & SOFMER",
    body: "Nos recommandations s'appuient sur les référentiels de la Haute Autorité de Santé, de la SOFMER et des guides de bonne pratique disponibles pour chaque dispositif médical.",
    stat: "HAS",
    statLabel: "& SOFMER, sources primaires",
  },
  {
    icon: BarChart3,
    eyebrow: "Données terrain",
    title: "Données issues de Stumpr",
    body: "Les statistiques publiées sur ce site proviennent d'enquêtes quantitatives menées auprès de patients appareillés en France. Méthodologie disponible sur demande.",
    stat: "2026",
    statLabel: "enquête nationale patients",
  },
];

export default function Trust() {
  return (
    <section
      className="section-padding bg-brand-light"
      aria-labelledby="trust-heading"
    >
      <div className="container-editorial px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="mb-16 max-w-2xl"
        >
          <motion.span
            variants={motionVariants.fadeUp}
            className="label-mono text-brand-teal block mb-4"
          >
            Transparence éditoriale — E-E-A-T
          </motion.span>
          <motion.h2
            variants={motionVariants.fadeUp}
            id="trust-heading"
            className="font-display text-display-xl font-normal text-brand-dark"
          >
            Pourquoi nous faire confiance&nbsp;?
          </motion.h2>
        </motion.div>

        {/* 3 columns */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="grid gap-8 sm:grid-cols-3"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={motionVariants.fadeUp}
                className="flex flex-col"
              >
                {/* Icon */}
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center
                             rounded-2xl bg-brand-teal/10"
                >
                  <Icon size={22} className="text-brand-teal" strokeWidth={1.5} />
                </div>

                {/* Eyebrow */}
                <span className="label-mono text-brand-amber text-[10px] mb-3 block">
                  {pillar.eyebrow}
                </span>

                {/* Title */}
                <h3 className="font-display text-display-md font-normal text-brand-dark mb-4">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {pillar.body}
                </p>

                {/* Stat chip */}
                <div className="inline-flex items-baseline gap-2 border-t border-border pt-5">
                  <span className="font-mono text-2xl font-medium text-brand-teal">
                    {pillar.stat}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {pillar.statLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
