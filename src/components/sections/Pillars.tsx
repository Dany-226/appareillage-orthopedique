"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { motionVariants, viewport } from "@/components/ui/design-tokens";

const pillars = [
  {
    num:  "01",
    title: "Orthèses",
    description:
      "Dispositifs de soutien, correction et protection. Orthèses de cheville, de genou, rachidiennes, de main.",
    href: "/ortheses",
  },
  {
    num:  "02",
    title: "Prothèses",
    description:
      "Membres artificiels fonctionnels. Des prothèses tibiales aux bras bioniques, comprendre les options.",
    href: "/protheses",
  },
  {
    num:  "03",
    title: "Fauteuils roulants",
    description:
      "Manuel ou électrique, actif ou de confort : choisir, ajuster et entretenir son fauteuil.",
    href: "/fauteuils",
  },
  {
    num:  "04",
    title: "Aides techniques",
    description:
      "Cannes, déambulateurs, lève-personnes, aides à la préhension — le panorama complet.",
    href: "/aides-techniques",
  },
  {
    num:  "05",
    title: "Positionnement",
    description:
      "Coussins anti-escarre, systèmes de maintien postural, assises sur mesure.",
    href: "/positionnement",
  },
];

const cardVariant = {
  hidden:   { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Pillars() {
  return (
    <section
      className="py-32 bg-background"
      aria-labelledby="pillars-heading"
    >
      <div className="container-editorial px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="mb-14"
        >
          <motion.span
            variants={motionVariants.fadeUp}
            className="label-mono text-brand-teal block mb-4"
          >
            5 piliers éditoriaux
          </motion.span>
          <motion.h2
            variants={motionVariants.fadeUp}
            id="pillars-heading"
            className="font-heading text-display-xl font-bold max-w-xl"
            style={{ color: "#1b1c1a" }}
          >
            Tout l&rsquo;appareillage orthopédique expliqué
          </motion.h2>
        </motion.div>

        {/* Uniform 3-col grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
    >
      <Link
        href={pillar.href}
        className="group relative flex h-full min-h-[240px] flex-col overflow-hidden
                   rounded-card border bg-white p-8
                   shadow-card transition-shadow duration-200
                   hover:shadow-card-hover focus-ring"
        style={{ borderColor: "#eae8e5" }}
      >
        {/* Decorative number — top-right, Fraunces, very subtle */}
        <span
          aria-hidden
          className="absolute right-6 top-4 select-none font-heading font-bold leading-none"
          style={{ fontSize: "48px", color: "#E1F0F7" }}
        >
          {pillar.num}
        </span>

        {/* Card content */}
        <div className="relative z-10 flex flex-1 flex-col">
          <h3
            className="mb-3 font-heading font-semibold leading-snug"
            style={{ fontSize: "22px", color: "#00374e" }}
          >
            {pillar.title}
          </h3>

          <p
            className="mb-6 flex-1 font-sans leading-relaxed"
            style={{ fontSize: "15px", color: "#41484d" }}
          >
            {pillar.description}
          </p>

          <span
            className="font-mono uppercase tracking-wide transition-colors duration-200
                       group-hover:text-brand-amber"
            style={{ fontSize: "13px", color: "#E8923A" }}
          >
            Explorer →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
