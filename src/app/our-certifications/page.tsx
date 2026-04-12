import type { Metadata } from "next";
import { Award, ShieldCheck } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Our Certifications | Trackepay",
  description:
    "Explore the certifications and quality standards achieved by Trackepay Fintech, demonstrating our commitment to excellence and industry best practices.",
  keywords: ["ISO certification", "quality certifications", "ISO 9001", "trackepay certifications", "quality standards"],
  openGraph: {
    title: "Our Certifications | Trackepay",
    description: "Explore the certifications and quality standards achieved by Trackepay Fintech, demonstrating our commitment to excellence and industry best practices.",
    url: "https://www.trackepay.in/our-certifications/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Certifications | Trackepay",
    description: "Explore the certifications and quality standards achieved by Trackepay Fintech, demonstrating our commitment to excellence and industry best practices.",
  },
};

const certifications = [
  {
    title: "ISO 9001 1st Surveillance",
    description:
      "Quality Management System certification demonstrating our commitment to consistent quality in products and services.",
  },
  {
    title: "ISO 9001 1st Surveillance",
    description:
      "Ongoing surveillance audit confirming continued compliance with international quality management standards.",
  },
  {
    title: "ISO 9001 1st Surveillance",
    description:
      "Verification of quality management processes ensuring customer satisfaction and continuous improvement.",
  },
];

export default function OurCertificationsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Quality Standards
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Certifications
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our commitment to quality and excellence is backed by industry-recognized
            certifications and standards.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50 border border-slate-200 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
                      <ShieldCheck className="w-8 h-8 text-orange-500" />
                    </div>
                    <Award className="w-10 h-10 text-orange-400 mx-auto" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
