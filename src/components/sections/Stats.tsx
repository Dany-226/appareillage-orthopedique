"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { motionVariants, viewport } from "@/components/ui/design-tokens";

const stats = [
  {
    target: 65,
    suffix: "%",
    label:
      "des patients ignorent leur droit au renouvellement autonome",
  },
  {
    target: 53,
    suffix: "%",
    label: "ont raté au moins un renouvellement",
  },
  {
    target: 77,
    suffix: "%",
    label: "sans connaissance opérationnelle de leurs droits",
  },
];

function StatItem({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, count } = useCountUp(target, 2200);

  return (
    <motion.div
      variants={motionVariants.fadeUp}
      className="flex flex-col items-center text-center px-4 sm:px-8 lg:px-12
                 py-2 group"
    >
      <div className="flex items-end gap-0.5 mb-4">
        <span
          ref={ref}
          className="font-heading text-[5rem] sm:text-[6rem] leading-none
                     font-normal tracking-[-0.04em]"
          style={{ color: "white" }}
        >
          {count}
        </span>
        <span
          className="font-heading text-[3rem] leading-none pb-3 font-normal"
          style={{ color: "#E8923A" }}
        >
          {suffix}
        </span>
      </div>

      <p
        className="text-sm leading-relaxed max-w-[220px]"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        {label}
      </p>

      <p
        className="mt-4 font-mono text-[10px] uppercase tracking-widest"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        Enquête patients appareillés — 2026
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      className="bg-brand-dark overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-amber/40 to-transparent" />

      <div className="container-editorial section-padding px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="text-center mb-16"
        >
          <span
            className="font-mono text-[11px] uppercase tracking-widest block mb-4"
            style={{ color: "#E8923A" }}
          >
            Données terrain
          </span>
          <h2
            id="stats-heading"
            className="font-heading text-display-lg font-normal max-w-2xl mx-auto"
            style={{ color: "white" }}
          >
            Ce que vivent réellement les patients appareillés
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewport.once, margin: viewport.marginMedium }}
          className="grid gap-0 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x
                     divide-white/10"
        >
          {stats.map((stat) => (
            <StatItem key={stat.target} {...stat} />
          ))}
        </motion.div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />
    </section>
  );
}
