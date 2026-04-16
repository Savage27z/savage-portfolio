import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll(
  element: HTMLElement | null,
  options?: {
    y?: number;
    x?: number;
    delay?: number;
    duration?: number;
    stagger?: number;
    children?: boolean;
  }
) {
  if (!element) return;
  const {
    y = 30,
    x = 0,
    delay = 0,
    duration = 0.8,
    stagger = 0,
    children = false,
  } = options || {};

  const targets = children ? element.children : element;

  gsap.from(targets, {
    opacity: 0,
    y,
    x,
    duration,
    delay,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}
