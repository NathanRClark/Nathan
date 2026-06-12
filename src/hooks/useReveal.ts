import { useRef, useEffect } from 'react';

/**
 * Returns a ref to attach to an element.
 * When the element enters the viewport, it gets the `visible` class,
 * triggering the CSS `fadeUp` animation defined in index.css.
 *
 * Includes an immediate visibility check on mount to handle:
 * 1. React Strict Mode double-mount (observer destroyed before first callback fires)
 * 2. Elements already in viewport when the page loads
 *
 * Options:
 *  - threshold: visibility fraction (default 0.12)
 *  - rootMargin: shrink/grow the observer's bounding box (default '0px 0px -40px 0px')
 */
export function useReveal(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el || revealedRef.current) return;

    // Immediate check — already in viewport? Reveal now, no observer needed
    const rect = el.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight + 40 && rect.bottom > 0;

    if (isInView) {
      el.classList.add('visible');
      revealedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealedRef.current) {
          el.classList.add('visible');
          revealedRef.current = true;
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
