"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Server, Shield, Zap, Code, Cloud, Brain, Database, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

// Matrix Rain Effect
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const chars = "01".split("");

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#F48120";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        if (y < canvas.height) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(244, 129, 32, 0.5)";
          ctx.fillStyle = `rgba(244, 129, 32, ${0.5 + Math.random() * 0.5})`;
          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;
        }

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

// Circuit Board Background
const CircuitBoard = () => {
  const paths = [
    { x1: 10, y1: 20, x2: 90, y2: 20, delay: 0 },
    { x1: 10, y1: 50, x2: 90, y2: 50, delay: 0.5 },
    { x1: 20, y1: 10, x2: 20, y2: 80, delay: 1 },
    { x1: 80, y1: 10, x2: 80, y2: 80, delay: 1.5 },
    { x1: 20, y1: 30, x2: 80, y2: 30, delay: 2 },
    { x1: 50, y1: 20, x2: 50, y2: 50, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {paths.map((path, i) => (
          <motion.line
            key={i}
            x1={`${path.x1}%`}
            y1={`${path.y1}%`}
            x2={`${path.x2}%`}
            y2={`${path.y2}%`}
            stroke="#F48120"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: path.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        {[
          [20, 20],
          [50, 20],
          [80, 20],
          [20, 50],
          [50, 50],
          [80, 50],
          [20, 80],
          [50, 80],
          [80, 80],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r="1"
            fill="#F48120"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Tech Stats Counter
const TechStats = () => {
  const stats = [
    { label: "Uptime", value: "99.9", suffix: "%", icon: Shield },
    { label: "Response Time", value: "<50", suffix: "ms", icon: Zap },
    { label: "Code Coverage", value: "95", suffix: "%", icon: Code },
    { label: "Security Score", value: "A+", suffix: "", icon: Server },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-6 max-w-3xl mx-auto px-4 sm:px-0">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="bg-white/[0.03] border border-white/10 rounded-lg p-2.5 sm:p-4 backdrop-blur-sm hover:border-[#F48120]/30 transition-all duration-300 group"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <stat.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#F48120] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="text-base sm:text-2xl font-bold text-[#F48120]">
              {stat.value}
              <span className="text-xs sm:text-sm">{stat.suffix}</span>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs text-white/40 mt-1 text-center">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Technology Stack Showcase
const TechStack = () => {
  const techs = [
    { name: "AI/ML", icon: Brain },
    { name: "Cloud Native", icon: Cloud },
    { name: "Microservices", icon: Database },
    { name: "DevOps", icon: Server },
    { name: "Security", icon: Shield },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="mt-6 flex flex-wrap items-center justify-center gap-3"
    >
      {techs.map((tech) => (
        <span
          key={tech.name}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#F48120]/60 bg-[#F48120]/10 border border-[#F48120]/20 rounded-full font-mono hover:bg-[#F48120]/20 transition-all duration-300"
        >
          <tech.icon className="h-3 w-3" />
          {tech.name}
        </span>
      ))}
    </motion.div>
  );
};

// Floating Tech Chips - Fixed for SSR
const TechChips = () => {
  const [isMounted, setIsMounted] = useState(false);
  const chips = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Python", "AWS", "Kubernetes", "Docker",
    "MongoDB", "PostgreSQL", "Redis", "Elasticsearch"
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {chips.map((chip, i) => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        return (
          <motion.div
            key={i}
            className="absolute bg-white/[0.03] border border-white/10 rounded-full px-3 py-1 text-xs text-white/30 font-mono backdrop-blur-sm"
            initial={{
              x: randomX,
              y: randomY,
              opacity: 0,
            }}
            animate={{
              x: [
                randomX,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                randomY,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            {chip}
          </motion.div>
        );
      })}
    </div>
  );
};

// Technology Icons Grid Background
const TechIconGrid = () => {
  const icons = [
    "⚡", "🔥", "🚀", "💻", "🖥️", "📡", "🔬", "🧬",
    "⚙️", "🔧", "🔮", "💎", "🌟", "✨", "💫", "🌀"
  ];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 sm:gap-8 p-6 sm:p-8 w-full h-full">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            className="text-2xl sm:text-3xl md:text-4xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Binary Code Background
const BinaryBackground = () => {
  const [binary, setBinary] = useState<string[][]>([]);

  useEffect(() => {
    const rows = window.innerWidth < 640 ? 10 : 20;
    const cols = window.innerWidth < 640 ? 20 : 40;
    const newBinary = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random() > 0.5 ? "1" : "0")
    );
    setBinary(newBinary);

    const interval = setInterval(() => {
      setBinary((prev) =>
        prev.map((row) =>
          row.map(() => Math.random() > 0.5 ? "1" : "0")
        )
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] font-mono text-[6px] sm:text-[8px] leading-[1.2] text-white">
      {binary.map((row, i) => (
        <div key={i} className="flex gap-0.5 sm:gap-1">
          {row.map((bit, j) => (
            <span key={j}>{bit}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#1a0a0a]" />
      <BinaryBackground />
      <MatrixRain />
      <CircuitBoard />
      <TechIconGrid />
      {isMounted && <TechChips />}

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-[#F48120]/[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl w-full"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-2 py-2 mb-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        >
          <Cpu className="h-4 w-4 text-[#F48120]" />
          <span className="text-sm text-white/60">
            Next-Generation Technology Platform
          </span>
          <Zap className="h-3 w-3 text-[#F48120]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F48120] via-orange-400 to-[#F48120] bg-[length:200%] animate-gradient">
            Technology
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            that powers the future
          </span>
        </motion.h1>

        {/* Announcement Banner */}
        {/* <motion.div
          variants={fadeUp}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#F48120]/20 bg-[#F48120]/5 backdrop-blur-sm max-w-2xl mx-auto"
        >
          <Award className="h-4 w-4 text-[#F48120] flex-shrink-0" />
          <p className="text-xs md:text-sm text-white/60 leading-relaxed">
            
          </p>
        </motion.div> */}

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-white/50 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          Enterprise-grade solutions built with cutting-edge technology.
          From AI-powered systems to robust cloud infrastructure,we deliver innovation at scale.
          <br className="hidden sm:block" />
          TrackePay Achieves OCAC Empanelment: A New Chapter in Driving Digital Transformation Across Odisha
        </motion.p>

        {/* Tech Stats */}
        <TechStats />

        {/* Technology Stack */}
        <TechStack />

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-row gap-3 justify-center items-center px-4 sm:px-0"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 sm:flex-initial">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full gap-1.5 sm:gap-2 bg-gradient-to-r from-[#F48120] to-orange-500 text-white px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-[15px] transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              <Server className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Start Building
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 sm:flex-initial">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center w-full gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-[15px] transition-all duration-200 hover:bg-white/20 shadow-lg shadow-black/10"
            >
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-nowrap items-center justify-center gap-x-3.5 sm:gap-x-6 text-xs sm:text-[13px] text-white/25 whitespace-nowrap"
        >
          <span className="flex items-center gap-1 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/50"></span>
            99.9% Uptime
          </span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span className="hidden sm:flex items-center gap-1 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></span>
            SOC2 Compliant
          </span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span className="flex items-center gap-1 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></span>
            24/7 Support
          </span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span className="flex items-center gap-1 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400/50"></span>
            Enterprise Ready
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}