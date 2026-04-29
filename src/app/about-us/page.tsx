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
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Trackepay — Software & Digital Solutions Company in Bhubaneswar",
  description:
    "Founded in 2021, Trackepay Fintech (OPC) Pvt Ltd is a Bhubaneswar-based software and digital solutions company serving 150+ businesses across India.",
  path: "/about-us",
  keywords: [
    "about trackepay",
    "software company in bhubaneswar",
    "trackepay fintech",
    "it company odisha",
  ],
});

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
  {
    name: "Biswajit Pradhan",
    role: "CTO",
    desc: "Visionary leader with 10+ years in B2B marketing. Drives strategic growth initiatives and oversees client success across all verticals.",
    initials: "BP",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Biswajit-Pradhan.webp",
    linkedin: "https://linkedin.com/in/biswajit-pradhan",
  },
  {
    name: "Biswajit Sahoo",
    role: "Business Analytics",
    desc: "Data-driven strategist specializing in market research, performance analytics, and ROI optimization for maximum campaign effectiveness.",
    initials: "BS",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Biswajit-Sahoo2.webp",
    linkedin: "https://www.linkedin.com/in/biswajit-s-ahoo/",
  },
  {
    name: "Ashish Kumar Puntia",
    role: "Software Developer",
    desc: "Focused on building scalable and efficient applications with modern web technologies and clean architecture.",
    initials: "AP",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Ashish-Kumar-Puntia.webp",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-puntia/",
  },

  {
    name: "Abhilipsa Das",
    role: "HR Generalist",
    desc: "Focused on people-first strategies, enhancing workplace productivity, boosting employee engagement and supporting company vision.",
    initials: "AD",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Abhilipsa-Das.webp",
    linkedin: "https://www.linkedin.com/in/abhilipsa-das-1a962a125/",
  },
  {
    name: "Sonalisha Pramanik ",
    role: "Operations Executive- Admin and Social Media",
    desc: "Operations Executive managing admin processes and social media to drive efficiency and brand growth.",
    initials: "SP",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Sonalisha-Pramanik.webp",
    linkedin: "https://www.linkedin.com/in/sonalisha-pramanik/",
  },
   {
    name: "Jyatirmoy Dey ",
    role: "Business Analytics",
    desc: "Data-driven strategist specializing in market research, performance analytics, and ROI optimization for maximum campaign effectiveness.",
    initials: "JD",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Jyatirmoy-Dey.webp",
    linkedin: "https://www.linkedin.com/in/jyatirmoy10/",
  },
   {
    name: "Sidhant Sankar Das ",
    role: "Associate Web Developer",
    desc: "Supports the development of responsive web applications, fixes bugs, and collaborates with the team to deliver high-quality user experiences.",
    initials: "SD",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Sidhant-Sankar-Das.webp",
    linkedin: "https://www.linkedin.com/in/sidhant-sankar-das-3412a7299/",
  },
   {
    name: "Chinmaya Swain ",
    role: "Associate Web Developer",
    desc: "Supports the development of responsive web applications, fixes bugs, and collaborates with the team to deliver high-quality user experiences.",
    initials: "CS",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Chinmaya-Swain.webp",
    linkedin: "https://www.linkedin.com/in/chinmaya-swain-75a81a292/",
  },
   {
    name: "Subham Sidhartha Sahoo ",
    role: "Associate Web Developer",
    desc: "Supports the development of responsive web applications, fixes bugs, and collaborates with the team to deliver high-quality user experiences.",
    initials: "SS",
    photo: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Subham-Sidhartha-Sahoo.webp",
    linkedin: "https://www.linkedin.com/in/subham-sidhartha-sahoo-87a2a9372/",
  },
   
];

const milestones = [
  {
    year: "2025",
    title: "Sustainability & Community",
    description:
      "Shifted focus toward sustainability initiatives and meaningful community engagement through technology.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/corporate-timeline-1.webp",
  },
  {
    year: "2024",
    title: "Remote Work Integration",
    description:
      "Embraced a remote-first culture, enabling our team to collaborate seamlessly across geographies.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/corporate-timeline-2.webp",
  },
  {
    year: "2023",
    title: "Market Expansion",
    description:
      "Expanded into new markets and formed strategic partnerships to accelerate growth and broaden service offerings.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/corporate-timeline-3.webp",
  },
  {
    year: "2022",
    title: "First Product Launch",
    description:
      "Launched our first product with strong industry adoption, gaining early traction and positive client feedback.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/corporate-inovations-1%20(2).webp",
  },
  {
    year: "2021",
    title: "Founded with Vision",
    description:
      "Trackepay was established with a mission to innovate and deliver smart digital solutions for modern businesses.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/corporate-inovation.webp",
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
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-linear-to-br from-orange-100 to-orange-200 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-orange-100 to-orange-200 rounded-full -z-10" />
              <div className="relative aspect-8/5 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/inovation-for-impact.webp"
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
      <section className="py-20 lg:py-28 bg-[#f5f6f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
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

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-slate-300/60 transition-all duration-300 overflow-hidden"
              >
                {/* Brand Header */}
                <div className="h-24 bg-gradient-to-br from-[#F48120] to-[#d97218] relative">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                  {/* Avatar */}
                  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-white bg-slate-100 shadow-md overflow-hidden flex items-center justify-center">
                     
                      <img
                        src={member.photo}
                        alt={member.initials}
                        className="w-full h-full object-cover "
                      />
                      
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-16 pb-6 px-6 text-center">
                  <h3 className="text-base font-semibold text-slate-900">
                    {member.name}
                  </h3>

                  <div className="w-8 h-0.5 bg-[#F48120] mx-auto my-2.5 rounded-full" />

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-orange-50 text-[#F48120] font-medium mb-4">
                    {member.role}
                  </span>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {member.desc}
                  </p>

                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 w-full flex items-center justify-center gap-2 text-sm bg-slate-900 text-white py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.45 20.45h-3.554v-5.568c0-1.327-.024-3.035-1.85-3.035-1.853 0-2.137 1.445-2.137 2.939v5.664H9.355V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.455v6.284zM5.337 7.433a2.06 2.06 0 110-4.121 2.06 2.06 0 010 4.121zM6.964 20.45H3.708V9h3.256v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  ) : (
                    <div className="mt-5 w-full text-sm bg-slate-100 text-slate-400 py-2.5 rounded-lg">
                      Not Available
                    </div>
                  )}
                </div>
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
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 mt-1 z-10">
                    <div className="h-4 w-4 rounded-full bg-orange border-4 border-white shadow-sm" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:pl-12 sm:text-left"
                      }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 ${i % 2 === 0 ? "sm:ml-auto" : ""
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
                        className={`relative aspect-16/10 rounded-2xl overflow-hidden shadow-sm ${i % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
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






