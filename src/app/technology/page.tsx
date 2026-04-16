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
  ArrowRight,
  ChevronRight,
  Mail,
  User2, // ✅ alias fix
  Settings,

} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Technology - Trackepay Fintech",
  description:
    "Smart digital solutions, innovative IT strategies, and automation tools that drive efficiency, growth, and scalability.",
};

const serviceCards = [
  {
    icon: Globe,
    title: "Web Designing & Development",
    description:
      "Modern, responsive websites tailored to your brand, optimized for performance and conversions across all devices.",
    href: "/web-designing-development",
  },
  {
    icon: Code,
    title: "Software and CRM Development",
    description:
      "Custom solutions to streamline operations, automate workflows, and manage customer relationships effectively.",
    href: "/software-crm-development-services",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Design & Development",
    description:
      "User-friendly, high-performance mobile apps for iOS and Android that keep your users engaged.",
    href: "/mobile-application-design-development",
  },
  {
    icon: BarChart3,
    title: "Data Analytics Services",
    description:
      "Improve decision-making, optimize performance, and uncover insights with our comprehensive data analytics solutions.",
    href: "/data-analytics-services",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    description:
      "SEO, social media, paid ads, email campaigns, and content marketing to grow your digital presence and reach.",
    href: "/digital-marketing-services",
  },
  {
    icon: Palette,
    title: "Branding Building Packages",
    description:
      "Logo, colors, messaging, and visuals that build a cohesive and memorable brand identity for your business.",
    href: "/branding-building-packages",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Deliver the right message at the right time with smart email automation that engages users and turns prospects into customers.",
    href: "/data-analytics-services",
  },
  {
    icon: User2,
    title: "LinkedIn Outreach",
    description:
      "Connect with the right audience through personalized LinkedIn outreach strategies that build relationships, generate leads, and drive business growth.",
    href: "/digital-marketing-services",
  },
  {
    icon: Settings,
    title: "Costom Application Devlopment",
    description:
      "Transform your ideas into powerful digital solutions with custom-built applications designed for performance, scalability, and innovation.",
    href: "/branding-building-packages",
  },
];

const infraFeatures = [
  {
    image: "/images/wp/vault-hosting-technology-features-icon-1.webp",
    title: "Smart App Integration",
    description:
      "Seamlessly connect your apps and tools for unified operations and smooth data flow.",
  },
  {
    image: "/images/wp/vault-hosting-technology-features-icon-2.webp",
    title: "Custom Domain Setup",
    description:
      "Professional custom domain configuration to establish your brand presence online.",
  },
  {
    image: "/images/wp/vault-hosting-technology-features-icon-3.webp",
    title: "24/7 Data Security",
    description:
      "Enterprise-grade security protocols to protect your data around the clock.",
  },
  {
    image: "/images/wp/vault-hosting-technology-features-icon-4.webp",
    title: "User-Friendly Dashboard",
    description:
      "Intuitive dashboards that make managing your business easy and efficient.",
  },
  {
    image: "/images/wp/vault-hosting-technology-features-icon-5.webp",
    title: "Flexible Resources",
    description:
      "Scalable infrastructure that grows with your business needs without disruption.",
  },
  {
    image: "/images/wp/vault-hosting-technology-features-icon-6.webp",
    title: "Global Cloud Access",
    description:
      "Access your solutions from anywhere in the world with reliable cloud-based infrastructure.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/technology.webp" // 👉 put your image in public/images
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Gradient Overlay (IMPORTANT for readability) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#110F33]/90 via-[#15133d]/85 to-[#1a1850]/90" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left Side Image */}
            <div>
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-300">Technology</span>
              </nav>

              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Technology
                </h1>

                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                  Smart digital solutions, innovative IT strategies, and automation
                  tools that drive efficiency, growth, and scalability for modern
                  businesses.
                </p>
              </div>
            </div>

            <div className="w-full">
              <img
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/digital-technology.webp" // put your image in public folder
                alt="Technology"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Service Cards - 3x2 Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Our Technology Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  <card.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Security */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Enterprise-Grade
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Infrastructure & Security
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Built on reliable, secure, and scalable infrastructure to power your
              digital transformation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {infraFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900/5 flex items-center justify-center mb-5">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Image */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Trusted Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Built on Trust & Reliability
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Build.webp"
              alt="Trackepay trusted hosting and technology platform"
              width={1024}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
