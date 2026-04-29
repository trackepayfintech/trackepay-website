import type { Metadata } from "next";
import Link from "next/link";

import CTABanner from "@/components/shared/CTABanner";
import Portfolio2 from "@/components/portfolio/Portfolio2";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Software, Web & Mobile Projects by Trackepay",
  description:
    "Selected projects from Trackepay's software, web, and mobile work across fintech, e-commerce, government, and SaaS in India.",
  path: "/portfolio",
  keywords: [
    "trackepay portfolio",
    "software case studies india",
    "police software case study",
    "crm dashboard case study",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <Portfolio2 />
     <CTABanner />
     </>
  );
}