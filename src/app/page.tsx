import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import CTABanner from "@/components/shared/CTABanner";
import { buildMetadata } from "@/lib/seo";

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

export const metadata: Metadata = buildMetadata({
  title:
    "Trackepay | Software Company in Bhubaneswar — Custom Software, Web, Mobile & Digital Marketing",
  description:
    "Trackepay is a leading software & IT services company in Bhubaneswar, India. We build custom software, CRM, web & mobile apps, run digital marketing, and serve 150+ enterprises and 50+ police stations.",
  path: "/",
  keywords: [
    "software company in bhubaneswar",
    "software development company bhubaneswar",
    "it company bhubaneswar",
    "custom software development india",
    "digital marketing agency bhubaneswar",
    "trackepay",
  ],
});

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
    Icon: Search,
  },
  {
    num: "02",
    title: "Strategize",
    desc: "Custom roadmap aligned with your goals and compliance requirements.",
    Icon: Target,
  },
  {
    num: "03",
    title: "Build",
    desc: "Agile development with weekly demos and transparent progress.",
    Icon: Rocket,
  },
  {
    num: "04",
    title: "Scale",
    desc: "Launch, monitor, and optimize continuously for peak performance.",
    Icon: TrendingUp,
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

/* ───────────────────────── Helpers ───────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-4">
      <span className="h-px w-6 bg-slate-300" />
      {children}
      <span className="h-px w-6 bg-slate-300" />
    </span>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />

      {/* ═══════════ LOGO TICKER ═══════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-8">
            Trusted by leading organizations
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee w-max">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className="relative h-16 w-44 sm:h-20 sm:w-56 lg:h-24 lg:w-64 mx-6 sm:mx-10 lg:mx-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
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
          <div className="text-center mb-16">
            <SectionLabel>Who We Serve</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Solutions for every sector
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              From government agencies to private enterprises and global
              businesses&nbsp;&mdash; technology that transforms operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Government */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
              <div className="h-1 bg-slate-900" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-900">
                    <Shield className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center bg-slate-200 text-slate-900 px-3 py-1 rounded-full text-xs font-medium">
                    Built for India
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Government &amp; Public Sector
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  AI-powered solutions for law enforcement, public
                  administration, and smart city initiatives deployed across
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
                      className="flex items-center gap-2.5 text-[15px] text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-900 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/government-police-solutions"
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors group/link"
                >
                  Explore Govt Solutions
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
              <div className="h-1 bg-[#F48120]" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F48120]">
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
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
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
                      className="flex items-center gap-2.5 text-[15px] text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#F48120] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-[#F48120] hover:text-[#d97218] transition-colors group/link"
                >
                  View Products
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Global IT */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
              <div className="h-1 bg-slate-900" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-900">
                    <Globe className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center bg-slate-200 text-slate-900 px-3 py-1 rounded-full text-xs font-medium">
                    Global Delivery
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Global IT Services
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
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
                      className="flex items-center gap-2.5 text-[15px] text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-900 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/technology"
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors group/link"
                >
                  Our Services
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ METRICS ═══════════ */}
      <section className="py-20 lg:py-24 bg-[#0a0a0a]">
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
                <div className="mx-auto mt-3 h-px w-8 bg-white/20 rounded-full" />
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
            <SectionLabel>Our Process</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How We Work
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              A proven four-step process that takes you from idea to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-slate-200" />

            {processSteps.map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 border-2 border-slate-200 mb-6">
                  <step.Icon className="h-7 w-7 text-[#F48120]" />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-2">
                  Step {step.num}
                </div>
                <h3
                  className="text-lg font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. TESTIMONIALS ═══════════ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Testimonials</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Our Clients Say
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Real feedback from the businesses we&apos;ve helped grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#F48120] text-[#F48120]"
                    />
                  ))}
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-5">
                  <p className="font-semibold text-slate-900 text-[15px]">{t.name}</p>
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
            <SectionLabel>What We Do</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive digital solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-300"
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
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  {cat.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {cat.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2.5 text-[15px] text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#F48120] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className="inline-flex items-center text-sm font-semibold text-[#F48120] hover:text-[#d97218] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <CTABanner />
    </>
  );
}
