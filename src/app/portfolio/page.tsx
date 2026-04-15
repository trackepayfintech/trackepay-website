import type { Metadata } from "next";
import Link from "next/link";

import CTABanner from "@/components/shared/CTABanner";
import Portfolio2 from "@/components/portfolio/Portfolio2";



export default function PortfolioPage() {
  return (
    <>
      <Portfolio2 />
     <CTABanner />
     </>
  );
}