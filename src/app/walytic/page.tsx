import type { Metadata } from "next";
import {
  MessageSquare,
  Image as ImageIcon,
  Send,
  Webhook,
  ShieldCheck,
  Radio,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Walytic - WhatsApp API System | Trackepay",
  description:
    "Walytic is a WhatsApp API system for automating WhatsApp communication at scale with session management, bulk campaigns, webhooks, and more.",
};

const features = [
  {
    title: "WhatsApp Session Management",
    description:
      "Create, manage, and monitor multiple WhatsApp sessions from a single dashboard. Handle session lifecycle with automatic reconnection and health monitoring.",
    icon: MessageSquare,
  },
  {
    title: "Text/Media/Group Messaging",
    description:
      "Send text messages, images, videos, documents, and audio files to individuals or groups. Support for rich media formatting and interactive message templates.",
    icon: ImageIcon,
  },
  {
    title: "Bulk Campaign Automation",
    description:
      "Launch large-scale messaging campaigns with scheduling, throttling, and audience segmentation. Track delivery rates and campaign performance in real time.",
    icon: Send,
  },
  {
    title: "Webhook Event Notifications",
    description:
      "Receive real-time webhook notifications for message delivery, read receipts, incoming messages, and session events. Integrate seamlessly with your backend systems.",
    icon: Webhook,
  },
  {
    title: "Number Verification Engine",
    description:
      "Verify phone numbers on WhatsApp before sending messages. Clean your contact lists, reduce bounce rates, and improve campaign delivery efficiency.",
    icon: ShieldCheck,
  },
  {
    title: "Status Publishing",
    description:
      "Programmatically publish WhatsApp status updates with text, images, and videos. Schedule status posts and reach your audience through another engagement channel.",
    icon: Radio,
  },
];

export default function WalyticPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-[#1a1850] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid g">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 font-medium">Walytic</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
              WhatsApp API System
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              <a href="https://www.walytic.com" target="_blank" rel="noopener noreferrer">
                <span className="text-orange-400 hover:underline">Walytic</span>
              </a>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Automate your WhatsApp communication at scale. Walytic provides a
              robust API system for session management, bulk messaging, campaign
              automation, webhook integrations, and number verification — built
              for businesses that need reliability and performance.
            </p>
          </div>
          <div className="relative aspect-[14/8] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/walytic-product-2.webp"
              alt="Walytic WhatsApp API platform"
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
              Enterprise-grade WhatsApp automation features for your business.
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              Ready to Scale Your WhatsApp Communication?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Get started with Walytic and transform how your business
              communicates on WhatsApp.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#110F33] to-orange-600 px-8 py-3.5 text-sm font-semibold text-white hover:from-orange-600 hover:to-[#1a1850] transition-all shadow-lg shadow-orange-500/20"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
