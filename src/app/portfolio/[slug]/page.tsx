import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

// The "Database" of Case Studies
const caseStudies: Record<string, any> = {
  "sarai-2-0": {
    category: "Govt & Law Enforcement",
    title: "Sarai 2.0: Transforming Hotel Compliance",
    description: "How Sarai 2.0 helps Commissionerate Police, Bhubaneswar & Cuttack, monitor hotel guests digitally and get instant alerts for suspects.",
    client: "Commissionerate Police",
    industry: "Law Enforcement",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai2.0.webp",
    services: ["Real-time Dashboards", "Automated Flagging", "Digital Registration"],
    challenge: [
      "Manual and slow hotel guest registration processes",
      "Delayed notification to police regarding persons of interest",
      "Lack of centralized data for check-in trends"
    ],
    approach: [
      "Implemented a real-time digital guest monitoring mobile app",
      "Developed a centralized Dashboard Overview for police officials",
      "Integrated automated flagging systems for suspects"
    ],
    results: [
      "Instant alerts for suspects or persons of interest upon check-in",
      "Eliminated routine manual compliance paperwork for hotels",
      "Established a proven track record of digital transformation in Odisha"
    ],
  },
  "trackepay-crm-dashboard": {
    category: "SaaS / Operations",
    title: "TrackePay: Real-Time Sales Operations",
    description: "A comprehensive look at the high-performance dashboard designed for managing high-volume leads and automated sales workflows.",
    client: "Operational Sales Teams",
    industry: "SaaS / CRM",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/crm-dashboard.webp",
    services: ["UI/UX Design", "Data Visualization", "Workflow Tracking"],
    challenge: [
      "Managing over 1,300+ leads without losing track of status",
      "Visualizing complex lead stages from 'Cold' to 'Deal Won'",
      "Tracking outstanding and past-due invoices in a unified panel"
    ],
    approach: [
      "Designed a multi-widget layout for tracking Invoices and Leads",
      "Integrated a dynamic 'Leads Overview' ring chart",
      "Developed a 'Proposal Overview' tracker for conversion monitoring"
    ],
    results: [
      "Lead Visibility: Centralized 1,338 leads into a single funnel",
      "Efficiency: Streamlined task management for 350+ active items",
      "Revenue Tracking: Instant 'at-a-glance' reporting for invoices"
    ],
  },
  "greenbubble-whatsapp-automation": {
    category: "Digital Solutions",
    title: "GreenBubble: Conversational AI & Messaging",
    description: "An advanced WhatsApp automation interface designed to manage subscriber growth and AI-driven bots.",
    client: "Marketing & Support Teams",
    industry: "MarTech / Automation",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/WhatsApp-green-bubble.webp",
    services: ["WhatsApp Cloud API", "Chatbot Development", "Automated Sequences"],
    challenge: [
      "Managing high-volume subscriber interactions manually",
      "Tracking message quotas and AI token usage in real-time",
      "Scaling outreach through automated messaging sequences"
    ],
    approach: [
      "Deployed a unified dashboard to monitor Subscribers and Messages",
      "Integrated AI Token tracking for automated bot responses",
      "Implemented visual analytics for 'Subscriber Growth'"
    ],
    results: [
      "Automation Hub: Centralized active Bots for hands-free engagement",
      "Resource Management: 100% transparency on AI Token consumption",
      "Scalability: Optimized Shared Inbox for team collaboration"
    ],
  },
  "walytic-whatsapp": {
    category: "Developer Tools",
    title: "Walytic: Scaling WhatsApp Infrastructure",
    description: "Built for SaaS tools and agencies, Walytic provides a robust platform to automate workflows via WhatsApp Web API.",
    client: "Agencies & Software Developers",
    industry: "SaaS / Automation",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/walytic-dashboard.webp",
    services: ["WhatsApp Web API", "Workflow Automation", "Bulk Messaging"],
    challenge: [
      "High per-message fees from traditional API providers",
      "Complexity in connecting multiple WhatsApp accounts",
      "Need for a developer-friendly infrastructure that scales"
    ],
    approach: [
      "Developed a no-per-message fee model for cost-effective scaling",
      "Built an intuitive dashboard for account verification",
      "Integrated real-time reporting for messages sent"
    ],
    results: [
      "Zero per-message fees, reducing operational costs significantly",
      "Seamless account connection through a unified Unibox",
      "Automated workflow execution for 24/7 engagement"
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudies[slug];
  if (!data) {
    return buildMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: `/portfolio/${slug}`,
    });
  }
  return buildMetadata({
    title: `${data.title} — Case Study`,
    description: data.description,
    path: `/portfolio/${slug}`,
    ogImage: data.image,
    keywords: [
      data.industry?.toLowerCase(),
      data.client?.toLowerCase(),
      ...(data.services ?? []).map((s: string) => s.toLowerCase()),
      "trackepay case study",
    ].filter(Boolean) as string[],
  });
}

export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Fix for Next.js 15: Await the promise before accessing properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = caseStudies[slug];

  if (!data) notFound();

  return (
    <section className="py-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/portfolio" className="hover:text-slate-900">Portfolio</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 font-medium line-clamp-1">{data.title}</span>
        </nav>

        <Link href="/portfolio" className="text-sm font-semibold text-slate-900 mb-6 inline-flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Title Section */}
        <header className="mb-10">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">{data.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{data.title}</h1>
          <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-3xl">{data.description}</p>
        </header>

        {/* Main Image */}
        <div className="relative aspect-video w-full mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <Image src={data.image} alt={data.title} fill className="object-cover" priority />
        </div>

        {/* Project Meta Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Client</p>
            <p className="font-bold text-slate-800">{data.client}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Industry</p>
            <p className="font-bold text-slate-800">{data.industry}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expertise</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {data.services.map((s: string, i: number) => (
                <span key={i} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold border border-blue-100 uppercase">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">The Challenge</h2>
              <ul className="space-y-4">
                {data.challenge.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Approach</h2>
              <ul className="space-y-4">
                {data.approach.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Results Sidebar */}
          <aside className="bg-slate-900 p-8 md:p-10 rounded-3xl text-white h-fit sticky top-8">
            <h2 className="text-2xl font-bold mb-8">Outcomes</h2>
            <div className="space-y-6">
              {data.results.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <p className="text-slate-200 font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}