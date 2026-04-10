"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ---------------- Icons ---------------- */

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



/* ---------------- Data ---------------- */

const solutionsLinks = [
  { label: "Government & Police", href: "/government-police-solutions" },
  { label: "Enterprise & Private", href: "/hr-management-system" },
  { label: "IT Services", href: "/web-designing-development" },
  { label: "Marketing & Branding", href: "/digital-marketing-services" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Team", href: "/teams" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "HRMS", href: "/hr-management-system" },
  { label: "RMS", href: "/hotel-management-system" },
  { label: "GreenBubble", href: "/greenbubble-whatsapp-business-api" },
  { label: "Walytic", href: "/walytic" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
 
];

/* ---------------- Animation ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ---------------- Component ---------------- */

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#F48120]/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="border-t border-white/10" />

      {/* Main */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
      >
        {/* Brand */}
        <motion.div variants={item} className="lg:col-span-2">
          <Image
            src="/images/logos/logo-light.png"
            alt="Trackepay"
            width={140}
            height={40}
            className="mb-4"
          />
          <p className="text-white/50 text-sm max-w-sm">
            We build mission-critical software for governments and enterprises.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#F48120]"
              >
                <social.Icon className="h-4 w-4 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {[
          { title: "Solutions", links: solutionsLinks },
          { title: "Company", links: companyLinks },
          { title: "Products", links: productLinks },
        ].map((section) => (
          <motion.div key={section.title} variants={item}>
            <h4 className="text-white mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-white/40 text-xs">
        © 2025 Trackepay Fintech (OPC) Pvt Ltd
      </div>
    </footer>
  );
}