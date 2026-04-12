import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  QrCode,
  Car,
  AlertTriangle,
  Settings,
  MapPin,
  BarChart3,
  ScanFace,
  Radio,
  Building2,
  Wifi,
  Languages,
  Lock,
  Brain,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Users,
  Clock,
  Activity,
  Zap,
} from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title:
    "Government & Police Solutions - Smart Patrol Management | Trackepay",
  description:
    "AI-powered patrol management system for police departments. QR patrolling, live tracking, face recognition, incident reporting & advanced analytics.",
  keywords: ["government solutions", "police management system", "smart policing", "patrol management", "law enforcement technology", "e-governance"],
  openGraph: {
    title: "Government & Police Solutions - Smart Patrol Management | Trackepay",
    description: "AI-powered patrol management system for police departments. QR patrolling, live tracking, face recognition, incident reporting & advanced analytics.",
    url: "https://www.trackepay.in/government-police-solutions/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Government & Police Solutions - Smart Patrol Management | Trackepay",
    description: "AI-powered patrol management system for police departments. QR patrolling, live tracking, face recognition, incident reporting & advanced analytics.",
  },
};

const stats = [
  { value: "50+", label: "Police Stations", icon: Building2 },
  { value: "1000+", label: "Beat Officers", icon: Users },
  { value: "99.9%", label: "Uptime", icon: Activity },
  { value: "Real-time", label: "Monitoring", icon: Clock },
];

const problems = [
  {
    problem: "Manual beat books are unreliable and easily falsified",
    solution: "Digital QR-based verification with tamper-proof timestamps",
    icon: QrCode,
  },
  {
    problem: "No real-time oversight of patrol officers in the field",
    solution: "Live GPS tracking & interactive supervisor dashboards",
    icon: MapPin,
  },
  {
    problem: "Delayed incident response due to manual reporting chains",
    solution: "Instant photo/text reporting with GPS-tagged evidence",
    icon: Zap,
  },
];

const products = [
  {
    icon: QrCode,
    title: "QR Scan Patrolling",
    description:
      "QR-code tags placed at strategic beat points enable digital verification of patrol completion. When officers scan the code, real-time data syncs across admin dashboards and mobile applications.",
    benefits: [
      "Eliminates paper beat books",
      "Tamper-proof verification",
      "Timestamped patrol records",
      "Offline capability",
    ],
  },
  {
    icon: Car,
    title: "Vehicle Patrolling",
    description:
      "Geofenced vehicle tracking with automatic location updates. Monitor patrol vehicle routes, stops, and coverage areas with precision GPS technology.",
    benefits: [
      "Route optimization",
      "Geofence alerts",
      "Fuel efficiency tracking",
      "Coverage heat maps",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Live Incident Reporting",
    description:
      "Officers submit real-time incident reports with text, photos, and GPS coordinates directly to supervisors. Enable rapid response coordination and evidence documentation.",
    benefits: [
      "Photo & text evidence",
      "GPS-tagged reports",
      "Instant supervisor alerts",
      "Chain of custody records",
    ],
  },
  {
    icon: Settings,
    title: "Customer-Specific Features",
    description:
      "Integrate with CCTNS criminal records, MOB databases, rowdy-sheeter lists, and gun license information. Customized dashboards tailored to each department\u2019s workflow.",
    benefits: [
      "CCTNS integration",
      "MOB records access",
      "Rowdy-sheeter alerts",
      "Gun license tracking",
    ],
  },
  {
    icon: MapPin,
    title: "Beat Tracking",
    description:
      "Real-time supervisor monitoring of all beat officer locations and patrol completion status. Visual dashboards show active beats, pending checkpoints, and officer movements.",
    benefits: [
      "Live officer locations",
      "Beat completion rates",
      "Missed checkpoint alerts",
      "Shift performance metrics",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description:
      "Role-based admin dashboards with daily, weekly, and monthly patrol analytics. Generate PDF reports, compare station performance, and identify coverage gaps.",
    benefits: [
      "Role-based access",
      "Customizable reports",
      "PDF export",
      "Cross-station comparison",
    ],
  },
  {
    icon: ScanFace,
    title: "Face Recognition (AI & ML)",
    description:
      "Dual-purpose AI system for automated attendance verification and suspect identification. Cross-reference faces against criminal databases in real-time.",
    benefits: [
      "Automated attendance",
      "Criminal database matching",
      "98%+ accuracy",
      "Works offline",
    ],
  },
  {
    icon: Radio,
    title: "Live Tracking",
    description:
      "Real-time visibility of all patrol personnel with live GPS tracking. View active patrols, response times, and coverage density on interactive maps.",
    benefits: [
      "Interactive map view",
      "Historical playback",
      "Response time analytics",
      "Coverage optimization",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Deploy",
    description:
      "QR codes placed at beat points across jurisdiction",
  },
  {
    number: "02",
    title: "Patrol",
    description:
      "Officers scan QR codes and submit reports via mobile app",
  },
  {
    number: "03",
    title: "Monitor",
    description:
      "Supervisors track all activity on real-time dashboards",
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Generate reports and optimize patrol strategies",
  },
];

const differentiators = [
  {
    icon: Building2,
    title: "Built for Indian Police",
    description:
      "Designed with input from active duty officers across multiple state police departments.",
  },
  {
    icon: Shield,
    title: "CCTNS Integration",
    description:
      "Seamless connection with the national criminal database for instant record access.",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description:
      "Face recognition and predictive analytics to enhance policing effectiveness.",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description:
      "Full functionality in low-connectivity areas with automatic sync when back online.",
  },
  {
    icon: Languages,
    title: "Multi-Language",
    description:
      "Hindi, English, and regional language support for officers across India.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, role-based access control, and audit trails.",
  },
];

const deployments = [
  "District Police",
  "State Highway Patrol",
  "Railway Police",
  "Smart City Projects",
];

export default function GovernmentPoliceSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#110F33] via-[#15133d] to-[#1a1850] py-20 lg:py-28">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F48120]/15 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orange-400">
              Government &amp; Police Solutions
            </span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Government &amp; Law Enforcement
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Smart Policing Solutions for Modern Law Enforcement
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                Transform patrol management with AI-powered tracking, real-time
                incident reporting, and advanced analytics. Trusted by police
                departments across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#F48120] hover:bg-orange-600 text-white font-medium text-sm rounded-lg px-8 py-3.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white font-medium text-sm rounded-lg px-8 py-3.5 hover:bg-white/10 transition-all duration-200"
                >
                  Download Brochure
                </Link>
              </div>
            </div>

            {/* Decorative Shield Graphic */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-br from-orange-500/15 to-transparent flex items-center justify-center">
                    <Shield className="w-28 h-28 text-orange-400/80" strokeWidth={1} />
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium">
                  AI Powered
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium">
                  Real-time GPS
                </div>
                <div className="absolute top-1/2 -right-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium">
                  CCTNS Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              The Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Digital Patrol Management?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Traditional policing methods are falling behind. Modern challenges
              demand modern solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
                    Problem
                  </h4>
                  <p className="text-slate-700 font-medium">{item.problem}</p>
                </div>
                <div className="border-t border-slate-100 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
                    Solution
                  </h4>
                  <p className="text-slate-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products / Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A comprehensive suite of tools designed to modernize every aspect
              of patrol management and law enforcement operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <product.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-[#110F33]">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple to Deploy, Powerful to Use
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Get up and running in days, not months. Our streamlined deployment
              process ensures minimal disruption to operations.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-500/50 via-orange-500/30 to-orange-500/50" />

            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Why Trackepay
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              The Trackepay Advantage
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Purpose-built for Indian law enforcement with features no
              competitor can match.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployments Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Trusted Nationwide
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Deployed Across India
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From district police stations to smart city projects, our
              solutions power law enforcement across the country.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {deployments.map((deployment, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-[#110F33] text-white px-6 py-3 rounded-full text-sm font-medium"
              >
                <Shield className="w-4 h-4 text-orange-400" />
                {deployment}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
