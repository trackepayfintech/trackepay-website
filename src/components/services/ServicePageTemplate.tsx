import Image from "next/image";
import Link from "next/link";
import { type LucideIcon, ArrowRight, ChevronRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

interface ProcessStep {
  title: string;
  description: string;
}

interface RelatedService {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceSection {
  heading: string;
  description?: string;
  items?: { title: string; description: string; icon?: LucideIcon }[];
}

interface ServicePageTemplateProps {
  heroTitle: string;
  heroSubtitle: string;
  heroImageSrc?: string;
  breadcrumbLabel?: string;
  introparagraphs?: string[];
  processSteps?: ProcessStep[];
  processHeading?: string;
  sections?: ServiceSection[];
  relatedServices: RelatedService[];
}

export default function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  heroImageSrc,
  breadcrumbLabel,
  introparagraphs,
  processSteps,
  processHeading = "Our Process",
  sections,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#110F33] via-[#15133d] to-[#1a1850] py-20 lg:py-28">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">
              {breadcrumbLabel || heroTitle}
            </span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {heroTitle}
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      {introparagraphs && introparagraphs.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {heroImageSrc ? (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={heroImageSrc}
                    alt={heroTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  {introparagraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-slate-600 text-lg leading-relaxed mb-6 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                {introparagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-slate-600 text-lg leading-relaxed mb-6 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Extra Sections */}
      {sections &&
        sections.map((section, idx) => (
          <section
            key={idx}
            className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                  {section.heading}
                </h2>
                {section.description && (
                  <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    {section.description}
                  </p>
                )}
              </div>
              {section.items && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      {item.icon && (
                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                          <item.icon className="w-6 h-6 text-orange-500" />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-16 text-center">
              {processHeading}
            </h2>
            <div className="max-w-3xl mx-auto space-y-0">
              {processSteps.map((step, i) => (
                <div key={i} className="relative flex gap-6">
                  {/* Connector line */}
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm z-10">
                      {i + 1}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-px flex-1 border-l-2 border-dashed border-orange-200 my-1" />
                    )}
                  </div>
                  <div className="pb-10 last:pb-0">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-16 text-center">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
