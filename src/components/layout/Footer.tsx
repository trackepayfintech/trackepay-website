import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

/* ────────────── Icons ────────────── */

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.544 4 20 5.456 20 7.75v8.5c0 2.294-1.456 3.75-3.75 3.75h-8.5C5.456 20 4 18.544 4 16.25v-8.5C4 5.456 5.456 4 7.75 4zm4.25 2.5A5.75 5.75 0 106.25 12 5.757 5.757 0 0012 6.5zm0 2A3.75 3.75 0 118.25 12 3.754 3.754 0 0112 8.5zm4.75-2.25a1.25 1.25 0 11-1.25 1.25 1.252 1.252 0 011.25-1.25z" />
    </svg>
  );
}

/* ────────────── Data ────────────── */

const solutionsLinks = [
  { label: "Government & Police", href: "/government-police-solutions" },
  { label: "HR Management System", href: "/hr-management-system" },
  { label: "Restaurant Management", href: "/hotel-management-system" },
  { label: "Web Design & Development", href: "/web-designing-development" },
  { label: "Digital Marketing", href: "/digital-marketing-services" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/teams" },
  { label: "Careers", href: "/careers" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Certifications", href: "/our-certifications" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "GreenBubble", href: "/greenbubble-whatsapp-business-api" },
  { label: "Walytic", href: "/walytic" },
  { label: "HRMS", href: "/hr-management-system" },
  { label: "Attendance System", href: "/attendance-management-system" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/trackepayfintech", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trackepay", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/trackepay", Icon: InstagramIcon },
];

/* ────────────── Component ────────────── */

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="border-t border-white/10" />

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand — spans 4 cols */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logos/logo-light.png"
              alt="Trackepay"
              width={140}
              height={40}
              className="mb-5"
            />
            <p className="text-white/45 text-sm leading-relaxed max-w-sm mb-6">
              Enterprise-grade technology trusted by government agencies and
              150+ businesses across India. Building mission-critical software
              since 2023.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@trackepay.in"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@trackepay.in
              </a>
              <a
                href="tel:+918917342626"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +91 891 734 2626
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-5">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Trackepay Fintech (OPC) Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
