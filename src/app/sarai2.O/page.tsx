import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, ArrowLeft, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sarai 2.0 Review — Smart Hotel Intelligence & Police Monitoring",
  description:
    "Sarai 2.0 is a smart hotel guest monitoring and police intelligence platform designed to improve public safety and law enforcement coordination.",
  path: "/sarai-2-review",
  keywords: [
    "Sarai 2.0",
    "Hotel Intelligence Platform",
    "Police Monitoring System",
    "Odisha Police Technology",
    "Government Tech Solutions",
    "Trackepay Projects",
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
                Sarai 2.0
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
              Sarai 2.0 Review — Smart Hotel Intelligence & Police Monitoring
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
                May 19, 2026
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Sarai2.O.webp"
                alt="Sarai 2.0"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                <p>
                  Sarai 2.0 is an advanced hotel intelligence and police
                  monitoring platform designed to improve public safety,
                  strengthen digital surveillance systems, and enhance
                  coordination between hotels and law enforcement agencies.
                </p>

                <p>
                  Developed as a smart governance solution, the platform helps
                  authorities monitor hotel guest activities in real time while
                  enabling hotels to manage digital guest registration and
                  compliance through a centralized system.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Real-Time Hotel Monitoring System
                </h2>

                <p>
                  Sarai 2.0 allows hotels to digitally register guest details
                  and instantly share important information with police
                  departments through secure cloud-based infrastructure. The
                  system minimizes manual paperwork and enables faster access
                  to guest records whenever required.
                </p>

                <p>
                  Authorities can monitor hotel activities, identify suspicious
                  entries, and receive real-time alerts through a centralized
                  dashboard designed for operational efficiency and quick
                  response handling.
                </p>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Smart hotel guest registration platform
                  </li>

                  <li>
                    Real-time monitoring and alerts
                  </li>

                  <li>
                    Centralized dashboard for police departments
                  </li>

                  <li>
                    Automated suspect and watchlist detection
                  </li>

                  <li>
                    Digital reporting and analytics system
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Intelligent Analytics & Reporting
                </h2>

                <p>
                  The platform includes modern analytics and reporting tools
                  that help authorities monitor trends, hotel occupancy, and
                  guest activity statistics efficiently. The data-driven system
                  improves operational visibility and supports faster
                  decision-making for law enforcement teams.
                </p>

                <p>
                  With advanced digital workflows and automation, Sarai 2.0
                  helps improve coordination between hotels and police
                  authorities while ensuring better transparency and compliance.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Strengthening Smart Governance
                </h2>

                <p>
                  Sarai 2.0 represents a major step toward smart governance and
                  digital policing infrastructure in Odisha. By integrating
                  technology with law enforcement operations, the platform
                  improves urban security and creates a more connected public
                  safety ecosystem.
                </p>

                <p>
                  The solution demonstrates how modern digital platforms can
                  transform traditional monitoring systems into intelligent,
                  scalable, and citizen-focused public safety solutions.
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

