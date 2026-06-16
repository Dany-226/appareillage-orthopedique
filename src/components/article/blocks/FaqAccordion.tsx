"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { easing } from "@/components/ui/design-tokens";

type FaqItem = { q: string; a: string };

function FaqEntry({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <div className="border border-surface-container-high rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-6 py-4
                   text-left cursor-pointer focus-ring group"
      >
        <span
          className="font-sans font-semibold text-on-surface leading-snug"
          style={{ fontSize: "16px" }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: easing.smooth }}
          className="flex-none text-on-surface-variant group-hover:text-brand-teal
                     transition-colors duration-150"
          aria-hidden
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height:  { duration: 0.35, ease: easing.smooth },
              opacity: { duration: 0.25 },
            }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-6 pb-5 font-sans text-on-surface-variant"
              style={{ fontSize: "15px", lineHeight: 1.7 }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="my-8 space-y-2" aria-label="Questions fréquentes">
      {items.map((item, i) => (
        <FaqEntry key={i} item={item} index={i} />
      ))}
    </div>
  );
}
