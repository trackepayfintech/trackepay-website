import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Talent Acquisition & Recruitment Services in India — Trackepay",
  description:
    "Hire faster with Trackepay's talent acquisition services. Tech, sales, and operations roles filled across Bhubaneswar and pan-India.",
  path: "/talent-acquisition",
  keywords: [
    "talent acquisition india",
    "recruitment services bhubaneswar",
    "hiring agency india",
    "tech recruitment india",
  ],
});

export default function TalentAcquisitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-[#1a1850] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 font-medium">Talent Acquisition</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Talent <span className="text-orange-400">Acquisition</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Find, attract, and retain the best talent for your organization with
              our comprehensive recruitment and staffing solutions.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
