"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 48);
      if (Math.abs(y - lastY) > 4) {
        setDirection(y > lastY ? "down" : "up");
      }
      lastY = y;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { direction, scrolled };
}
