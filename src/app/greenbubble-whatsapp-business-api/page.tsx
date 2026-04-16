import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Zap,
  Megaphone,
  Bot,
  Contact,
  Users,
  Check,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "GreenBubble - WhatsApp Business API | Trackepay",
  description:
    "GreenBubble is an enterprise WhatsApp Business API platform for automated messaging, broadcasting, campaigns, AI chat assistance, and team collaboration.",
};

const features = [
  {
    title: "WhatsApp Official API Integration",
    description:
      "Connect directly to the official WhatsApp Business API for reliable, scalable, and policy-compliant messaging. Send and receive messages with full API access.",
    icon: MessageSquare,
  },
  {
    title: "Automated Message Sequences",
    description:
      "Set up drip campaigns, welcome messages, follow-ups, and trigger-based sequences that engage your customers automatically at every stage of their journey.",
    icon: Zap,
  },
  {
    title: "Broadcasting & Campaigns",
    description:
      "Send targeted broadcasts to segmented audiences with rich media support. Track delivery, read receipts, and campaign performance in real time.",
    icon: Megaphone,
  },
  {
    title: "AI Chat Assistant",
    description:
      "Deploy an AI-powered chatbot that handles FAQs, qualifies leads, books appointments, and provides 24/7 customer support on WhatsApp.",
    icon: Bot,
  },
  {
    title: "Contact & Label Management",
    description:
      "Organize your contacts with labels, custom fields, and segments. Import contacts in bulk, manage opt-ins, and maintain a clean subscriber list.",
    icon: Contact,
  },
  {
    title: "Team Collaboration Inbox",
    description:
      "A shared inbox where multiple team members can handle conversations, assign chats, add internal notes, and collaborate on customer support.",
    icon: Users,
  },
];

const benefits = [
  "Official WhatsApp Business API compliance",
  "End-to-end encryption for all messages",
  "99.9% uptime with enterprise-grade reliability",
  "Multi-agent support for team collaboration",
  "Rich media messaging (images, videos, documents)",
  "Detailed analytics and reporting dashboard",
  "Seamless CRM and tool integrations",
  "Dedicated onboarding and priority support",
];

export default function GreenBubblePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-[#1a1850] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 font-medium">GreenBubble</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-green-500/20">
                WhatsApp Business API
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                <span className="text-orange-400">GreenBubble</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Enterprise-grade WhatsApp Business automation platform. Automate
                conversations, broadcast campaigns, deploy AI assistants, and
                collaborate as a team — all through the official WhatsApp Business
                API.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/green-bubble-img.webp"
                alt="GreenBubble WhatsApp Business API platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              How Our Solutions Solve Your Challenges
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Powerful features to transform your WhatsApp communication.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#110F33] to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Why GreenBubble
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
                Why Choose GreenBubble?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-orange-500" />
                  </span>
                  <span className="text-slate-800 font-medium text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#110F33] to-orange-600 px-8 py-3.5 text-sm font-semibold text-white hover:from-orange-600 hover:to-[#1a1850] transition-all shadow-lg shadow-orange-500/20"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
