import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Trackepay Fintech services, software, and website.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
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
            <span className="text-slate-800 font-medium">Terms &amp; Conditions</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-500 text-sm mb-10">
            Last Updated: January 1, 2025
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
              <p>
                Welcome to Trackepay Fintech (OPC) Pvt Ltd. By accessing and using
                our website and services, you agree to be bound by these Terms &amp;
                Conditions. Please read them carefully before using our platform.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Service Agreement
                </h2>
                <p>
                  By using our services, you agree to comply with and be bound by
                  these terms. Our services include software development, digital
                  marketing, fintech solutions, and related IT services. We reserve
                  the right to modify, suspend, or discontinue any aspect of our
                  services at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Intellectual Property
                </h2>
                <p>
                  All content, designs, code, graphics, logos, and other materials on
                  this website are the intellectual property of Trackepay Fintech
                  (OPC) Pvt Ltd unless otherwise stated. You may not reproduce,
                  distribute, modify, or create derivative works from our content
                  without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  User Conduct
                </h2>
                <p>When using our services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    Use the services for any unlawful purpose or in violation of any
                    applicable laws
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems or networks
                  </li>
                  <li>
                    Interfere with or disrupt the integrity or performance of our
                    services
                  </li>
                  <li>
                    Upload or transmit viruses, malware, or other malicious code
                  </li>
                  <li>
                    Impersonate any person or entity, or misrepresent your
                    affiliation with any person or entity
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites or services
                  that are not owned or controlled by Trackepay. We have no control
                  over, and assume no responsibility for, the content, privacy
                  policies, or practices of any third-party websites or services. We
                  encourage you to review the terms and privacy policies of any
                  third-party websites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Service Modifications
                </h2>
                <p>
                  We reserve the right to modify or discontinue, temporarily or
                  permanently, any part of our services with or without notice. We
                  shall not be liable to you or any third party for any modification,
                  suspension, or discontinuation of our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Liability Limitations
                </h2>
                <p>
                  To the fullest extent permitted by applicable law, Trackepay
                  Fintech (OPC) Pvt Ltd shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including
                  but not limited to loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from your access to or use of (or
                  inability to access or use) our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Feedback Policy
                </h2>
                <p>
                  Any feedback, comments, or suggestions you provide regarding our
                  services is entirely voluntary. We shall be free to use such
                  feedback without any obligation or compensation to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Termination Rights
                </h2>
                <p>
                  We may terminate or suspend your access to our services
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach these Terms
                  &amp; Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Jurisdiction
                </h2>
                <p>
                  These Terms &amp; Conditions shall be governed by and construed in
                  accordance with the laws of India. Any disputes arising from these
                  terms shall be subject to the exclusive jurisdiction of the courts
                  in Bhubaneswar, Odisha, India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
