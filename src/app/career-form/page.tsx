import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import DeftFormEmbed from "@/components/shared/DeftFormEmbed";

export const metadata: Metadata = {
  title: "Career Application | Trackepay",
  description:
    "Apply for a career at Trackepay. Fill out our career application form to join our growing team.",
  keywords: ["trackepay careers", "job application", "career application form", "IT jobs Bhubaneswar"],
  openGraph: {
    title: "Career Application | Trackepay",
    description: "Apply for a career at Trackepay. Fill out our career application form to join our growing team.",
    url: "https://www.trackepay.in/career-form/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Application | Trackepay",
    description: "Apply for a career at Trackepay. Fill out our career application form to join our growing team.",
  },
};

export default function CareerFormPage() {
  return (
    <>
      {/* Form Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Apply Now
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">
                Career Application
              </h1>
            </div>

            {/* Career Application Form */}
            <DeftFormEmbed formId="a4a4cc35-b561-4606-92ae-72c38ce5806d" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
