"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export default function CTABanner() {
  return (
    <section className="px-4 lg:px-8 mb-20">
      <div className="relative overflow-hidden bg-[#0a0a0a] rounded-3xl py-24 lg:py-32">
        
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-pattern opacity-100" />

        {/* Animated Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(244,129,32,0.10) 0%, rgba(244,129,32,0.04) 40%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern" />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl px-6 text-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to transform
            <br />
            your operations?
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Join 150+ businesses that trust Trackepay for mission-critical
            software.
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48120] text-white text-[15px] font-semibold rounded-full px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:bg-[#e0741b]"
              >
                Book a Demo
                <span>&rarr;</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-[13px] text-white/30 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            <span className="flex items-center gap-1.5">
              ✔ No commitment required
            </span>
            <span className="flex items-center gap-1.5">
              ✔ Free consultation
            </span>
            <span className="flex items-center gap-1.5">
              ✔ 24/7 support
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}