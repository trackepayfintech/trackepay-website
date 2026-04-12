import type { Metadata } from "next";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Contact Us | Trackepay",
  description:
    "Get in touch with Trackepay. If you have any inquiries or require further information, our team will respond at the earliest opportunity.",
  keywords: ["contact trackepay", "get in touch", "IT company contact", "Bhubaneswar office", "software company contact"],
  openGraph: {
    title: "Contact Us | Trackepay",
    description: "Get in touch with Trackepay. If you have any inquiries or require further information, our team will respond at the earliest opportunity.",
    url: "https://www.trackepay.in/contact/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Trackepay",
    description: "Get in touch with Trackepay. If you have any inquiries or require further information, our team will respond at the earliest opportunity.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Get in touch
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              If you have any inquiries or require further information, please
              complete the form below. Our team will respond to your message at
              the earliest opportunity.
            </p>
          </div>

          {/* Form Placeholder */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="min-h-[500px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 text-sm font-medium">
                  Contact form will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1a1850] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Contact Details
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <Phone className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Phone</h3>
              <Link
                href="tel:+918658445706"
                className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
              >
                +91 86584 45706
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Email</h3>
              <Link
                href="mailto:info@trackepay.in"
                className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
              >
                info@trackepay.in
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Address</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                327/2101, Chandravihar,
                <br />
                Near Omfed Square, Chandrasekharpur,
                <br />
                Bhubaneswar
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 border border-white/10"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 border border-white/10"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 border border-white/10"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
