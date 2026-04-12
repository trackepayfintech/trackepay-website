import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Tag, ArrowRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Blog | Trackepay",
  description:
    "Read the latest insights, tips, and strategies on digital marketing, software development, and business growth from Trackepay.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Our Blog
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Insights, strategies, and updates from the Trackepay team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card */}
            <Link
              href="/top-strategies-for-effective-online-advertising-in-bhubaneswar"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/wp/vault-corporate-blog-post-3-1024x682.webp"
                  alt="Top Strategies for Effective Online Advertising in Bhubaneswar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" />
                    October 26, 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    Uncategorized
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4 group-hover:text-orange-500 transition-colors leading-snug">
                  Top Strategies for Effective Online Advertising in Bhubaneswar
                </h2>
                <span className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
