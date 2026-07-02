"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * The platform's signature structural device: a set of bathymetric contour
 * lines that draw themselves in on scroll, standing in for a generic
 * wave shape or a plain <hr>. Used between major sections.
 */
export default function ContourDivider({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const stroke = tone === "paper" ? "#f4efe6" : "#241640";

  const paths = [
    "M0 30 C 120 10, 260 50, 400 28 S 680 8, 800 32",
    "M0 44 C 140 22, 300 62, 420 42 S 660 24, 800 46",
    "M0 58 C 100 40, 320 74, 440 56 S 700 40, 800 60",
  ];

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 80" className="w-full h-16 md:h-20" preserveAspectRatio="none">
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={stroke}
            strokeOpacity={0.15 + i * 0.08}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.4, delay: i * 0.15, ease: [0.65, 0, 0.35, 1] }}
          />
        ))}
      </svg>
    </div>
  );
}
