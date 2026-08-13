/* Maison Rouge — révélations éditoriales discrètes, guidées par le défilement et respectueuses du mouvement réduit. */
import { useEffect } from "react";
import { useLocation } from "wouter";

export function MotionOrchestrator() {
  const [location] = useLocation();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main > section, .offer-page > section, .results-page > section, .about-page > section, .offer-finder-page > section"));
    targets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 38, 180)}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-revealed")),
      { threshold: 0.12, rootMargin: "0px 0px -42px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location]);

  return null;
}
