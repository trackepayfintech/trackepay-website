import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Code,
  Smartphone,
  BarChart3,
  Megaphone,
  Palette,
  Users,
  UtensilsCrossed,
  Shield,
  Leaf,
  Activity,
  Search,
  Lightbulb,
  Rocket,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "IT Services in Bhubaneswar — Software, Web, Mobile & Marketing",
  description:
    "End-to-end IT services in Bhubaneswar including custom software development, web & mobile apps, digital marketing, branding, and analytics — by Trackepay.",
  path: "/services",
  keywords: [
    "it services bhubaneswar",
    "it company bhubaneswar",
    "software services bhubaneswar",
    "digital agency bhubaneswar",
    "best software company in bhubaneswar",
  ],
});

const methodology = [
  {
    icon: Search,
    title: "Identify",
    description:
      "We analyze your business needs and identify opportunities to define the right digital roadmap",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Our experts craft a growth-ready plan aligned with your goals for scalable growth",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "We build and deploy using modern technologies and agile-powered processes",
  },
  {
    icon: Puzzle,
    title: "Integration",
    description:
      "Seamlessly connect new digital solutions with existing workflows for smooth, trusted operations",
  },
];

const services = [
  {
    category: "IT Development",
    items: [
      {
        icon: Globe,
        title: "Web Design & Development",
        description:
          "Modern, responsive websites tailored to your brand and optimized for conversions.",
        href: "/web-designing-development",
      },
      {
        icon: Code,
        title: "Software & CRM",
        description:
          "Custom software and CRM solutions to streamline your business operations.",
        href: "/software-crm-development-services",
      },
      {
        icon: Smartphone,
        title: "Mobile Apps",
        description:
          "User-friendly, high-performance mobile applications for iOS and Android.",
        href: "/mobile-application-design-development",
      },
      {
        icon: BarChart3,
        title: "Data Analytics",
        description:
          "Harness the power of your data to make informed decisions and drive growth.",
        href: "/data-analytics-services",
      },
    ],
  },
  {
    category: "Marketing",
    items: [
      {
        icon: Megaphone,
        title: "Digital Marketing",
        description:
          "SEO, social media, paid ads, and email campaigns to grow your digital presence.",
        href: "/digital-marketing-services",
      },
      {
        icon: Palette,
        title: "Branding Packages",
        description:
          "Build a strong brand identity with logo, colors, messaging, and visual design.",
        href: "/branding-building-packages",
      },
    ],
  },
  {
    category: "Product",
    items: [
      {
        icon: Shield,
        title: "Government & Police",
        description:
          "Smart patrol management for law enforcement agencies.",
        href: "/government-police-solutions",
      },
      {
        icon: Users,
        title: "HR Management",
        description:
          "Streamline HR workflows with smart employee management and tracking solutions.",
        href: "/services",
      },
      {
        icon: UtensilsCrossed,
        title: "Restaurant Management",
        description:
          "End-to-end restaurant management from orders to billing and analytics.",
        href: "/services",
      },
      {
        icon: Leaf,
        title: "GreenBubble",
        description:
          "WhatsApp business automation for marketing, sales, and customer support.",
        href: "/services",
      },
      {
        icon: Activity,
        title: "Walytic",
        description:
          "Web analytics and tracking platform for data-driven business decisions.",
        href: "/services",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
                Transforming your business, digitally
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We help businesses evolve through smart digital solutions, innovative
                IT strategies, and automation tools that drive efficiency, growth,
                and scalability.
              </p>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/corporate-services-hero.webp"
                alt="Trackepay digital services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Methodology */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Numbered circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-orange-500/20">
                    {i + 1}
                  </div>
                  {/* Connecting line */}
                  {i < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(50%+2rem)] w-[calc(100%-0rem)] border-t-2 border-dashed border-orange-200" />
                  )}
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 lg:py-28 bg-bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From development to marketing and product solutions, we offer
              everything you need to grow digitally.
            </p>
          </div>

          {services.map((group) => (
            <div key={group.category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-bold text-slate-800">
                  {group.category}
                </h3>
                <div className="h-1 w-12 bg-orange-500 rounded-full" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.items.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
                      <service.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="text-slate-800 font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
