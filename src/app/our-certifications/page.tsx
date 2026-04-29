import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Certifications — ISO 9001, ISO 27001 & Startup India | Trackepay",
  description:
    "Trackepay is ISO 9001:2015 and ISO 27001:2013 certified, and recognised under Startup India — proof of our quality and security standards.",
  path: "/our-certifications",
  keywords: [
    "iso 9001 certified software company",
    "iso 27001 certified india",
    "startup india recognised",
    "trackepay certifications",
  ],
});

const certifications = [
  {
    title: "ISO 9001:2015 Certification",
    description:
      "Quality Management System certification demonstrating our commitment to consistent quality.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/ISO-90012015-Certification.webp",
  },
  {
    title: "ISO 27001:2013 Certification",
    description:
      "Information Security Management certification ensuring strong data protection.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/ISO-270012013-Certification.webp",
  },
  {
    title: "Startup India Recognition",
    description:
      "Official recognition under Startup India initiative validating innovation.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Startup-India-Recognition.webp",
  },
  {
    title: "Startup Odisha Recognition",
    description:
      "Official recognition under Startup Odisha initiative validating innovation.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Startup-Odisha-Recognition.webp",
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Certifications
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Our commitment to quality and excellence is backed by industry-recognized certifications.
          </p>
        </div>
      </section>

      {/* Top 3 Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.slice(0, 3).map((cert, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="w-full h-72 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-6">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={600}
                    height={500}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {cert.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Single Centered Card */}
          <div className="flex justify-center mt-12">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition">
                
                <div className="w-full h-72 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-6">
                  <Image
                    src={certifications[3].image}
                    alt={certifications[3].title}
                    width={600}
                    height={500}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {certifications[3].title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {certifications[3].description}
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