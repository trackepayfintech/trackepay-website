"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

/* ────────────── Data ────────────── */

const solutionsData = [
  {
    title: "Government & Public Sector",
    dotColor: "bg-emerald-500",
    items: [
      { label: "Smart Police Solutions", href: "/government-police-solutions", desc: "AI-powered law enforcement tools" },
      { label: "Attendance & Workforce", href: "/attendance-management-system", desc: "Biometric tracking systems" },
      { label: "Custom Govt Solutions", href: "/contact", desc: "Tailored public sector tech" },
    ],
  },
  {
    title: "Enterprise & Private",
    dotColor: "bg-[#F48120]",
    items: [
      { label: "HR Management System", href: "/hr-management-system", desc: "End-to-end workforce management" },
      { label: "Restaurant Management", href: "/hotel-management-system", desc: "POS, inventory & operations" },
      { label: "GreenBubble", href: "/greenbubble-whatsapp-business-api", desc: "WhatsApp Business API platform" },
      { label: "Walytic", href: "/walytic", desc: "Web & mobile analytics" },
    ],
  },
  {
    title: "IT Services",
    dotColor: "bg-blue-500",
    items: [
      { label: "Web Design & Development", href: "/web-designing-development", desc: "Modern, responsive websites" },
      { label: "Software & CRM", href: "/software-crm-development-services", desc: "Custom business software" },
      { label: "Mobile App Development", href: "/mobile-application-design-development", desc: "iOS & Android applications" },
      { label: "Data Analytics", href: "/data-analytics-services", desc: "Business intelligence & insights" },
    ],
  },
  {
    title: "Marketing & Branding",
    dotColor: "bg-purple-500",
    items: [
      { label: "Digital Marketing", href: "/digital-marketing-services", desc: "SEO, PPC & social media" },
      { label: "Branding Packages", href: "/branding-building-packages", desc: "Identity & brand strategy" },
    ],
  },
];

const aboutLinks = [
  { label: "Our Company", href: "/about-us" },
  { label: "Our Team", href: "/teams" },
  { label: "Certifications", href: "/our-certifications" },
  { label: "Portfolio", href: "/portfolio" },
];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Blog", href: "/blog" },
];

/* ────────────── Main Component ────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileSolutionsOpen(false);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;
  const allSolutionHrefs = solutionsData.flatMap((col) => col.items.map((i) => i.href));

  return (
    <>
      {/* Inline Styles for Animations (If not in tailwind.config.js) */}
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-slide-in-drawer { animation: slideIn 0.3s ease-out forwards; }
        .nav-link-base { 
          @apply px-4 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200;
        }
      `}</style>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm" : "bg-white/80 backdrop-blur-sm"
        } border-b border-slate-200/70`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logos/logo-dark.png"
                alt="Trackepay"
                width={140}
                height={36}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/" label="Home" active={isActive("/")} />

              {/* About Dropdown */}
              <div className="relative group">
                <button className={`nav-link-base flex items-center gap-1 ${aboutLinks.some(l => isActive(l.href)) ? "text-slate-900" : ""}`}>
                  About <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-3">
                  <div className="w-56 rounded-xl bg-white shadow-xl ring-1 ring-slate-200 py-2">
                    {aboutLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={`block px-4 py-2 text-[13px] font-medium ${isActive(link.href) ? "text-[#F48120] bg-orange-50" : "text-slate-600 hover:bg-slate-50"}`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Mega Menu */}
              <div className="relative group">
                <button className={`nav-link-base flex items-center gap-1 ${allSolutionHrefs.some(href => isActive(href)) ? "text-slate-900" : ""}`}>
                  Solutions <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full -left-64 pt-3">
                  <div className="w-[780px] rounded-xl bg-white shadow-xl ring-1 ring-slate-200 p-8 grid grid-cols-4 gap-6">
                    {solutionsData.map((column) => (
                      <div key={column.title}>
                        <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b">
                          <span className={`h-1.5 w-1.5 rounded-full ${column.dotColor}`} /> {column.title}
                        </h4>
                        <ul className="space-y-1">
                          {column.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className={`block p-2 -mx-2 rounded-lg ${isActive(item.href) ? "bg-orange-50" : "hover:bg-slate-50"}`}>
                                <span className={`block text-[13px] font-medium ${isActive(item.href) ? "text-[#F48120]" : "text-slate-700"}`}>{item.label}</span>
                                <span className="block text-[11px] text-slate-400">{item.desc}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
              ))}
            </nav>

            {/* Mobile Toggle + CTA */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden lg:inline-flex bg-slate-900 text-white text-[13px] font-semibold rounded-lg px-5 py-2.5 hover:bg-slate-800 transition-all">
                Get in touch <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] z-[60] h-[calc(100vh-72px)]">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fade-in" onClick={closeMobile} />
            
            {/* Drawer Content */}
            <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto animate-slide-in-drawer z-10">
              <div className="p-6 space-y-2">
                <MobileLink href="/" label="Home" active={isActive("/")} onClick={closeMobile} />
                
                {/* Mobile About */}
                <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="w-full flex items-center justify-between py-3 text-[15px] font-medium text-slate-700">
                  About <ChevronDown className={`h-4 w-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 pb-2 space-y-2 border-l-2 border-slate-100 ml-2">
                    {aboutLinks.map(l => (
                      <Link key={l.href} href={l.href} onClick={closeMobile} className={`block py-1 text-[14px] ${isActive(l.href) ? "text-[#F48120]" : "text-slate-500"}`}>{l.label}</Link>
                    ))}
                  </div>
                )}

                {/* Mobile Solutions */}
                <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="w-full flex items-center justify-between py-3 text-[15px] font-medium text-slate-700">
                  Solutions <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="space-y-4 pl-2">
                    {solutionsData.map(col => (
                      <div key={col.title} className="pl-4 border-l-2 border-slate-100">
                        <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">{col.title}</p>
                        <div className="flex flex-col gap-2">
                          {col.items.map(item => (
                            <Link key={item.href} href={item.href} onClick={closeMobile} className={`text-[14px] ${isActive(item.href) ? "text-[#F48120]" : "text-slate-500"}`}>{item.label}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="h-px bg-slate-100 my-4" />
                {navLinks.map(l => <MobileLink key={l.href} {...l} active={isActive(l.href)} onClick={closeMobile} />)}
                
                <Link href="/contact" onClick={closeMobile} className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white rounded-lg py-4 mt-4 font-semibold">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ────────────── Sub-components ────────────── */

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className={`nav-link-base relative ${active ? "text-slate-900" : ""}`}>
      {label}
      {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 bg-[#F48120] rounded-full" />}
    </Link>
  );
}

function MobileLink({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={`block py-3 text-[15px] font-medium ${active ? "text-[#F48120]" : "text-slate-700"}`}>
      {label}
    </Link>
  );
}