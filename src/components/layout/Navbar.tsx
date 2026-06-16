"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const PILIER_LINKS = [
  { label: "Orthèses",         href: "/ortheses" },
  { label: "Prothèses",        href: "/protheses" },
  { label: "Fauteuils",        href: "/fauteuils" },
  { label: "Aides techniques", href: "/aides-techniques" },
  { label: "Positionnement",   href: "/positionnement" },
];

const ALL_NAV_LINKS = [
  ...PILIER_LINKS,
  { label: "À propos", href: "/a-propos" },
];

function useNavScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [hidden,  setHidden]  = useState(false);

  useEffect(() => {
    let last = window.scrollY;

    const handler = () => {
      const y = window.scrollY;
      if (y > last + 10 && y > 80) {
        setHidden(true);
      } else if (y < last - 10 || y <= 80) {
        setHidden(false);
      }
      setScrollY(y);
      last = y;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { scrolled: scrollY > 80, hidden };
}

export default function Navbar() {
  const { scrolled, hidden } = useNavScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Background layer — transitions from transparent to frosted ivory */}
      <div
        className="border-b transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,245,242,0.88)" : "transparent",
          backdropFilter:   scrolled ? "blur(12px)"             : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)"         : "none",
          borderBottomColor: scrolled ? "#dbdad7"               : "transparent",
        }}
      >
        <div
          className="mx-auto flex h-16 max-w-[1280px] items-center justify-between
                     px-6 sm:px-10 lg:px-16"
        >
          {/* Logo — Fraunces, no icon */}
          <Link
            href="/"
            className="font-heading text-[20px] font-bold tracking-tight focus-ring rounded"
            style={{ color: "#1b1c1a" }}
          >
            Appareillage&nbsp;
            <span className="font-normal italic">Orthopédique</span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navigation principale"
          >
            {PILIER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded px-3 py-1.5 font-sans text-[15px]
                           font-medium transition-colors duration-200 focus-ring"
                style={{ color: "#1b1c1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8923A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1b1c1a")}
              >
                {link.label}
              </Link>
            ))}
            {/* Separator */}
            <span
              className="mx-1 h-4 w-px flex-none"
              style={{ background: "#dbdad7" }}
              aria-hidden
            />
            <Link
              href="/a-propos"
              className="rounded px-3 py-1.5 font-sans text-[15px] font-medium
                         transition-colors duration-200 focus-ring"
              style={{ color: "#1b1c1a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E8923A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1b1c1a")}
            >
              À propos
            </Link>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/trouver-praticien"
              className="hidden rounded-button px-4 py-2 text-sm font-semibold
                         text-white transition-all duration-200 hover:brightness-95
                         sm:inline-flex"
              style={{ background: "#E8923A" }}
            >
              Trouver un praticien
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded p-2 transition-colors duration-200 focus-ring lg:hidden"
              style={{ color: "#1b1c1a" }}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="border-b px-6 pb-4 pt-2 lg:hidden"
            style={{
              backgroundColor: "rgba(247,245,242,0.96)",
              backdropFilter:  "blur(12px)",
              borderColor:     "#dbdad7",
            }}
          >
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {ALL_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded px-3 py-2.5 font-sans text-sm font-medium
                             transition-colors duration-200 focus-ring
                             hover:bg-surface-container-low"
                  style={{ color: "#1b1c1a" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-1 border-t pt-2" style={{ borderColor: "#dbdad7" }}>
                <Link
                  href="/trouver-praticien"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-button px-4 py-2.5 text-center
                             text-sm font-semibold text-white transition-all
                             duration-200 hover:brightness-95"
                  style={{ background: "#E8923A" }}
                >
                  Trouver un praticien
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
