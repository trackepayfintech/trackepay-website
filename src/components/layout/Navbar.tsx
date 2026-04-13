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
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

/* ────────────── Component ────────────── */

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

  // Close mobile menu on route change
  useEffect(() => {
    closeMobile();
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileSolutionsOpen(false);
  }, []);

  const isActive = (href: string) => pathname === href;

  const allSolutionHrefs = solutionsData.flatMap((col) =>
    col.items.map((item) => item.href)
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgb(0_0_0/0.06)]"
          : "bg-white/80 backdrop-blur-sm"
      } border-b border-slate-200/70`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={closeMobile}>
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
              <button
                className={`nav-link-base flex items-center gap-1 ${
                  aboutLinks.some((l) => isActive(l.href))
                    ? "text-slate-900"
                    : ""
                }`}
              >
                About
                <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              {aboutLinks.some((l) => isActive(l.href)) && <ActiveBar />}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-3">
                <div className="w-56 rounded-xl bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/60 py-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 text-[13px] font-medium transition-colors duration-150 ${
                        isActive(link.href)
                          ? "text-[#F48120] bg-orange-50/60"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Mega Dropdown */}
            <div className="relative group">
              <button
                className={`nav-link-base flex items-center gap-1 ${
                  allSolutionHrefs.some((href) => isActive(href))
                    ? "text-slate-900"
                    : ""
                }`}
              >
                Solutions
                <ChevronDown className="h-3.5 w-3.5 opacity-40 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              {allSolutionHrefs.some((href) => isActive(href)) && <ActiveBar />}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full -left-64 pt-3">
                <div className="w-[780px] rounded-xl bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/60 p-8 grid grid-cols-4 gap-6">
                  {solutionsData.map((column) => (
                    <div key={column.title}>
                      <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-4 pb-2 border-b border-slate-100">
                        <span
                          className={`inline-block h-1.5 w-1.5 rounded-full ${column.dotColor}`}
                        />
                        {column.title}
                      </h4>
                      <ul className="space-y-1">
                        {column.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block py-2 px-2 -mx-2 rounded-lg transition-colors duration-150 ${
                                isActive(item.href)
                                  ? "bg-orange-50/60"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <span
                                className={`block text-[13px] font-medium ${
                                  isActive(item.href)
                                    ? "text-[#F48120]"
                                    : "text-slate-700"
                                }`}
                              >
                                {item.label}
                              </span>
                              <span className="block text-[11px] text-slate-400 mt-0.5">
                                {item.desc}
                              </span>
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
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
              />
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-slate-900 text-white text-[13px] font-semibold tracking-wide rounded-lg px-5 py-2.5 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
            >
              Contact Us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-slate-700" />
              ) : (
                <Menu className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
            onClick={closeMobile}
          />

          {/* Drawer */}
          <div
            ref={drawerRef}
            className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto animate-slide-in-drawer"
          >
            <div className="p-6 space-y-1">
              <MobileLink href="/" label="Home" active={isActive("/")} onClick={closeMobile} />

              {/* About — Mobile */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className={`w-full flex items-center justify-between py-3 text-[15px] font-medium transition-colors ${
                    aboutLinks.some((l) => isActive(l.href))
                      ? "text-[#F48120]"
                      : "text-slate-700"
                  }`}
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 pb-2 space-y-1 border-l-2 border-slate-100 ml-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobile}
                        className={`block py-2 text-[14px] transition-colors ${
                          isActive(link.href)
                            ? "text-[#F48120] font-medium"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions — Mobile */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className={`w-full flex items-center justify-between py-3 text-[15px] font-medium transition-colors ${
                    allSolutionHrefs.some((href) => isActive(href))
                      ? "text-[#F48120]"
                      : "text-slate-700"
                  }`}
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      mobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pb-2 space-y-4">
                    {solutionsData.map((column) => (
                      <div key={column.title} className="pl-4 border-l-2 border-slate-100 ml-2">
                        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-2">
                          <span
                            className={`inline-block h-1.5 w-1.5 rounded-full ${column.dotColor}`}
                          />
                          {column.title}
                        </p>
                        <div className="space-y-1">
                          {column.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className={`block py-1.5 text-[14px] transition-colors ${
                                isActive(item.href)
                                  ? "text-[#F48120] font-medium"
                                  : "text-slate-500 hover:text-slate-800"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-px bg-slate-100 my-2" />

              {navLinks.map((link) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={isActive(link.href)}
                  onClick={closeMobile}
                />
              ))}

              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white text-[15px] font-semibold rounded-lg px-6 py-3.5 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ────────────── Sub-components ────────────── */

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`nav-link-base relative ${active ? "text-slate-900" : ""}`}
    >
      {label}
      {active && <ActiveBar />}
    </Link>
  );
}

function ActiveBar() {
  return (
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 bg-[#F48120] rounded-full" />
  );
}

function MobileLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-3 text-[15px] font-medium transition-colors ${
        active ? "text-[#F48120]" : "text-slate-700 hover:text-slate-900"
      }`}
    >
      {label}
    </Link>
  );
}
