import type { Metadata } from "next";

import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Careers | Trackepay",
  description:
    "Unlock your potential—explore growing career fields and find the path that aligns with your passion and skills at Trackepay.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-orange-50 to-slate-50 py-20 lg:py-28">
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

        </div>
        <div className="flex justify-center mt-7 px-4">
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl">
            <iframe
              src="https://share.deftform.com/a4a4cc35-b561-4606-92ae-72c38ce5806d?embed=1"
              className="w-full h-450 md:h-250 lg:h-405 border-0"
              loading="eager"
            />
          </div>
        </div>
      </section>


      <CTABanner />
    </>
  );
}
