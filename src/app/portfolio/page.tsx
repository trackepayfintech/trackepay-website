import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio | Trackepay",
  description:
    "Explore our portfolio of digital solutions, software products, and successful client projects at Trackepay.",
};

// ✅ R2 BASE URL (correct)
const R2_BASE = "https://pub-ae82723cd9454ebfb0d0731790b33bd7.r2.dev";

// ✅ Portfolio Data
const projects = [
  {
    title: "Company Portfolio",
    description: "View our uploaded PDF portfolio showcasing our expertise and successful projects.",
    image: "/images/wp/Screenshot 2026-04-14 131844.png", // temporary image
    link: `${R2_BASE}/ocac-empanelment-2026.pdf.pdf`,
    type: "pdf",
  },
];

export default function PortfolioPage() {
  return (
    <>
    <section className="py-20 lg:py-28 bg-[#F8FAFC] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-medium">Portfolio</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-800 mb-10">
          Portfolio
        </h1>

        {/* Resume Button */}
        {/* <div className="mb-10">
          <Link
            href={`${R2_BASE}/ocac-empanelment-2026.pdf.pdf`}
            target="_blank"
            className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
          >
            View Resume
          </Link>
        </div> */}

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {project.description}
                </p>

                {/* Button */}
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center mt-4 text-orange-500 text-sm"
                >
                  View PDF
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <CTABanner />
     </>
  );
}