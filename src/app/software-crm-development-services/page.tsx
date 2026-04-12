import type { Metadata } from "next";
import {
  BarChart3,
  Globe,
  Smartphone,
} from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Software & CRM Development Services - Trackepay Fintech",
  description:
    "Transform your business through technology with custom software and CRM development services.",
  keywords: ["CRM development", "custom CRM software", "CRM solutions", "customer relationship management", "sales management software"],
  openGraph: {
    title: "Software & CRM Development Services - Trackepay Fintech",
    description: "Transform your business through technology with custom software and CRM development services.",
    url: "https://www.trackepay.in/software-crm-development-services/",
    siteName: "Trackepay Fintech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & CRM Development Services - Trackepay Fintech",
    description: "Transform your business through technology with custom software and CRM development services.",
  },
};

export default function SoftwareCrmPage() {
  return (
    <ServicePageTemplate
      heroTitle="Software & CRM Development Services"
      heroSubtitle="Transform your business through technology. We design and develop custom software and CRM solutions that automate operations, enhance customer relationships, and accelerate growth."
      breadcrumbLabel="Software & CRM"
      introparagraphs={[
        "At Trackepay, we believe that the right software can transform any business. Our team of experienced developers and strategists works closely with you to understand your unique challenges and build solutions that address them head-on.",
        "From enterprise-grade CRM systems to bespoke business applications, we deliver software that scales with your ambitions and integrates seamlessly into your existing workflows.",
      ]}
      processSteps={[
        {
          title: "Consultation",
          description:
            "We begin by understanding your business, goals, and challenges through in-depth discussions and requirement analysis.",
        },
        {
          title: "Strategy & Planning",
          description:
            "Our team creates a detailed project roadmap, defining scope, timelines, technology stack, and milestones.",
        },
        {
          title: "Design & Development",
          description:
            "We design intuitive interfaces and build robust back-end systems using modern frameworks and best practices.",
        },
        {
          title: "Testing & QA",
          description:
            "Rigorous testing across devices and scenarios ensures your software is reliable, secure, and bug-free.",
        },
        {
          title: "Launch & Deployment",
          description:
            "We handle the deployment process, ensuring a smooth transition from development to production environments.",
        },
        {
          title: "Maintenance & Support",
          description:
            "Ongoing support, updates, and optimization to keep your software performing at its best long after launch.",
        },
      ]}
      processHeading="Our 6-Step Development Process"
      relatedServices={[
        {
          icon: BarChart3,
          title: "Data Analytics",
          description:
            "Leverage data insights to measure and optimize your software performance.",
          href: "/data-analytics-services",
        },
        {
          icon: Globe,
          title: "Web Design & Development",
          description:
            "Complement your software with a stunning web presence.",
          href: "/web-designing-development",
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description:
            "Extend your software solutions to mobile platforms.",
          href: "/mobile-application-design-development",
        },
      ]}
    />
  );
}
