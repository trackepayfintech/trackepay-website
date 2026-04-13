"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#F48120]/[0.06] rounded-full blur-[150px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/[0.03]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm text-white/60">
            Trusted by 50+ police stations &amp; 150+ enterprises
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Technology that governments
          <br />
          &amp; enterprises{" "}
          <span className="text-gradient">rely on</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Mission-critical software with 99.9% uptime. From smart policing
          systems for Indian law enforcement to enterprise SaaS solutions
          powering businesses across India.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F48120] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-all duration-200 hover:bg-[#d97218] active:scale-[0.98] shadow-lg shadow-orange-500/20"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white font-medium text-[15px] transition-colors duration-200 px-4 py-3.5"
          >
            View Our Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/25"
        >
          <span>Free consultation</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span>No commitment required</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span>24/7 support</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
