import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="px-4 lg:px-8 mb-20">
      <div className="relative overflow-hidden bg-[#0a0a0a] rounded-3xl py-24 lg:py-32">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 bg-dot-pattern opacity-100"
          aria-hidden="true"
        />

        {/* Radial orange glow — center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(244,129,32,0.10) 0%, rgba(244,129,32,0.04) 40%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to transform
            <br />
            your operations?
          </h2>
          <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Join 150+ businesses that trust Trackepay for mission-critical
            software.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F48120] text-white text-[15px] font-semibold rounded-full px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:bg-[#e0741b]"
            >
              Book a Demo
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <p className="mt-8 text-[13px] text-white/30 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-emerald-500/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              No commitment required
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-emerald-500/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free consultation
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-emerald-500/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              24/7 support
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
