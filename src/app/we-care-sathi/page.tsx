import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, ArrowLeft, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "We Care Sathi for Women Safety — Smart Women Safety Platform & Emergency Response",
  description:
    "We Care Sathi for Women Safety is a comprehensive women safety platform designed to provide emergency response, real-time tracking, and law enforcement coordination for women's security.",
  path: "/we-care-sathi-for-women-safety-review",
  keywords: [
    "We Care Sathi for Women Safety",
    "Women Safety Platform",
    "Emergency Response System",
    "Women Security",
    "Safety Tracking App",
    "Trackepay Projects",
  ],
});

export default function BlogPostPage() {
  return (
    <>
      {/* Article */}
      <article className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>

              <ChevronRight className="w-3.5 h-3.5" />

              <Link
                href="/blog"
                className="hover:text-orange-500 transition-colors"
              >
                Blog
              </Link>

              <ChevronRight className="w-3.5 h-3.5" />

              <span className="text-slate-800 font-medium truncate">
                We Care Sathi for Women Safety
              </span>
            </nav>

            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-orange-500 transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6 tracking-tight">
              We Care Sathi for Women Safety — Smart Women Safety Platform & Emergency Response
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-orange-500" />
                </div>
                Trackepay Team
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                May 19, 2026
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp"
                alt="We Care for Women Safety Platform"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                <p>
                  We Care Sathi for Women Safety is a comprehensive women safety platform 
                  designed to provide emergency response, real-time tracking, and 
                  law enforcement coordination for women's security. The platform 
                  empowers women with instant access to help during distress situations.
                </p>

                <p>
                  Developed as a smart safety solution, the platform helps women 
                  connect with emergency services, share their location with trusted 
                  contacts, and alert authorities instantly when facing any security 
                  threat or unsafe situation.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Real-Time Emergency Response System
                </h2>

                <p>
                  We Care Sathi for Women Safety features an intelligent emergency alert 
                  system that allows users to send distress signals with just one tap. 
                  The system instantly notifies police, emergency contacts, and 
                  nearby safety volunteers with the user's exact location.
                </p>

                <p>
                  The platform includes real-time location tracking, audio and video 
                  recording capabilities, and automatic evidence collection to ensure 
                  swift action and legal support when needed.
                </p>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    One-tap SOS emergency alert system
                  </li>

                  <li>
                    Real-time location tracking and sharing
                  </li>

                  <li>
                    Automatic police and contact notification
                  </li>

                  <li>
                    Audio and video evidence recording
                  </li>

                  <li>
                    Safe route and public transport monitoring
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Intelligent Analytics & Safety Insights
                </h2>

                <p>
                  The platform includes modern analytics tools that help authorities 
                  identify high-risk areas, monitor safety trends, and improve police 
                  patrolling strategies. The data-driven system enhances response times 
                  and supports proactive safety measures for communities.
                </p>

                <p>
                  With advanced digital workflows and real-time communication, We Care 
                  for Women Safety helps bridge the gap between citizens and law enforcement 
                  while ensuring faster emergency response and better protection for women.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Strengthening Women Safety in Communities
                </h2>

                <p>
                  We Care Sathi for Women Safety represents a major step toward creating safer 
                  public spaces and empowering women with technology-driven security 
                  solutions. By integrating mobile technology with law enforcement 
                  operations, the platform improves urban safety and creates a more 
                  connected security ecosystem.
                </p>

                <p>
                  The solution demonstrates how modern digital platforms can transform 
                  personal safety into an intelligent, accessible, and citizen-focused 
                  security system that works 24/7 to protect women in need.
                </p>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}