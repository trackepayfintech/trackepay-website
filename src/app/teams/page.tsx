import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/shared/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Team — Trackepay Leadership & Engineers",
  description:
    "Meet the people behind Trackepay — engineers, designers, and strategists building software and digital solutions from Bhubaneswar.",
  path: "/teams",
  keywords: [
    "trackepay team",
    "trackepay leadership",
    "software engineers bhubaneswar",
  ],
});

const teamMembers = [
  {
    name: "Diptendu Shekhar Nayak",
    role: "Director",
    initials: "DN",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Diptendu-Shekhar-Nayak.webp",
    quote:
      "At Trackepay, we recognize the distinct challenges faced by small and medium fintech businesses. Our goal is to provide innovative, accessible solutions that empower these organizations to compete and thrive in today's digital economy.",
  },
  {
    name: "Biswajit Pradhan",
    role: "Co-Founder, CTO",
    initials: "BP",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Biswajit-Pradhan.webp",
    quote:
      "Our software streamlines all aspects of your business operations, from accounting and payroll to invoicing and payments. We build tools that simplify complexity and let you focus on growth.",
  },
  {
    name: "Biswajit Sahoo",
    role: "Business Analytics",
    initials: "BS",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Biswajit-Sahoo.webp",
    quote:
      "We believe that every business, regardless of size, should have access to affordable and scalable software solutions. Data-driven decisions are the backbone of sustainable growth.",
  },
  {
    name: "Ashish Kumar Puntia",
    role: "Senior Developer",
    initials: "AP",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Ashish-Kumar-Puntia.webp",
    quote:
      "We know that no two businesses are the same, and that's why we offer customized software solutions tailored to your specific needs. Every line of code we write is purposeful.",
  },
];

const clientLogos = [
  { src: "/images/clients/digital-domination.webp", alt: "Digital Domination" },
  { src: "/images/clients/nuancenext.webp", alt: "NuanceNext" },
  { src: "/images/clients/client3.png", alt: "Client" },
  { src: "/images/clients/pulse-prime.png", alt: "Pulse Prime" },
  { src: "/images/clients/bikaash-baahan.png", alt: "Bikaash Baahan" },
  { src: "/images/clients/logowa.png", alt: "Logowa" },
  { src: "/images/clients/valeroso.png", alt: "Valeroso" },
];

export default function TeamsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            Meet the Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto tracking-tight">
            Our Team
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            With you throughout the entire process&mdash;from deployment to
            continuous support and learning. Access a trusted collection of
            insights, tools, and expertise from passionate members of our
            growing community.
          </p>
        </div>
      </section>

      {/* Team Grid - 2x2 */}
      <section id="team" className="py-20 lg:py-28 bg-[#f5f6f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Avatar placeholder */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[260px] h-[320px] md:w-[300px] md:h-[360px] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <img
                    src={member.photo}

                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mt-2 mb-4">
                  {member.role}
                </p>

                <p className="text-slate-500 leading-relaxed text-base">
                  {member.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos - Marquee */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-10">
            Trusted by industry leaders
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

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
