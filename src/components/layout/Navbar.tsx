"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const solutionsData = [
  {
    title: "Government & Public Sector",
    dotColor: "bg-emerald-500",
    items: [
      { label: "Smart Police Solutions", href: "/government-police-solutions" },
      { label: "Attendance & Workforce", href: "/attendance-management-system" },
      { label: "Custom Govt Solutions", href: "/contact" },
    ],
  },
  {
    title: "Enterprise & Private",
    dotColor: "bg-[#F48120]",
    items: [
      { label: "HR Management System", href: "/hr-management-system" },
      { label: "Restaurant Management", href: "/hotel-management-system" },
      { label: "GreenBubble (WhatsApp API)", href: "/greenbubble-whatsapp-business-api" },
      { label: "Walytic (Analytics)", href: "/walytic" },
    ],
  },
  {
    title: "IT Services",
    dotColor: "bg-blue-500",
    items: [
      { label: "Web Design & Development", href: "/web-designing-development" },
      { label: "Software & CRM", href: "/software-crm-development-services" },
      { label: "Mobile App Development", href: "/mobile-application-design-development" },
      { label: "Data Analytics", href: "/data-analytics-services" },
    ],
  },
  {
    title: "Marketing & Branding",
    dotColor: "bg-purple-500",
    items: [
      { label: "Digital Marketing", href: "/digital-marketing-services" },
      { label: "Branding Packages", href: "/branding-building-packages" },
    ],
  },
];

const aboutLinks = [
  { label: "Our Company", href: "/about-us" },
  { label: "Teams", href: "/teams" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobile();
  }, [pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setSolutionsOpen(false);
  };

  const isActive = (href: string) => pathname === href;

  const allSolutionHrefs = solutionsData.flatMap((col) =>
    col.items.map((item) => item.href)
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgb(0_0_0/0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={closeMobile}>
            <Image
              src="/images/logos/logo-dark.png"
              alt="Trackepay"
              width={132}
              height={32}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav — Center */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`relative text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 ${
                isActive("/")
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0.5 rounded-full bg-[#F48120]" />
              )}
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 ${
                  aboutLinks.some((l) => isActive(l.href))
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                About Us
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform duration-300 group-hover:rotate-180" />
                {aboutLinks.some((l) => isActive(l.href)) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0.5 rounded-full bg-[#F48120]" />
                )}
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="w-52 rounded-2xl bg-white shadow-2xl ring-1 ring-black/3 py-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 text-[13px] font-medium transition-colors duration-150 ${
                        isActive(link.href)
                          ? "text-[#F48120] bg-orange-50/50"
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
                className={`flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 ${
                  allSolutionHrefs.some((href) => isActive(href))
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Solutions
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform duration-300 group-hover:rotate-180" />
                {allSolutionHrefs.some((href) => isActive(href)) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0.5 rounded-full bg-[#F48120]" />
                )}
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="w-200 rounded-2xl bg-white shadow-2xl ring-1 ring-black/3 p-8 grid grid-cols-4 gap-8">
                  {solutionsData.map((column) => (
                    <div key={column.title}>
                      <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-4">
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
                              className={`block py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                                isActive(item.href)
                                  ? "text-[#F48120]"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple nav links */}
            {[
              { label: "Services", href: "/services" },
              { label: "Technology", href: "/technology" },
              { label: "Career", href: "/careers" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0.5 rounded-full bg-[#F48120]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center bg-[#F48120] text-white text-[13px] font-semibold uppercase tracking-wider rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:bg-[#e0741b]"
            >
              Book a Demo
            </Link>
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors duration-200"
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

      {/* Mobile Menu — Full-screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-sm"
          onClick={closeMobile}
        />

        {/* Full-screen panel */}
        <div
          ref={mobileMenuRef}
          className={`absolute inset-0 bg-white overflow-y-auto transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-full py-12 px-6 space-y-2">
            <Link
              href="/"
              onClick={closeMobile}
              className={`text-2xl font-semibold tracking-tight transition-colors duration-200 py-3 ${
                isActive("/") ? "text-[#F48120]" : "text-slate-800 hover:text-slate-600"
              }`}
            >
              Home
            </Link>

            {/* About Mobile */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors duration-200 py-3 ${
                  aboutLinks.some((l) => isActive(l.href))
                    ? "text-[#F48120]"
                    : "text-slate-800 hover:text-slate-600"
                }`}
              >
                About Us
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  aboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center space-y-1 pb-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className={`text-lg transition-colors duration-150 py-1 ${
                        isActive(link.href)
                          ? "text-[#F48120]"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Mobile */}
            <div className="flex flex-col items-center w-full max-w-md">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors duration-200 py-3 ${
                  allSolutionHrefs.some((href) => isActive(href))
                    ? "text-[#F48120]"
                    : "text-slate-800 hover:text-slate-600"
                }`}
              >
                Solutions
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 w-full ${
                  solutionsOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-6 py-4 px-4">
                  {solutionsData.map((column) => (
                    <div key={column.title} className="text-center">
                      <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-2">
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
                            className={`block py-1.5 text-base transition-colors duration-150 ${
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
              </div>
            </div>

            {/* Simple links — mobile */}
            {[
              { label: "Services", href: "/services" },
              { label: "Technology", href: "/technology" },
              { label: "Career", href: "/careers" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`text-2xl font-semibold tracking-tight transition-colors duration-200 py-3 ${
                  isActive(link.href)
                    ? "text-[#F48120]"
                    : "text-slate-800 hover:text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-6">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="inline-flex items-center bg-[#F48120] text-white text-[15px] font-semibold uppercase tracking-wider rounded-full px-10 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:bg-[#e0741b]"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
