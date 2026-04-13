import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-4 lg:px-8 mb-20">
      <div className="relative overflow-hidden bg-[#0a0a0a] rounded-2xl py-20 lg:py-28">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-[#F48120]/[0.06] blur-[120px]" />

        {/* Content */}
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to transform
            <br />
            your operations?
          </h2>

          <p className="mt-5 text-white/45 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Join 150+ businesses that trust Trackepay for mission-critical
            software solutions.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F48120] text-white text-[15px] font-semibold rounded-lg px-8 py-4 transition-all duration-200 hover:bg-[#d97218] active:scale-[0.98] shadow-lg shadow-orange-500/20"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/25">
            <span>No commitment required</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Free consultation</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
