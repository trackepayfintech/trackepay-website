import type { Metadata } from "next";
import { FileText } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

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
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              encType="multipart/form-data"
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Position Applied For <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a position</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Resume / CV <span className="text-orange-500">*</span>
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                />
                <p className="text-xs text-slate-400 mt-1">Accepted formats: PDF, DOC, DOCX</p>
              </div>
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={5}
                  placeholder="Tell us why you'd be a great fit..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow resize-vertical"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
