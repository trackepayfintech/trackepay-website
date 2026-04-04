import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Megaphone,
  Package,
  Globe,
  Shield,
  Building2,
  Star,
  Search,
  Target,
  Rocket,
  TrendingUp,
} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title:
    "Trackepay - Mission-Critical Software for Governments & Enterprises",
  description:
    "From smart policing systems for Indian law enforcement to enterprise SaaS — Trackepay delivers mission-critical technology trusted by 50+ police stations and 150+ enterprises.",
  openGraph: {
    title: "Trackepay — Software Governments & Enterprises Rely On",
    description:
      "Mission-critical technology with 99.9% uptime. Smart policing, enterprise SaaS, and global IT services.",
  },
};

/* ───────────────────────── Data ───────────────────────── */

const clientLogos = [
  { src: "/images/clients/digital-domination.webp", alt: "Digital Domination" },
  { src: "/images/clients/nuancenext.webp", alt: "NuanceNext" },
  { src: "/images/clients/client3.png", alt: "Client" },
  { src: "/images/clients/pulse-prime.png", alt: "Pulse Prime" },
  { src: "/images/clients/bikaash-baahan.png", alt: "Bikaash Baahan" },
  { src: "/images/clients/logowa.png", alt: "Logowa" },
  { src: "/images/clients/valeroso.png", alt: "Valeroso" },
];

const metrics = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "50+", label: "Police Stations" },
  { value: "99.9%", label: "Uptime SLA" },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "We analyze your needs, challenges, and operational bottlenecks.",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "Custom roadmap aligned with your goals and compliance requirements.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Agile development with weekly demos and transparent progress.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "Launch, monitor, and optimize continuously for peak performance.",
  },
];

const testimonials = [
  {
    quote:
      "TrackePay has completely transformed the way we manage our day-to-day operations. The software is intuitive, reliable, and has significantly improved our team's productivity.",
    name: "Rajesh M.",
    role: "CEO",
    company: "Enterprise Client",
  },
  {
    quote:
      "Their team understood our unique needs and delivered a solution that perfectly aligned with our business goals. We couldn't be happier with the results.",
    name: "Priya S.",
    role: "Operations Manager",
    company: "Logistics Firm",
  },
  {
    quote:
      "From initial consultation to deployment, the experience was seamless. TrackePay truly cares about their clients and it shows in the quality of their work.",
    name: "Amit K.",
    role: "Founder",
    company: "SaaS Startup",
  },
];

const serviceCategories = [
  {
    Icon: Code,
    title: "IT Development",
    description:
      "Custom software, web applications, and mobile solutions built with modern frameworks and best practices.",
    services: [
      "Web Design & Development",
      "Software & CRM Solutions",
      "Mobile Applications",
      "Data Analytics",
    ],
    href: "/services",
  },
  {
    Icon: Megaphone,
    title: "Marketing",
    description:
      "Strategic digital marketing and branding services to grow your reach and build a memorable identity.",
    services: [
      "Digital Marketing & SEO",
      "Social Media Campaigns",
      "Branding Packages",
      "Content Strategy",
    ],
    href: "/digital-marketing-services",
  },
  {
    Icon: Package,
    title: "Products",
    description:
      "Ready-to-deploy SaaS products for HR management, restaurant operations, analytics, and business automation.",
    services: [
      "HR Management System",
      "Restaurant Management",
      "GreenBubble (WhatsApp API)",
      "Walytic (Web Analytics)",
    ],
    href: "/services",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  return (
    <>
      {/* ═══════════ 1. HERO — Dark ═══════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.04]" />

        {/* Radial orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[700px] h-[500px] bg-[#F48120]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Trust badge */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-white/60">
              Trusted by 50+ police stations &amp; 150+ enterprises
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Softwares that Governments
            <br className="hidden sm:block" /> &amp; Enterprises{" "}
            <span className="text-gradient">rely on!</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            From smart policing systems for Indian law enforcement to enterprise
            SaaS&nbsp;&mdash; Trackepay delivers mission-critical technology
            with 99.9% uptime.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#F48120] hover:bg-[#d97218] text-white font-semibold rounded-full px-8 py-4 text-base transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="text-white/50 hover:text-white text-base font-medium transition-colors inline-flex items-center gap-1"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust line */}
          <p className="animate-fade-up-delay-4 mt-8 text-sm text-white/25 tracking-wide">
            &#10003; Free consultation &nbsp;&middot;&nbsp; &#10003; No
            commitment &nbsp;&middot;&nbsp; &#10003; 24/7 support
          </p>
        </div>
      </section>

      {/* ═══════════ 2. LOGO TICKER ═══════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-8">
            Trusted by
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee w-max">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className="relative h-10 w-32 mx-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. WHO WE SERVE ═══════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-[#F48120] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Who We Serve
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Solutions for every sector
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              From government agencies to private enterprises and global
              businesses&nbsp;&mdash; technology that transforms operations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Government */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-1 bg-emerald-500" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    &#127470;&#127475; Built for India
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Government &amp; Public Sector
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  AI-powered solutions for law enforcement, public
                  administration, and smart city initiatives. Deployed across
                  police departments in India.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "QR Patrolling & GPS Tracking",
                    "Face Recognition (AI/ML)",
                    "Live Incident Tracking",
                    "Real-time Incident Reporting",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/government-police-solutions"
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group"
                >
                  Explore Govt Solutions
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Enterprise */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-1 bg-[#F48120]" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-[#F48120]">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                    Scalable SaaS
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Enterprise &amp; Private Sector
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Scalable SaaS products and custom software for startups, SMBs,
                  and large enterprises. Automate HR, operations, and customer
                  engagement.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "HRMS & Payroll Management",
                    "Restaurant Management System",
                    "WhatsApp Business API",
                    "Web & Mobile Analytics",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#F48120] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-[#F48120] hover:text-[#d97218] transition-colors group"
                >
                  View Products
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Global IT */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-1 bg-blue-500" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Globe className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    &#127760; Global Delivery
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Global IT Services
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  World-class IT development, digital marketing, and technology
                  consulting for businesses worldwide. From web apps to data
                  analytics.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom Web Development",
                    "Mobile App Development",
                    "Data Analytics & BI",
                    "Digital Marketing & SEO",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/technology"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  Our Services
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4. METRICS STRIP — Dark ═══════════ */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p
                  className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.value}
                </p>
                <div className="mx-auto mt-3 h-0.5 w-8 bg-[#F48120]/60 rounded-full" />
                <p className="mt-3 text-sm text-white/40 font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. HOW WE WORK ═══════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-[#F48120] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How We Work
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              A proven four-step process that takes you from idea to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {/* Dashed connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-slate-200" />

            {processSteps.map((step, idx) => {
              const icons = [Search, Target, Rocket, TrendingUp];
              const StepIcon = icons[idx];
              return (
                <div key={step.num} className="relative text-center">
                  {/* Numbered circle */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 border-2 border-slate-200 mb-6">
                    <span
                      className="text-2xl font-bold text-[#F48120]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. TESTIMONIALS ═══════════ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-[#F48120] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Our Clients Say
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Real feedback from the businesses we&apos;ve helped grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Opening quote mark */}
                <span
                  className="block text-6xl leading-none text-[#F48120]/20 mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </span>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {t.quote}
                </p>

                {/* Star rating */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#F48120] text-[#F48120]"
                    />
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. CAPABILITIES ═══════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-[#F48120] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F48120] mb-6">
                  <cat.Icon className="h-6 w-6" />
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {cat.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#F48120] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className="inline-flex items-center text-sm font-semibold text-[#F48120] hover:text-[#d97218] transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. BLOG PREVIEW ═══════════ */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-[#F48120] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Blog
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Latest Insights
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog/top-strategies-effective-online-advertising-bhubaneswar"
              className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="sm:w-64 h-48 sm:h-auto bg-gradient-to-br from-orange-50 to-slate-100 flex items-center justify-center flex-shrink-0">
                <Megaphone className="h-12 w-12 text-[#F48120]/40" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="inline-block bg-orange-50 text-[#F48120] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit mb-3">
                  Marketing
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F48120] transition-colors leading-snug">
                  Top Strategies for Effective Online Advertising in Bhubaneswar
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  By Biswajit Pradhan &middot; Oct 26, 2025
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#F48120] group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 9. CTA BANNER ═══════════ */}
      <CTABanner />
    </>
  );
}
