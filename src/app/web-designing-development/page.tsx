import type { Metadata } from "next";
import Link from "next/link";

import {
  Globe,
  Code,
  Smartphone,
  BarChart3,
  FileText,
  Monitor,
  Layers,
  PenTool,
  Layout,
  Paintbrush,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Web Development Company in Bhubaneswar — Custom Website Design",
  description:
    "Top web development company in Bhubaneswar building custom, responsive, SEO-friendly websites and web applications for businesses across India.",
  path: "/web-designing-development",
  keywords: [
    "web development company bhubaneswar",
    "web designing bhubaneswar",
    "website design bhubaneswar",
    "custom website development india",
    "react development india",
    "nextjs development company india",
  ],
});

const serviceCards = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Tailor-made websites built from scratch to match your unique brand identity and business requirements.",
  },
  {
    icon: FileText,
    title: "Content Management",
    description:
      "Easy-to-use CMS solutions that empower your team to update and manage content without technical expertise.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description:
      "Pixel-perfect designs that look stunning and perform flawlessly on every device and screen size.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "End-to-end development from front-end interfaces to robust back-end systems and database architecture.",
  },
];

const uiuxSolutions = [
  {
    icon: PenTool,
    title: "Prototyping",
    description:
      "Interactive wireframes and prototypes that bring your ideas to life before a single line of code is written.",
  },
  {
    icon: Paintbrush,
    title: "Visual Design",
    description:
      "Stunning visual elements, typography, and color systems that capture your brand essence.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description:
      "Fluid layouts and adaptive interfaces that provide seamless experiences across all devices.",
  },
];

const portfolioTimeline = [
  {
    title: "Branding",
    items: [
      "Brand identity and logo design",
      "Color palette and typography selection",
      "Brand guidelines documentation",
    ],
  },
  {
    title: "Discovery",
    items: [
      "Research and competitive analysis",
      "User persona development",
      "Information architecture planning",
    ],
  },
  {
    title: "Digital Experiences",
    items: [
      "UI/UX design and prototyping",
      "Interactive elements and animations",
      "Accessibility and usability testing",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Front-end and back-end development",
      "API integration and database setup",
      "Performance optimization and deployment",
    ],
  },
];

const relatedServices = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Harness data insights to optimize your web performance and user engagement.",
    href: "/data-analytics-services",
  },
  {
    icon: Code,
    title: "Software & CRM",
    description:
      "Custom software solutions that integrate seamlessly with your web presence.",
    href: "/software-crm-development-services",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Extend your web experience to native mobile applications.",
    href: "/mobile-application-design-development",
  },
];

export default function WebDesigningDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#110F33] via-[#15133d] to-[#1a1850] py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">Web Designing & Development</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-400 mb-6 leading-tight tracking-tight">
              Web Designing & Development
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl">
              Elevate your brand online with expert Web & App Development. We
              craft responsive, cutting-edge websites and mobile apps that drive
              engagement, conversions, and lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Capability Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              What We Offer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Solutions */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Design Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              UI/UX Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We design intuitive experiences that delight users and drive business
              results.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {uiuxSolutions.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Timeline */}
      <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Heading Section */}
    <div className="text-center mb-20">
      <span className="text-orange-600 font-semibold tracking-widest uppercase text-sm">Workflow</span>
      <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">4-Step Process</span>
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
        A streamlined approach designed to take your project from concept to reality with precision.
      </p>
    </div>

    {/* Timeline Container */}
    <div className="relative">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
        
        {portfolioTimeline.map((step, i) => (
          <div
            key={i}
            className="group relative flex-1 w-full"
          >
            
            {i !== portfolioTimeline.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[3px] bg-gradient-to-r from-orange-500/50 to-transparent z-0" />
            )}

            
            {i !== portfolioTimeline.length - 1 && (
              <div className="lg:hidden absolute left-6 top-12 w-[2px] h-full bg-gradient-to-b from-orange-500/50 to-transparent z-0" />
            )}

            <div className="relative z-10 flex flex-col items-center lg:items-center">
              
              {/* Animated Number Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500 text-white font-bold text-lg mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ring-4 ring-white">
                {i + 1}
              </div>

              {/* Content Card */}
              <div className="w-full bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:border-orange-100 transition-all duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-1 block">
                  Phase 0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {step.title}
                </h3>

                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-slate-600 text-sm flex items-start gap-3 group/item"
                    >
                      <div className="mt-1.5">
                        <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="group-hover/item:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-16 text-center">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
