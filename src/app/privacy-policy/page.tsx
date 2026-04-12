import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Trackepay",
  description:
    "Read the privacy policy of Trackepay Fintech (OPC) Pvt Ltd. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-medium">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm mb-10">
            Effective Date: July 25, 2025
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
              <p>
                At Trackepay Fintech (OPC) Pvt Ltd, we are committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website
                and use our services.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Data Collection
                </h2>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Personal Data
                </h3>
                <p>
                  We may collect personal information that you voluntarily provide
                  when using our services, including but not limited to: name, email
                  address, phone number, company name, job title, and billing
                  information. This data is collected when you fill out forms,
                  subscribe to newsletters, make purchases, or communicate with us.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                  Automatic Data
                </h3>
                <p>
                  When you access our website, we automatically collect certain
                  information including IP address, browser type, operating system,
                  referring URLs, pages viewed, time spent on pages, and other
                  diagnostic data. We use cookies and similar tracking technologies
                  to collect this information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Data Usage
                </h2>
                <p>We use the collected data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send promotional communications (with your consent)</li>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>To monitor and analyze usage trends and preferences</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Data Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in the
                  following circumstances: to comply with legal requirements, to
                  protect our rights and safety, to service providers who assist in
                  our operations (under strict confidentiality agreements), and in
                  connection with a merger, acquisition, or sale of assets.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  User Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Data Protection &amp; Retention
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to
                  protect your personal data against unauthorized access, alteration,
                  disclosure, or destruction. We retain your personal data only for
                  as long as necessary to fulfill the purposes for which it was
                  collected, or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Contact
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <ul className="list-none space-y-1 mt-2">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:director@trackepay.com"
                      className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                    >
                      director@trackepay.com
                    </a>
                  </li>
                  <li>
                    Phone:{" "}
                    <a
                      href="tel:+918658445706"
                      className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                    >
                      +91 86584 45706
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
