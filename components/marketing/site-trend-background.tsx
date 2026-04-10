"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const trendPath =
  "M 120 2820 C 220 2670, 320 2580, 450 2460 S 720 2230, 880 2100 S 1140 1880, 1040 1710 S 720 1490, 820 1320 S 1160 1080, 1070 900 S 760 650, 880 470 S 1150 250, 1260 110";

export function SiteTrendBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0.08, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0.18, 0.32, 0.22]);
  const lineShift = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -180]);
  const surgeY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [90, -130]);
  const surgeScale = useTransform(scrollYProgress, [0.2, 0.48, 0.62, 1], [0.9, 1.06, 1, 0.98]);
  const surgeOpacity = useTransform(scrollYProgress, [0.18, 0.35, 0.8], [0, 0.9, 0.32]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y: lineShift }}
        className="absolute inset-0"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 3000"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="trend-line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.05" />
              <stop offset="35%" stopColor="#FF6A00" stopOpacity="0.18" />
              <stop offset="68%" stopColor="#FF8D3A" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#FFF3EA" stopOpacity="0.42" />
            </linearGradient>
            <filter id="trend-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d={trendPath}
            stroke="rgba(255,255,255,0.06)"
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
            filter="url(#trend-glow)"
          />

          <motion.path
            d={trendPath}
            stroke="#FF6A00"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="10 18"
            style={{ pathLength, opacity: 0.22 }}
          />

          <motion.path
            d="M 760 1560 C 800 1480, 860 1410, 960 1310 S 1120 1110, 1220 920"
            stroke="url(#trend-line-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#trend-glow)"
            style={{ opacity: surgeOpacity }}
          />

          <circle cx="450" cy="2460" r="8" fill="#FF6A00" fillOpacity="0.15" />
          <circle cx="1040" cy="1710" r="8" fill="#FF6A00" fillOpacity="0.12" />
          <circle cx="820" cy="1320" r="8" fill="#FF6A00" fillOpacity="0.12" />
          <circle cx="1070" cy="900" r="8" fill="#FF6A00" fillOpacity="0.12" />
        </svg>
      </motion.div>

      <motion.div
        style={{ y: surgeY, scale: surgeScale, opacity: surgeOpacity }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                boxShadow: [
                  "0 0 0 rgba(255,106,0,0.0)",
                  "0 0 42px rgba(255,106,0,0.16)",
                  "0 0 0 rgba(255,106,0,0.0)"
                ]
              }
        }
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[7%] top-[46%] hidden w-[220px] rounded-[28px] border border-papaya/16 bg-[linear-gradient(135deg,rgba(255,106,0,0.14),rgba(255,255,255,0.03))] p-4 backdrop-blur-sm xl:block"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-papaya/16 bg-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-papaya">
              <TrendingUp className="size-3.5" />
              Billable lift
            </div>
            <p className="mt-3 max-w-[11rem] text-sm leading-6 text-white/78">
              Less admin time turns into a sharper jump in delivery capacity.
            </p>
          </div>
          <motion.div
            animate={prefersReducedMotion ? {} : { x: [0, 6, 0], y: [0, -6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-white/10 bg-white/8 p-3 text-papaya"
          >
            <ArrowUpRight className="size-5 stroke-[2.4]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
