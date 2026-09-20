"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 96;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function AnchorPills({
  sections,
}: {
  sections: { id: string; title: string }[];
}) {
  // Direct load / shared link with a hash in the URL (e.g. #polycentrique):
  // wait for the first paint to settle before measuring the target's position.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToId(hash));
    });
  }, []);

  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToId(section.id);
            window.history.pushState(null, "", `#${section.id}`);
          }}
          className="rounded-full border border-border bg-white px-3 py-1 font-mono text-xs
                     uppercase tracking-wide text-on-surface-variant transition-colors
                     duration-150 hover:border-brand-teal/50 focus-ring"
        >
          {section.title}
        </a>
      ))}
    </div>
  );
}
