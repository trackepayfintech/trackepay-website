import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, ArrowLeft, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Khordha Police Mitra — Smart Citizen Assistance Platform",
  description:
    "Khordha Police Mitra is a smart citizen support and WhatsApp-based communication platform launched by Khordha Police for faster assistance and case resolution.",
  path: "/khordha-police-mitra-smart-citizen-platform",
  keywords: [
    "Khordha Police Mitra",
    "Odisha Police App",
    "WhatsApp police support",
    "smart policing Odisha",
    "citizen assistance platform",
    "Trackepay government solutions",
  ],
});

export default function BlogPostPage() {
  return (
    <>
      {/* Article */}
      <article className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>

              <ChevronRight className="w-3.5 h-3.5" />

              <Link
                href="/blog"
                className="hover:text-orange-500 transition-colors"
              >
                Blog
              </Link>

              <ChevronRight className="w-3.5 h-3.5" />

              <span className="text-slate-800 font-medium truncate">
                Khordha Police Mitra
              </span>
            </nav>

            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-orange-500 transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6 tracking-tight">
              Khordha Police Mitra — Smart Citizen Assistance Platform
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-orange-500" />
                </div>
                Trackepay Team
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                May 18, 2026
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/odisha-police2.webp"
                alt="Khordha Police Mitra"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                <p>
                  Khordha Police Mitra is a smart citizen assistance and digital
                  communication platform developed to strengthen the connection
                  between citizens and law enforcement agencies. The platform
                  was launched by Khordha Police to provide faster support,
                  improve accessibility, and simplify communication through
                  modern digital technology.
                </p>

                <p>
                  The application enables citizens to connect directly with
                  police support services through WhatsApp chat integration,
                  helping people raise complaints, seek assistance, and access
                  important public safety information instantly from their
                  mobile devices.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Smart WhatsApp-Based Citizen Support
                </h2>

                <p>
                  One of the major highlights of Khordha Police Mitra is its
                  intelligent WhatsApp communication system. Citizens can
                  interact with police support services using a familiar and
                  accessible platform without complex procedures or physical
                  visits to police stations.
                </p>

                <p>
                  The platform provides a simple and user-friendly experience
                  for reporting issues, requesting emergency support, receiving
                  updates, and accessing important services quickly through
                  automated communication channels.
                </p>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Instant WhatsApp-based communication support
                  </li>

                  <li>
                    Quick complaint and issue reporting system
                  </li>

                  <li>
                    Easy access to public safety information
                  </li>

                  <li>
                    Citizen-friendly digital assistance platform
                  </li>

                  <li>
                    Real-time communication with police support teams
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Faster Case Resolution & Public Assistance
                </h2>

                <p>
                  Khordha Police Mitra improves operational efficiency by
                  enabling faster response handling and streamlined case
                  management workflows. The platform supports authorities in
                  tracking citizen concerns, managing requests efficiently, and
                  improving communication transparency.
                </p>

                <p>
                  Through digital automation and centralized communication,
                  police teams can respond more effectively while citizens
                  receive quicker support and better service experiences.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Building Smarter Community Policing
                </h2>

                <p>
                  The platform represents a major step toward smart policing
                  and digital governance in Odisha. By integrating technology
                  with public services, Khordha Police Mitra promotes stronger
                  community engagement, improved accessibility, and better
                  trust between citizens and law enforcement agencies.
                </p>

                <p>
                  With modern communication tools and citizen-centric digital
                  services, Khordha Police Mitra contributes to building a
                  safer, smarter, and more connected society.
                </p>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}