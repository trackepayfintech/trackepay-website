import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Tag, ArrowRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Trackepay Blog — Software, Marketing & Business Insights",
  description:
    "Insights, tips, and strategies on software development, digital marketing, and business growth from the Trackepay team in Bhubaneswar.",
  path: "/blog",
  keywords: [
    "trackepay blog",
    "software development blog india",
    "digital marketing blog bhubaneswar",
  ],
});

const blogs = [
  {
    slug: "/top-strategies-for-effective-online-advertising-in-bhubaneswar",
    title:
      "Top Strategies for Effective Online Advertising in Bhubaneswar",
    image:
      "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/vault-corporate-blog.webp",
    date: "October 26, 2025",
    category: "Marketing",
  },

  

  // NEW BLOG ADDED
  {
    slug: "/smart-police-monitoring-system",
    title: "Khordha Police Mitra — Smart Citizen Assistance Platform",
    image:
      "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/odisha-police.webp",
    date: "May 15, 2026",
    category: "Government Tech",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
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
            {blogs.map((blog, index) => (
              <Link
                key={index}
                href={blog.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      {blog.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-slate-800 mb-4 group-hover:text-orange-500 transition-colors leading-snug">
                    {blog.title}
                  </h2>

                  <span className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}