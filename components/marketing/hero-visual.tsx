"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const lanes = [
  { label: "Report Review", time: "47 min saved", width: "78%" },
  { label: "Client Deck", time: "Brand-ready", width: "61%" },
  { label: "Project Update", time: "Sent faster", width: "72%" }
];

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[560px] px-3 pt-8 pb-20 sm:px-0 sm:pt-6 sm:pb-12">
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-papaya/16 blur-3xl"
      />
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [10, -12, 10] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-charcoal/10 blur-3xl"
      />
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-0 z-10 rounded-full border border-white/12 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal shadow-card sm:right-2 sm:top-0"
      >
        Billable-first
      </motion.div>
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute left-4 bottom-2 z-10 inline-flex items-center gap-2 rounded-full border border-papaya/20 bg-[#fff4eb] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-papaya shadow-card sm:left-2 sm:bottom-0"
      >
        <TrendingUp className="size-3.5 stroke-[2.25]" />
        <span>Output speed</span>
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-visible rounded-[32px] shadow-premium"
      >
        <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(255,106,0,0.08),transparent_28%,rgba(28,28,30,0.05)_78%,transparent)]" />
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#111214_0%,#18181b_100%)] p-6 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Workflow snapshot</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em]">
                Reclaim pipeline
              </h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-white/72">
              Live throughput
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {lanes.map((lane, index) => (
              <motion.div
                key={lane.label}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.12, duration: 0.55 }}
                className="rounded-3xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-white">{lane.label}</span>
                  <span className="text-white/58">{lane.time}</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={prefersReducedMotion ? false : { width: 0 }}
                    animate={prefersReducedMotion ? { width: lane.width } : { width: lane.width }}
                    transition={{ delay: 0.35 + index * 0.12, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#FF6A00_0%,#FF9A52_100%)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[24px] border border-white/8 bg-white/4 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-white/42">Input</p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                Technical report, notes, previous decks, and client updates.
              </p>
            </div>
            <div className="rounded-[24px] border border-papaya/30 bg-papaya/14 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-papaya">Output</p>
              <p className="mt-3 text-sm leading-6 text-white">
                Structured summary, deck draft, and polished weekly update.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-papaya/18 bg-papaya/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-papaya">
              Delivery signal
            </div>
            <p className="text-sm leading-6 text-white/68">
              Turn dense technical input into client-ready output without dragging senior teams into admin work.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
