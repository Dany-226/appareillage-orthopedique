"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { TocHeading } from "@/lib/piliers";

function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    const onScroll = () => {
      const scrollY = window.scrollY + 120; // account for navbar + buffer
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const ids = headings.map((h) => h.id);
  const activeId = useActiveHeading(ids);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav aria-label="Table des matières">
      <p className="label-mono text-[10px] text-muted-foreground mb-4">
        Dans cet article
      </p>
      <ol className="space-y-1">
        {headings.map((h) => {
          const isActive = h.id === activeId;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                className={`group relative flex items-center gap-3 rounded-md px-3 py-2
                            text-sm leading-snug transition-all duration-200 focus-ring
                            ${
                              isActive
                                ? "text-brand-teal font-medium bg-brand-teal-muted/60"
                                : "text-muted-foreground hover:text-brand-teal hover:bg-brand-teal-muted/30"
                            }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="toc-indicator"
                    className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-brand-teal"
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                <span className="line-clamp-2">{h.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
