import type { Variants } from "framer-motion";

/** Slide in from the left (scroll-triggered sections). */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/** Slide in from the right (alternate with fadeInLeft). */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/** Stagger children (e.g. service cards grid). */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

/** Softer motion for above-the-fold hero copy. */
export const heroFadeInLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut"
    }
  }
};
