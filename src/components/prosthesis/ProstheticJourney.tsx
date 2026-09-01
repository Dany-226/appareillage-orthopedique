"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Zone = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  glow: "amber" | "teal";
  image: string;
};

const zones: Zone[] = [
  {
    id: "emboiture",
    eyebrow: "01 — Le point de départ",
    title: "L'emboîture",
    body: "L'interface entre le moignon et le reste de la prothèse. Contact ou suspension, résines stratifiées ou composite carbone — le premier choix, et le plus déterminant pour le confort quotidien.",
    href: "/protheses/prothese-femorale-emboiture",
    glow: "amber",
    image: "https://i.imgur.com/eNgsm2u.png",
  },
  {
    id: "manchon",
    eyebrow: "02 — La liaison",
    title: "Manchon et accroche",
    body: "Silicone, copolymère ou polyuréthane : le choix suit une vraie logique clinique, pas une préférence esthétique — moignon court, flasque, fragile ou oedémateux commandent des solutions différentes.",
    href: "/protheses/manchon-accroche",
    glow: "amber",
    image: "https://i.imgur.com/4bcuGg0.png",
  },
  {
    id: "genou",
    eyebrow: "03 — L'articulation",
    title: "Le genou",
    body: "Mécanique ou à microprocesseur : chaque modèle a son propre protocole d'attribution, testé et chiffré — vitesse de marche, périmètre, descente d'escaliers. Rien n'est laissé au hasard.",
    href: "/protheses/prothese-femorale-choisir-son-genou",
    glow: "teal",
    image: "https://i.imgur.com/cPqvCdB.png",
  },
  {
    id: "pied",
    eyebrow: "04 — Le contact au sol",
    title: "Le pied prothétique",
    body: "Classe I, II ou III : la restitution d'énergie s'ajuste au niveau d'activité réel du patient, pas à une promesse marketing.",
    href: "/protheses/pied-prothetique",
    glow: "teal",
    image: "https://i.imgur.com/VmO2fBd.png",
  },
];

const FADE = 0.15; // largeur de la zone de fondu, en fraction d'une tranche

function zoneOpacityFn(index: number) {
  return (sectionProgress: number) => {
    const start = index;
    const end = index + 1;
    if (sectionProgress <= start - FADE) return 0;
    if (sectionProgress <= start) return (sectionProgress - (start - FADE)) / FADE;
    if (sectionProgress <= end) return 1;
    if (sectionProgress <= end + FADE) return 1 - (sectionProgress - end) / FADE;
    return 0;
  };
}

export function ProstheticJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const amberOpacity = useTransform(scrollYProgress, [0, 0.15, 0.55], [0.5, 0.3, 0.05]);
  const tealOpacity = useTransform(scrollYProgress, [0.45, 0.75, 1], [0.05, 0.3, 0.5]);

  // Progression continue de 0 (haut) à 4 (bas), une unité par zone.
  const sectionProgress = useTransform(scrollYProgress, (p) => p * zones.length);

  const opacity0 = useTransform(sectionProgress, zoneOpacityFn(0));
  const opacity1 = useTransform(sectionProgress, zoneOpacityFn(1));
  const opacity2 = useTransform(sectionProgress, zoneOpacityFn(2));
  const opacity3 = useTransform(sectionProgress, zoneOpacityFn(3));
  const panelOpacities = [opacity0, opacity1, opacity2, opacity3];

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-brand-dark">
        {zones.map((zone, i) => (
          <motion.div
            key={`backdrop-${zone.id}`}
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              opacity: panelOpacities[i],
              backgroundImage: `linear-gradient(to right, transparent 0%, transparent 22%, #FDFDFD 34%, #FDFDFD 100%)`,
            }}
          />
        ))}

        {zones.map((zone, i) => (
          <motion.div
            key={`img-${zone.id}`}
            aria-hidden="true"
            className="absolute inset-0"
            style={{ opacity: panelOpacities[i] }}
          >
            <Image
              src={zone.image}
              alt={zone.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority={i === 0}
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/40 to-transparent" />

        <motion.div
          aria-hidden="true"
          className="absolute left-[15%] top-[10%] h-64 w-64 rounded-full blur-3xl mix-blend-screen"
          style={{ backgroundColor: "#E8923A", opacity: amberOpacity }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[10%] left-[15%] h-64 w-64 rounded-full blur-3xl mix-blend-screen"
          style={{ backgroundColor: "#0B4F6C", opacity: tealOpacity }}
        />

        <div className="relative mx-auto h-full max-w-container-max px-6 lg:px-12">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.id}
              className="absolute inset-0 flex max-w-md flex-col justify-center gap-4"
              style={{ opacity: panelOpacities[i], pointerEvents: "none" }}
            >
              <div style={{ pointerEvents: "auto" }}>
                <p
                  className="mb-2 font-mono text-label-md uppercase tracking-[0.1em]"
                  style={{ color: zone.glow === "amber" ? "#FDF3E7" : "#E1F0F7" }}
                >
                  {zone.eyebrow}
                </p>
                <h3 className="mb-3 font-heading text-display-md text-white">{zone.title}</h3>
                <p className="mb-4 text-body-md text-white/75">{zone.body}</p>
                <Link
                  href={zone.href}
                  className="inline-flex items-center gap-1.5 font-sans text-body-sm font-semibold text-white transition-transform hover:translate-x-0.5"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
