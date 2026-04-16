import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

interface SolutionCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProductPageTemplateProps {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImageSrc?: string;
  breadcrumbLabel: string;
  contentTitle?: string;
  contentDescription?: string;
  featureChecklist: string[];
  solutionCards: SolutionCard[];
}

export default function ProductPageTemplate({
  heroTitle,
  heroHighlight,
  heroDescription,
  heroImageSrc,
  breadcrumbLabel,
  contentTitle,
  contentDescription,
  featureChecklist,
  solutionCards,
}: ProductPageTemplateProps) {
  /* Split heroTitle around heroHighlight to render the orange word */
  const titleParts = heroTitle.split(heroHighlight);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-[#1a1850] py-20 lg:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 font-medium">{breadcrumbLabel}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                {titleParts[0]}
                <span className="text-orange-400">{heroHighlight}</span>
                {titleParts[1] || ""}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                {heroDescription}
              </p>
            </div>
            {heroImageSrc && (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={heroImageSrc || "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/biometric-attendance-system.webp"}
                  alt={heroTitle}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content: Description + Feature Checklist */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {heroImageSrc ? (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={heroImageSrc || "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/biometric-attendance-system.webp"}
                alt={heroTitle}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-slate-500 text-sm">Product Image</span>
            </div>
          )}
          <div>
            {contentTitle && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
                {contentTitle}
              </h2>
            )}
            {contentDescription && (
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {contentDescription}
              </p>
            )}
            <ul className="space-y-4">
              {featureChecklist.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-orange-500" />
                  </span>
                  <span className="text-slate-800 font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              How Our Solutions Solve Your Challenges
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Discover the powerful features designed to streamline your
              operations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#110F33] to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
