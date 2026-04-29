import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import CertificationGallery, {
  type Certification,
} from "@/components/shared/CertificationGallery";
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

const certifications: Certification[] = [
  {
    title: "ISO 9001:2015 Certification",
    description:
      "Quality Management System certification demonstrating our commitment to consistent quality.",
    image:
      "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/ISO-90012015-Certification.webp",
  },
  {
    title: "ISO 27001:2013 Certification",
    description:
      "Information Security Management certification ensuring strong data protection.",
    image:
      "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/ISO-270012013-Certification.webp",
  },
  {
    title: "Startup India Recognition",
    description:
      "Official recognition under Startup India initiative validating innovation.",
    image:
      "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Startup-India-Recognition.webp",
  },
  {
    title: "Startup Odisha Recognition",
    description:
      "Official recognition under Startup Odisha initiative validating innovation.",
    image:
      "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Startup-Odisha-Recognition.webp",
  },
];

export default function OurCertificationsPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Quality Standards
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Certifications
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Our commitment to quality and excellence is backed by industry-recognized certifications. Click any certificate to view it in full size.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <CertificationGallery certs={certifications} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
