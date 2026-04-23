"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in-up" | "slide-in-left" | "slide-in-right" | "scale-in";
  threshold?: number;
  as?: "div" | "section" | "article";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
  threshold = 0.15,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animationMap = {
    "fade-in-up": "animate-fade-in-up",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  };

  return (
    <Tag
      ref={ref}
      className={`${className} ${
        isVisible ? animationMap[animation] : "opacity-0"
      }`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
