"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const trendPath =
  "M 118 2820 C 220 2670, 340 2570, 470 2440 S 760 2200, 905 2050 S 1135 1820, 1035 1660 S 710 1450, 835 1260 S 1175 980, 1080 790 S 820 520, 930 360 S 1175 170, 1285 84";

export function SiteTrendBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0.08, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.18, 0.6, 1], [0.08, 0.24, 0.3, 0.16]);
  const lineShift = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -140]);
  const arrowY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [18, -36]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.24, 0.4, 0.18]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div style={{ y: lineShift }} className="absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 1440 3000" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="trend-line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.03" />
              <stop offset="34%" stopColor="#FF6A00" stopOpacity="0.12" />
              <stop offset="68%" stopColor="#FF934A" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FFF1E6" stopOpacity="0.3" />
            </linearGradient>
            <filter id="trend-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="trend-node-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d={trendPath}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          <motion.path
            d={trendPath}
            stroke="url(#trend-line-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength, opacity: glowOpacity }}
            filter="url(#trend-soft-glow)"
          />

          <motion.path
            d={trendPath}
            stroke="#FF6A00"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="10 18"
            style={{ pathLength, opacity: 0.14 }}
          />

          <g opacity="0.42">
            <circle cx="470" cy="2440" r="44" fill="url(#trend-node-glow)" />
            <circle cx="1035" cy="1660" r="46" fill="url(#trend-node-glow)" />
            <circle cx="835" cy="1260" r="40" fill="url(#trend-node-glow)" />
            <circle cx="1080" cy="790" r="42" fill="url(#trend-node-glow)" />
          </g>

          <g opacity="0.24">
            <circle cx="470" cy="2440" r="7" fill="#FF6A00" />
            <circle cx="1035" cy="1660" r="7" fill="#FF6A00" />
            <circle cx="835" cy="1260" r="7" fill="#FF6A00" />
            <circle cx="1080" cy="790" r="7" fill="#FF6A00" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        style={{ y: arrowY, opacity: arrowOpacity }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.04, 1],
                rotate: [0, 1.5, 0]
              }
        }
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[7%] top-[44%] hidden xl:block"
      >
        <svg width="152" height="152" viewBox="0 0 152 152" fill="none">
          <defs>
            <linearGradient id="trend-arrow-gradient" x1="18" y1="132" x2="126" y2="24">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FFF0E4" stopOpacity="0.34" />
            </linearGradient>
          </defs>
          <path
            d="M20 122 L64 78 L89 94 L126 34"
            stroke="url(#trend-arrow-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 34 H126 V60"
            stroke="rgba(255,240,228,0.34)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
