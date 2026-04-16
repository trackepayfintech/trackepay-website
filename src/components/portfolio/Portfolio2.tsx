"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

// This array acts as your database for the listing cards
const projects = [
  {
    slug: "sarai-2-0",
    category: "Govt & Law Enforcement",
    title: "Sarai 2.0: Real-Time Guest Monitoring System for Commissionerate Police",
    description: "A digital ecosystem for hotel compliance and public safety, enabling real-time alerts and seamless law enforcement collaboration.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/product-for-govt.webp", // Ensure path is correct
    tags: ["SaaS", "Public Safety", "Real-time Dashboard"],
  },
  
   {
    slug: "trackepay-ecosystem",
    category: "Digital Solutions",
    title: "The Trackepay Product Suite: CRM & WhatsApp Automation",
    description: "A dual-power ecosystem featuring Trackepay CRM for sales management and GreenBubble for Meta-powered communication.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/crm-product.webp", 
    tags: ["CRM", "WhatsApp API", "SaaS", "Automation"],
  },
  
  {
    slug: "walytic-whatsapp",
    category: "Developer Tools",
    title: "Walytic: WhatsApp Web API Infrastructure for Scale",
    description: "A comprehensive API platform for account connection, message automation, and bulk campaigns without per-message fees.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/walytic-product.webp", 
    tags: ["WhatsApp API", "Automation", "SaaS Infrastructure"],
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-20 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-medium">Portfolio</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Portfolio</h1>
          <p className="text-slate-500 mt-2 max-w-2xl">Explore our case studies and projects.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <Link key={index} href={`/portfolio/${item.slug}`} className="h-full">
              <div className="bg-white rounded-xl border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col group cursor-pointer">
                <div className="w-full h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-medium text-slate-900 bg-slate-100 px-2 py-1 rounded-full mb-2 w-fit">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-slate-900 mt-1 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 text-xs text-slate-900 font-medium">Read Case Study →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}