"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { smoothScrollToId } from "@/lib/smoothScrollTo";

export default function AnchorPills({
  sections,
}: {
  sections: { id: string; title: string }[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Direct load / shared link with a hash in the URL (e.g. #polycentrique):
  // wait for the first paint to settle before measuring the target's position.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => smoothScrollToId(hash));
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
            // router.replace with scroll:false updates the URL through Next's
            // own navigation API instead of a raw history.pushState call, which
            // Next.js intercepts internally and can trigger its own route
            // reconciliation mid-scroll (see src/lib/smoothScrollTo.ts). scroll:
            // false tells Next not to touch scroll position for this URL change,
            // leaving that entirely to smoothScrollToId below.
            router.replace(`${pathname}#${section.id}`, { scroll: false });
            smoothScrollToId(section.id);
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
