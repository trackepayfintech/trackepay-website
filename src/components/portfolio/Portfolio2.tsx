"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    slug: "sarai-2-0",
    category: "Govt & Law Enforcement",
    title: "Sarai 2.0: Real-Time Guest Monitoring System",
    description: "Digital ecosystem for hotel compliance and public safety for Commissionerate Police.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai2.0.webp",
    tags: ["SaaS", "Dashboard", "Real-time"],
  },
  {
    slug: "trackepay-crm-dashboard",
    category: "SaaS / Operations",
    title: "TrackePay: Unified Sales & Automation Hub",
    description: "Management interface visualizing real-time sales funnels and lead conversion metrics.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/crm-product2.webp",
    tags: ["CRM", "Analytics", "Automation"],
  },
  {
    slug: "greenbubble-whatsapp-automation",
    category: "Digital Solutions",
    title: "GreenBubble: WhatsApp Marketing Automation",
    description: "Advanced communication layer enabling automated sequences and AI-driven chatbots.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/WhatsApp-green-bubble.webp",
    tags: ["WhatsApp API", "Chatbot", "AI"],
  },
  {
    slug: "walytic-whatsapp",
    category: "Developer Tools",
    title: "Walytic: WhatsApp Web API Infrastructure",
    description: "Comprehensive API platform for account connection and bulk campaigns.",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/walytic-dashboard.webp",
    tags: ["API", "SaaS", "Messaging"],
  },
];

export default function PortfolioPage() {
  return (
   <div className="bg-[#F8FAFC] min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Portfolio</h1>
          <p className="text-slate-500 text-lg">Transforming ideas into digital reality through code and automation.</p>
        </header>
        
        {/* Updated to grid-cols-4 as per screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group h-full">
              <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                
                {/* Image Container with specific rounding */}
                <div className="relative aspect-video overflow-hidden m-2 rounded-[2rem]">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-200" 
                  />
                </div>

                <div className="p-6 pt-2 flex flex-col flex-grow">
                  {/* Category Tag */}
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.15em] mb-4 bg-blue-50/50 px-3 py-1 rounded-full w-fit">
                    {p.category}
                  </span>

                  {/* Title - reduced size for 4-column layout */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-1.5 mb-8 flex-wrap">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="mt-auto font-bold text-slate-900 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Case Study 
                    <ChevronRight className="w-4 h-4 transition-transform text-slate-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}