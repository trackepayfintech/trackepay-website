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

export const metadata: Metadata = {
  title: "Web Designing & Development - Trackepay Fintech",
  description:
    "Elevate your brand online with expert Web & App Development. We craft responsive, cutting-edge websites and mobile apps.",
};

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Our 4-Step Process
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start justify-between gap-6 overflow-x-auto">

              {portfolioTimeline.map((step, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[220px] text-center relative transition hover:-translate-y-2"
                >

                  {/* Line */}
                  {i !== portfolioTimeline.length - 1 && (
                    <div className="absolute top-[22px] left-1/2 w-full h-[2px] bg-orange-200 z-0"></div>
                  )}

                  {/* Circle */}
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 mx-auto rounded-full bg-orange-500 text-white font-bold text-sm mb-4 shadow-md">
                    {i + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {step.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2 text-left">
                    {step.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-slate-600 text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

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
