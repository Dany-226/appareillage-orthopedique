"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FAMILLES, FAMILLE_MEDIA } from "@/lib/lppr-familles";

export default function FamilyLinksCard({ currentSlug }: { currentSlug?: string }) {
  const entries = Object.entries(FAMILLES).filter(([slug]) => slug !== currentSlug);

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-card">
      <p className="mb-2 px-2 font-sans font-semibold text-on-surface" style={{ fontSize: "13px" }}>
        Nomenclature complète
      </p>
      <div className="space-y-0.5">
        {entries.map(([slug, famille]) => {
          const media = FAMILLE_MEDIA[slug];
          return (
            <Link
              key={slug}
              href={`/protheses/produits/${slug}`}
              className="group flex items-center gap-3 rounded-md px-2 py-2
                         transition-colors duration-150 hover:bg-brand-teal-muted/30
                         focus-ring"
            >
              <div className="relative h-10 w-10 flex-none overflow-hidden rounded-lg
                              bg-surface-container-low">
                {media?.type === "image" ? (
                  <Image
                    src={media.src}
                    alt={famille.cardTitle}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                ) : media ? (
                  <div className="flex h-full items-center justify-center">
                    <media.Icon size={18} className="text-brand-teal" aria-hidden />
                  </div>
                ) : null}
              </div>
              <span
                className="flex-1 font-sans text-on-surface transition-colors
                           group-hover:text-brand-teal"
                style={{ fontSize: "13px" }}
              >
                {famille.cardTitle}
              </span>
              <ArrowRight
                size={13}
                className="flex-none -translate-x-1 text-brand-teal opacity-0
                           transition-all duration-150 group-hover:translate-x-0
                           group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
