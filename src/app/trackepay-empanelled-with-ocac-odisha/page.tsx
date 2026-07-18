import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  User,
  ArrowLeft,
  ChevronRight,
  Globe,
  Mail,
  Phone,
  CheckCircle2,
  Shield,
  Zap,
  Users,
  Building,
  Target,
  FileText,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "TrackePay Achieves OCAC Empanelment — Odisha GovTech Partner",
  description:
    "TrackePay is proud to be officially empanelled with the Odisha Computer Application Centre (OCAC) under the E&IT Department, Government of Odisha.",
  path: "/trackepay-empanelled-with-ocac-odisha",
  keywords: [
    "OCAC Empanelment",
    "TrackePay",
    "Government of Odisha",
    "OCAC Approved Company",
    "E&IT Department Odisha",
    "e-Governance",
    "Digital Transformation",
    "Software Company in Odisha",
    "GovTech",
    "AI Automation",
    "Custom Software Development",
    "Digital India",
    "Technology Partner",
    "Odisha IT Company",
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
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>

              <ChevronRight className="w-3.5 h-3.5" />

              <Link href="/blog" className="hover:text-orange-500 transition-colors">
                Blog
              </Link>

              <ChevronRight className="w-3.5 h-3.5" />

              <span className="text-slate-800 font-medium truncate">
                OCAC Empanelment
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
              TrackePay Achieves OCAC Empanelment: A New Chapter in Driving Digital Transformation Across Odisha
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-orange-500" />
                </div>
                TrackePay Team
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                July 2026
              </span>
            </div>

            {/* Featured Image */}
            <div 
              className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden mb-12 shadow-lg border border-slate-200 bg-white"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/OCAC-Empanelled.webp"
                alt="TrackePay Empanelled with OCAC - Odisha Computer Application Centre"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                {/* Intro */}
                <p className="font-semibold text-slate-800 text-lg">
                  We are proud to announce a significant milestone in our journey—TrackePay Fintech OPC Pvt. Ltd. has been officially empanelled with the Odisha Computer Application Centre (OCAC) under the Electronics & Information Technology (E&IT) Department, Government of Odisha.
                </p>

                <p>
                  This achievement is more than just a recognition; it reflects our commitment to delivering innovative, reliable, and secure technology solutions that contribute to the digital transformation of government organizations, businesses, and society.
                </p>

                {/* What is OCAC */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4 flex items-center gap-2">
                  <Building className="w-6 h-6 text-orange-500" /> What is OCAC?
                </h2>
                <p>
                  The <strong>Odisha Computer Application Centre (OCAC)</strong> is the designated technical directorate of the <strong>Electronics & Information Technology Department, Government of Odisha</strong>. It plays a pivotal role in planning, implementing, and monitoring various e-Governance initiatives across the state.
                </p>
                <p>
                  Being empanelled with OCAC enables qualified technology companies to participate in government projects and provide IT services that support Odisha&apos;s digital governance ecosystem.
                </p>

                {/* What This Empanelment Means */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-orange-500" /> What This Empanelment Means
                </h2>
                <p>
                  The OCAC empanelment marks an important step forward for TrackePay and opens new opportunities to contribute to public sector digital initiatives.
                </p>
                <p>
                  Through this empanelment, TrackePay is now positioned to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Participate in government technology and e-Governance projects.</li>
                  <li>Deliver enterprise-grade software and digital transformation solutions.</li>
                  <li>Support digital infrastructure modernization.</li>
                  <li>Build secure, scalable, and citizen-centric applications.</li>
                  <li>Collaborate with government departments and public sector organizations across Odisha.</li>
                </ul>

                {/* Our Expertise */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Our Expertise
                </h2>
                <p>
                  TrackePay has consistently focused on developing technology solutions that solve real-world business and governance challenges. Our key areas of expertise include:
                </p>

                <div className="grid sm:grid-cols-2 gap-6 my-8">
                  <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-100 text-orange-600 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Custom Software Development</h4>
                      <p className="text-sm text-slate-600">Tailor-made software solutions designed to improve operational efficiency and productivity.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-100 text-orange-600 mt-0.5">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">AI-Powered Automation</h4>
                      <p className="text-sm text-slate-600">Intelligent automation solutions using Artificial Intelligence for smarter business operations.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-100 text-orange-600 mt-0.5">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Mobile & Web App Development</h4>
                      <p className="text-sm text-slate-600">Modern Android, iOS, and web applications built for scalability and performance.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-100 text-orange-600 mt-0.5">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Digital Governance Solutions</h4>
                      <p className="text-sm text-slate-600">Technology platforms designed for government departments, law enforcement agencies, municipalities, and public institutions.</p>
                    </div>
                  </div>
                </div>

                {/* TRACKinn & Sarai */}
                <div className="p-6 rounded-xl border border-orange-100 bg-orange-50/50 mb-8">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Building className="w-5 h-5 text-orange-500" /> Hotel Management & Sarai Integration
                  </h4>
                  <p className="text-slate-600 text-base mb-3">
                    Our flagship solution <strong>TRACKinn</strong> provides state-of-the-art property management and public safety integrations:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                    <li>Hotel Property Management System</li>
                    <li>Sarai 2.0 Integration</li>
                    <li>Online Booking Engine</li>
                    <li>OCR-based Guest Registration</li>
                    <li>Police Compliance Automation</li>
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 my-8">
                  <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-100 text-orange-600 mt-0.5">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">WhatsApp Business Automation</h4>
                      <p className="text-sm text-slate-600">AI-powered customer engagement solutions using the WhatsApp Business API.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-orange-100 text-orange-600 mt-0.5">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Cloud & Enterprise Solutions</h4>
                      <p className="text-sm text-slate-600">Secure cloud-based platforms for businesses, startups, and government organizations.</p>
                    </div>
                  </div>
                </div>

                {/* Strengthening Digital Governance */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Strengthening Digital Governance
                </h2>
                <p>
                  At TrackePay, we believe technology should simplify governance while improving transparency, efficiency, and citizen services. Over the years, our team has successfully delivered solutions in areas including:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Public Safety & Police Technology</li>
                  <li>Hotel Compliance & Citizen Services</li>
                  <li>Enterprise Automation & AI Document Management</li>
                  <li>CRM & ERP Solutions & Business Process Automation</li>
                </ul>
                <p>
                  Our OCAC empanelment reinforces our capability to deliver these solutions at a larger scale.
                </p>

                {/* Our Vision */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Our Vision
                </h2>
                <p>
                  Every milestone strengthens our commitment towards our vision:
                </p>
                <blockquote className="border-l-4 border-orange-500 pl-6 my-6 bg-orange-50/40 py-4 pr-4 rounded-r-xl">
                  <p className="font-extrabold text-orange-600 text-xl tracking-wide mb-1 uppercase">
                    &ldquo;Digital Bharat, Khushaal Bharat&rdquo;
                  </p>
                  <p className="text-slate-600 italic text-base">
                    We envision a future where technology bridges the gap between citizens, businesses, and government by creating smarter, faster, and more transparent digital ecosystems.
                  </p>
                </blockquote>

                {/* A Message of Gratitude */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  A Message of Gratitude
                </h2>
                <p>
                  This achievement would not have been possible without the dedication of our talented team, the trust of our clients, and the support of our partners and well-wishers.
                </p>
                <p>
                  We extend our heartfelt gratitude to everyone who has been part of our journey. As we move forward, we remain committed to innovation, excellence, and delivering technology solutions that make a meaningful impact.
                </p>

                {/* Looking Ahead */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Looking Ahead
                </h2>
                <p>
                  The OCAC empanelment is not the destination—it is the beginning of new opportunities to collaborate on transformative projects that will shape Odisha&apos;s digital future.
                </p>
                <p>
                  TrackePay looks forward to partnering with government departments, public sector organizations, enterprises, and startups to build innovative digital solutions that empower communities and drive sustainable growth.
                </p>
                <p className="font-semibold text-slate-800">
                  Together, let&apos;s build a smarter, more connected, and digitally empowered India.
                </p>

                {/* About TrackePay */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">About TrackePay</h3>
                  <p className="text-sm text-slate-600">
                    <strong>TrackePay Fintech OPC Pvt. Ltd.</strong> is a technology company specializing in AI Automation, Custom Software Development, Mobile App Development, Website Development, Digital Marketing, Cloud Solutions, Enterprise Software, e-Governance Platforms, WhatsApp Business Automation, and Hotel Management Systems.
                  </p>
                  <p className="text-sm text-slate-600">
                    We are committed to delivering secure, scalable, and future-ready digital solutions for businesses, enterprises, and government organizations.
                  </p>
                </div>

                {/* Contact Us */}
                <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-500" /> Contact Us
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <strong>Website:</strong>{" "}
                      <a href="https://www.trackepay.in" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                        www.trackepay.in
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@trackepay.in" className="text-orange-500 hover:underline">
                        info@trackepay.in
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+918917342626" className="text-orange-500 hover:underline">
                        +91 8917342626
                      </a>
                    </li>
                  </ul>
                </div>
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
