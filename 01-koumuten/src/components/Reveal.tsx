"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function revealClass(className?: string, visible?: boolean) {
  return [className, "reveal-up", visible ? "is-visible" : ""].filter(Boolean).join(" ");
}

export function RevealSection({ children, className, ...props }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={revealClass(className, visible)} {...props}>
      {children}
    </section>
  );
}

export function RevealDiv({ children, className, ...props }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={revealClass(className, visible)} {...props}>
      {children}
    </div>
  );
}

export function RevealArticle({ children, className, ...props }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <article ref={ref} className={revealClass(className, visible)} {...props}>
      {children}
    </article>
  );
}
