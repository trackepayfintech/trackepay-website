import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const caseStudies: any = {
  "sarai-2-0": {
    category: "Govt & Law Enforcement",
    date: "April 14, 2026",
    title: "Sarai 2.0: Transforming Hotel Compliance into a Public Safety Net",
    description:
      "How Sarai 2.0 helps Commissionerate Police, Bhubaneswar & Cuttack, monitor hotel guests digitally and get instant alerts for suspects.",
    client: "Commissionerate Police, Bhubaneswar & Cuttack",
    industry: "Law Enforcement",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/product-for-govt.webp",

    services: ["Real-time Dashboards", "Automated Flagging", "Digital Registration"],

    challenge: [
      "Manual and slow hotel guest registration processes",
      "Delayed notification to police regarding persons of interest",
      "Lack of centralized data for check-in trends and guest distribution",
      "Difficulty in seamless collaboration between different police stations",
    ],

    approach: [
      "Implemented a real-time digital guest monitoring mobile app",
      "Developed a centralized Dashboard Overview for police officials",
      "Integrated automated flagging systems for suspects",
      "Created visual data distributions for Indian vs. Foreign guests",
    ],

    results: [
      "Instant alerts for suspects or persons of interest upon check-in",
      "Eliminated routine manual compliance paperwork for hotels",
      "Provided real-time check-in trends (Last 7 Days) for better patrolling",
      "Established a proven track record of digital transformation in Odisha",
    ],
  },

 "trackepay-ecosystem": {
    category: "Digital Solutions",
    date: "April 14, 2026",
    title: "Innovating Sales & Communication: The Trackepay Ecosystem",
    description: "How Trackepay CRM and GreenBubble work together to automate lead management and scale customer engagement.",
    client: "Startups & Growth-Stage Businesses",
    industry: "SaaS / MarTech",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/crm-product.webp",
    services: ["CRM Development", "WhatsApp Cloud API", "Sales Automation"],
    
    // Add these arrays back in to fix the .map() error
    challenge: [
      "Fragmented lead management across multiple spreadsheets",
      "Delayed customer response times due to manual messaging",
      "Lack of real-time visibility into sales performance and revenue",
      "Difficulty in scaling communication without increasing staff costs"
    ],
    
    approach: [
      "Developed Trackepay CRM to centralize internal sales operations",
      "Integrated GreenBubble as an approved WhatsApp Cloud API provider",
      "Automated notification workflows to bridge CRM and customer messaging",
      "Implemented real-time dashboards for unified performance tracking"
    ],

    results: [
      "Trackepay CRM: Eliminated manual errors in sales tracking and improved follow-up consistency.",
      "GreenBubble: Achieved massive engagement rates via WhatsApp compared to traditional email methods.",
      "Unified Workflow: Reduced operational overhead by managing sales and communication in one cohesive ecosystem.",
      "Scalability: Provided businesses the infrastructure to handle 10x more leads without increasing headcount."
    ],
  },

  "walytic-whatsapp": {
    category: "Developer Tools",
    date: "April 14, 2026",
    title: "Walytic: Scaling WhatsApp Infrastructure without the Overhead",
    description: "Built for SaaS tools and agencies, Walytic provides a robust platform to automate workflows and run bulk campaigns via WhatsApp Web API.",
    client: "Agencies & Software Developers",
    industry: "SaaS / Automation",
    image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/walytic-product.webp",
    services: ["WhatsApp Web API", "Workflow Automation", "Bulk Messaging"],
    
    challenge: [
      "High per-message fees from traditional API providers",
      "Complexity in connecting and managing multiple WhatsApp accounts",
      "Difficulty in automating bulk campaigns without getting flagged",
      "Need for a developer-friendly infrastructure that scales easily"
    ],
    
    approach: [
      "Developed a no-per-message fee model for cost-effective scaling",
      "Built an intuitive dashboard for account verification and number management",
      "Created a Flow Builder and Nurturing system for automated workflows",
      "Integrated real-time reporting for messages sent and lead capture tracking"
    ],

    results: [
      "Zero per-message fees, significantly reducing operational costs for agencies.",
      "Seamless account connection and management through a unified Unibox.",
      "Automated workflow execution, allowing businesses to run 24/7 engagement.",
      "Provided a reliable infrastructure for SaaS tools to embed WhatsApp features."
    ],
  },
};

// Static params
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseStudies[slug];

  if (!data) {
    return <div className="p-20 text-center">Case Study Not Found</div>;
  }

  return (
    <section className="py-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-5xl mx-auto px-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/portfolio">Portfolio</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-medium">Case Study</span>
        </nav>

        <Link
          href="/portfolio"
          className="text-sm text-slate-900 mb-6 inline-block"
        >
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-slate-900 font-bold uppercase tracking-wide">
            {data.category}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">
            {data.title}
          </h1>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="mb-12">
          {data.image ? (
            <Image
              src={data.image}
              alt={data.title}
              width={1200}
              height={600}
              className="rounded-2xl border border-slate-200 shadow-sm object-cover w-full"
            />
          ) : (
            <div className="w-full h-[400px] bg-slate-200 flex items-center justify-center rounded-2xl">
              <span className="text-slate-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Client
            </p>
            <p className="font-bold text-slate-800">{data.client}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Industry
            </p>
            <p className="font-bold text-slate-800">{data.industry}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Services
            </p>

            <div className="flex flex-wrap gap-1 mt-1">
              {data.services.map((s: string, i: number) => (
                <span
                  key={i}
                  className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              The Challenge
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              {data.challenge.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              Our Approach
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              {data.approach.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              The Results
            </h2>

            <div className="grid gap-4">
              {data.results.map((item: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-700 bg-green-50 p-4 rounded-lg border border-green-100"
                >
                  <span className="text-green-600 font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}