import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FolderOpen } from "lucide-react";
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-12 tracking-tight">
            Portfolio
          </h1>

          {/* Empty State */}
          <div className="bg-white border border-slate-200 rounded-2xl py-24 text-center shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-6">
              <FolderOpen className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              No portfolio items yet
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We are working on showcasing our best projects. Check back soon for updates.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
