import type { Metadata } from "next";
import { Award } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Careers | Trackepay",
  description:
    "Unlock your potential—explore growing career fields and find the path that aligns with your passion and skills at Trackepay.",
  keywords: ["careers at trackepay", "IT jobs", "software developer jobs", "Bhubaneswar jobs", "tech careers India"],
  openGraph: {
    title: "Careers | Trackepay",
    description: "Unlock your potential—explore growing career fields and find the path that aligns with your passion and skills at Trackepay.",
    url: "https://www.trackepay.in/careers/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Trackepay",
    description: "Unlock your potential—explore growing career fields and find the path that aligns with your passion and skills at Trackepay.",
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6 tracking-tight">
            Careers
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Unlock your potential — explore growing career fields and find the
            path that aligns with your passion and skills.
          </p>
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-500" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-slate-800">4 Years</p>
              <p className="text-slate-500 text-sm">of service</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
