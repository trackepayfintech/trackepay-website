"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "trackepay_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = (value: "accepted" | "dismissed") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
    >
      <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5 rounded-xl bg-orange-50 text-orange-500 p-2">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-slate-800">
              We use cookies
            </h2>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              This site uses cookies and similar technologies to analyse
              traffic, improve your experience, and understand how visitors
              engage with our content. See our{" "}
              <Link
                href="/cookie-policy"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
              >
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => dismiss("accepted")}
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Got it
              </button>
              <Link
                href="/cookie-policy"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
          <button
            type="button"
            aria-label="Dismiss cookie notice"
            onClick={() => dismiss("dismissed")}
            className="shrink-0 -mr-1 -mt-1 rounded-lg p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
