import type { Metadata } from "next";
import {
  Code,
  Globe,
  Smartphone,
  Clock,
  FileBarChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Data Analytics Services in India — BI, Dashboards & Insights",
  description:
    "Turn raw data into decisions. Trackepay's data analytics services cover dashboards, predictive analytics, and reporting tools for businesses across India.",
  path: "/data-analytics-services",
  keywords: [
    "data analytics services india",
    "business intelligence india",
    "dashboard development india",
    "predictive analytics services",
    "data analytics company bhubaneswar",
  ],
});

export default function DataAnalyticsPage() {
  return (
    <ServicePageTemplate
      heroTitle="Data Analytics Services"
      heroSubtitle="We specialize in harnessing the full potential of your data to transform raw numbers into actionable insights that drive smarter decisions, optimize performance, and fuel business growth."
      heroImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/data-analytics-services.webp"
      breadcrumbLabel="Data Analytics"
      introparagraphs={[
        "We specialize in harnessing the full potential of your data. In today's data-driven world, having the right analytics in place can be the difference between guessing and knowing.",
        "Our data analytics services help you collect, process, visualize, and act on your business data to uncover hidden opportunities, reduce inefficiencies, and stay ahead of the competition.",
      ]}
      sections={[
        {
          heading: "Why Choose Our Analytics",
          description:
            "Four key benefits that set our data analytics services apart.",
          items: [
            {
              icon: Clock,
              title: "Time-Saving Automation",
              description:
                "Automated data collection and reporting pipelines that save hours of manual work every week.",
            },
            {
              icon: FileBarChart,
              title: "Easy-to-Read Reports",
              description:
                "Clear, visual dashboards and reports that make complex data accessible to everyone on your team.",
            },
            {
              icon: ShieldCheck,
              title: "Reliable Insights",
              description:
                "Data validation and quality checks ensure the insights you act on are accurate and trustworthy.",
            },
            {
              icon: Target,
              title: "Value-Focused Analytics",
              description:
                "We focus on metrics that matter to your business, helping you track ROI and drive meaningful outcomes.",
            },
          ],
        },
      ]}
      relatedServices={[
        {
          icon: Code,
          title: "Software & CRM",
          description:
            "Integrate analytics directly into your custom software and CRM platforms.",
          href: "/software-crm-development-services",
        },
        {
          icon: Globe,
          title: "Web Design & Development",
          description:
            "Optimize your web performance with data-driven design decisions.",
          href: "/web-designing-development",
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description:
            "Track and improve your mobile app metrics with integrated analytics.",
          href: "/mobile-application-design-development",
        },
      ]}
    />
  );
}
