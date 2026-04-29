import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Trackepay",
  description:
    "Learn how Trackepay Fintech (OPC) Pvt Ltd uses cookies and similar tracking technologies on its website.",
};

export default function CookiePolicyPage() {
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
            <span className="text-slate-800 font-medium">Cookie Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-slate-500 text-sm mb-10">
            Effective Date: April 29, 2026
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
              <p>
                This Cookie Policy explains how Trackepay Fintech (OPC) Pvt Ltd
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses
                cookies and similar tracking technologies on{" "}
                <a
                  href="https://www.trackepay.in"
                  className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                >
                  www.trackepay.in
                </a>
                . It should be read alongside our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files placed on your device when you
                  visit a website. They are widely used to make websites work
                  efficiently, remember preferences, and provide information to
                  the site owners. Similar technologies include local storage,
                  pixels, and tags.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Types of Cookies We Use
                </h2>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Strictly Necessary
                </h3>
                <p>
                  Required for the website to function. These include cookies
                  that remember your cookie consent choice. They cannot be
                  disabled without affecting basic functionality.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                  Analytics &amp; Performance
                </h3>
                <p>
                  We use Google Analytics 4 and Google Tag Manager to understand
                  how visitors interact with our site (pages viewed, clicks,
                  scroll depth, form submissions, etc.). This data is
                  aggregated and helps us improve the site.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                  Functional
                </h3>
                <p>
                  Used to remember choices you make (such as preferences) so we
                  can provide a more personalised experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Third-Party Cookies
                </h2>
                <p>
                  Some cookies are set by third-party services that appear on
                  our pages, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Google Analytics &amp; Google Tag Manager (analytics)</li>
                  <li>Embedded forms (Deftform) for career and contact pages</li>
                  <li>Embedded media or social widgets, where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Managing Cookies
                </h2>
                <p>
                  You can control or delete cookies through your browser
                  settings at any time. Most browsers let you block cookies, see
                  what cookies are stored, and clear them. Disabling cookies may
                  affect parts of the site experience.
                </p>
                <p className="mt-2">
                  Helpful guides:{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                  >
                    Chrome
                  </a>
                  ,{" "}
                  <a
                    href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                  >
                    Firefox
                  </a>
                  ,{" "}
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                  >
                    Safari
                  </a>
                  ,{" "}
                  <a
                    href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                  >
                    Edge
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time. The
                  &ldquo;Effective Date&rdquo; at the top reflects the latest
                  revision. Continued use of the website after changes
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Contact
                </h2>
                <p>
                  Questions about cookies or our data practices? Reach us at:
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
                      href="tel:+918917342626"
                      className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                    >
                      +91 891 734 2626
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
