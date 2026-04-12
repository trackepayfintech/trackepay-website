import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageSquare, BarChart3, Shield, Users, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio | Trackepay",
  description:
    "Explore our portfolio of digital solutions, software products, and successful client projects at Trackepay.",
  keywords: ["trackepay portfolio", "software projects", "digital solutions portfolio", "client projects", "case studies"],
  openGraph: {
    title: "Portfolio | Trackepay",
    description: "Explore our portfolio of digital solutions, software products, and successful client projects at Trackepay.",
    url: "https://www.trackepay.in/portfolio/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Trackepay",
    description: "Explore our portfolio of digital solutions, software products, and successful client projects at Trackepay.",
  },
};

const portfolioItems = [
  {
    title: "GreenBubble",
    category: "SaaS Product",
    description: "Enterprise WhatsApp Business API platform for automated messaging, broadcasting, and AI-powered chat assistance.",
    href: "/greenbubble-whatsapp-business-api",
    icon: MessageSquare,
  },
  {
    title: "Walytic",
    category: "SaaS Product",
    description: "Privacy-first web analytics platform providing real-time visitor insights without compromising user data.",
    href: "/walytic",
    icon: BarChart3,
  },
  {
    title: "Smart Patrol Management",
    category: "Government Solution",
    description: "Mission-critical patrol management system deployed across 50+ police stations for Indian law enforcement.",
    href: "/government-police-solutions",
    icon: Shield,
  },
  {
    title: "HR Management System",
    category: "Enterprise Software",
    description: "Comprehensive HRMS streamlining recruitment, payroll, attendance, and employee lifecycle management.",
    href: "/hr-management-system",
    icon: Users,
  },
  {
    title: "Restaurant Management System",
    category: "Enterprise Software",
    description: "End-to-end restaurant operations platform covering orders, billing, kitchen workflow, and inventory.",
    href: "/hotel-management-system",
    icon: UtensilsCrossed,
  },
  {
    title: "Attendance Management System",
    category: "Enterprise Software",
    description: "Automated check-in system with biometric integration, shift tracking, and leave management.",
    href: "/attendance-management-system",
    icon: Clock,
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800 font-medium">Portfolio</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Portfolio
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-12">
            Explore the products and solutions we have built -- from SaaS platforms to enterprise software and government-grade systems.
          </p>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 group-hover:gap-2.5 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
