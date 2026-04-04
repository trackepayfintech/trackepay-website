import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  ShieldCheck,
  Heart,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "About Us - Trackepay Fintech (OPC) Pvt Ltd",
  description:
    "Learn about Trackepay's mission to shape a better future through smart, modern engineering. Founded in 2021, we deliver innovative digital solutions.",
};

const values = [
  {
    Icon: Lightbulb,
    title: "Innovation",
    description:
      "We push boundaries with creative, forward-thinking solutions that leverage the latest technologies.",
  },
  {
    Icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency and honesty guide every interaction, building trust with our clients and partners.",
  },
  {
    Icon: Heart,
    title: "Customer Focus",
    description:
      "Every decision we make is driven by the goal of maximizing value and satisfaction for our clients.",
  },
  {
    Icon: Star,
    title: "Quality",
    description:
      "We deliver enterprise-grade quality in every project, maintaining the highest standards of craftsmanship.",
  },
  {
    Icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients and as a team, believing the best solutions come from partnership.",
  },
  {
    Icon: TrendingUp,
    title: "Growth",
    description:
      "We are committed to continuous learning and helping our clients scale their businesses sustainably.",
  },
];

const teamMembers = [
  { name: "Biswajit Pradhan", role: "CTO", initials: "BP", photo: "/images/wp/IMG_3541.jpeg" },
  { name: "Biswajit Sahoo", role: "Business Analytics", initials: "BS", photo: "/images/wp/Untitled-design-11.png" },
  { name: "Ashish Ku Puntia", role: "Software Developer", initials: "AP", photo: "/images/wp/Untitled-design-36.png" },
  {
    name: "MD Noor Alam Quadri",
    role: "Software Developer",
    initials: "MQ",
    photo: "/images/wp/Untitled-design-37.png",
  },
  { name: "Abhilipsa Das", role: "HR Generalist", initials: "AD", photo: "/images/wp/Untitled-design-19.png" },
];

const milestones = [
  {
    year: "2021",
    title: "Founded with Vision",
    description:
      "Trackepay was established with a mission to innovate and deliver smart digital solutions for modern businesses.",
    image: "/images/wp/corporate-timeline-2.webp",
  },
  {
    year: "2022",
    title: "First Product Launch",
    description:
      "Launched our first product with strong industry adoption, gaining early traction and positive client feedback.",
    image: "/images/wp/corporate-timeline-3.webp",
  },
  {
    year: "2023",
    title: "Market Expansion",
    description:
      "Expanded into new markets and formed strategic partnerships to accelerate growth and broaden service offerings.",
    image: "/images/wp/corporate-timeline-4.webp",
  },
  {
    year: "2024",
    title: "Remote Work Integration",
    description:
      "Embraced a remote-first culture, enabling our team to collaborate seamlessly across geographies.",
    image: "/images/wp/corporate-inovations-1.webp",
  },
  {
    year: "2025",
    title: "Sustainability & Community",
    description:
      "Shifted focus toward sustainability initiatives and meaningful community engagement through technology.",
    image: "/images/wp/corporate-inovations-2.webp",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto tracking-tight">
            Shaping a better future through smart, modern engineering
          </h1>

          {/* Stats Row */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-slate-900">4+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Years of Service</p>
            </div>
            <div className="hidden sm:block w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-slate-900">200+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Projects Completed</p>
            </div>
            <div className="hidden sm:block w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-slate-900">150+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Driving meaningful change through innovation
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                We are Trackepay Fintech (OPC) Pvt Ltd, driving meaningful
                change through innovation, integrity, and commitment. Founded in
                2021, we bring together a team of passionate engineers, designers,
                and strategists who share a common goal: building technology that
                works for people.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our expertise spans fintech, custom software development, digital
                marketing, and business intelligence. From billing automation and
                payment tracking to custom CRM and mobile applications, we help
                small and medium businesses digitize their operations and scale
                with confidence.
              </p>
            </div>
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -z-10" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/wp/pexels-rdne-7581110-scaled.jpg"
                  alt="Trackepay team in a meeting room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              The principles that guide everything we do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 mb-5">
                  <item.Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our People
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              The people behind Trackepay who make innovation happen every day.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {member.photo ? (
                  <div className="relative mx-auto mb-4 h-20 w-20 rounded-full overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#110F33] to-[#1a1850] text-white text-xl font-bold">
                    {member.initials}
                  </div>
                )}
                <h3 className="text-sm font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Key milestones that define our growth
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 mt-1 z-10">
                    <div className="h-4 w-4 rounded-full bg-orange border-4 border-white shadow-sm" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-1/2 ${
                      i % 2 === 0
                        ? "sm:pr-12 sm:text-right"
                        : "sm:pl-12 sm:text-left"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 ${
                        i % 2 === 0 ? "sm:ml-auto" : ""
                      }`}
                    >
                      <span className="text-sm font-bold text-orange">
                        {m.year}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline image */}
                  {m.image ? (
                    <div className="hidden sm:block sm:w-1/2">
                      <div
                        className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm ${
                          i % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
                        }`}
                      >
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="hidden sm:block sm:w-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
