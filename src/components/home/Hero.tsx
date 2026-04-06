"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden motion-safe bg-[#0a0a0a]">

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[700px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-glow"
      />

      {/* Moving Gradient */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl"
      >

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="glass inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm text-white/70">
            Trusted by 50+ police stations & 150+ enterprises
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight"
        >
          Softwares that Governments <br />
          & Enterprises{" "}
          <span className="text-gradient">rely on!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Trackepay delivers mission-critical technology with 99.9% uptime.
          From smart policing systems to enterprise SaaS solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex gap-5 justify-center flex-wrap"
        >
          <Link
            href="/contact"
            className="btn-shine bg-[#F48120] hover:bg-[#d97218] text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Book a Demo <ArrowRight size={16} />
          </Link>

          <Link
            href="/portfolio"
            className="text-white/60 hover:text-white flex items-center gap-2 font-medium transition"
          >
            View Work <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-sm text-white/30 tracking-wide"
        >
          ✓ Free consultation &nbsp;·&nbsp; ✓ No commitment &nbsp;·&nbsp; ✓ 24/7 support
        </motion.p>

      </motion.div>
    </section>
  );
}