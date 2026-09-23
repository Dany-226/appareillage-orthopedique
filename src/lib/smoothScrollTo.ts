const HEADER_OFFSET = 96;
const DURATION_MS = 500;

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * Scrolls to the element with the given id using our own requestAnimationFrame
 * loop instead of `scrollTo({ behavior: "smooth" })`.
 *
 * Why: native smooth scrolling relies on the `scroll-behavior` CSS property,
 * which Next.js App Router's own internal navigation handling (handleSmoothScroll
 * in next/dist/shared/lib/router/utils/handle-smooth-scroll.js) toggles on
 * document.documentElement during its own route transitions. Any pushState/
 * replaceState call - including router.replace() - can trigger that toggle
 * concurrently with an in-flight native smooth scroll, interrupting it. Driving
 * the animation ourselves with instant (non-"smooth") scrollTo() calls each
 * frame sidesteps that shared CSS property entirely, so it can't be cancelled
 * by Next's own scroll handling.
 */
export function smoothScrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + startY - HEADER_OFFSET;
  const distance = targetY - startY;

  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / DURATION_MS, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
