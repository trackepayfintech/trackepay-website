import type { Metadata } from "next";
import { FileText } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Career Application | Trackepay",
  description:
    "Apply for a career at Trackepay. Fill out our career application form to join our growing team.",
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

            {/* EMBED FORM PLACEHOLDER */}
            <div className="min-h-[500px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 text-sm font-medium">
                  Career application form will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
