import type { Metadata } from "next";
import {
  Code,
  BarChart3,
  Globe,
} from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Mobile Application Design & Development - Trackepay Fintech",
  description:
    "Welcome to TrackePay, where innovation and technology meet! We design and develop mobile applications that engage users and drive results.",
};

export default function MobileAppPage() {
  return (
    <ServicePageTemplate
      heroTitle="Mobile Application Design & Development"
      heroSubtitle="Welcome to TrackePay, where innovation and technology meet! We create high-performance, user-friendly mobile applications that deliver exceptional experiences on iOS and Android."
      heroImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Mobile-Application-Design.webp"
      breadcrumbLabel="Mobile Apps"
      introparagraphs={[
        "Welcome to TrackePay, where innovation and technology meet! Our mobile app development team combines creative design with technical excellence to build apps that users love.",
        "Whether you need a consumer-facing app, an enterprise mobility solution, or a cross-platform application, we deliver solutions that are fast, reliable, and built for scale.",
      ]}
      processSteps={[
        {
          title: "Consultation",
          description:
            "We discuss your app idea, target audience, and business objectives to define the project scope and vision.",
        },
        {
          title: "Strategy & Planning",
          description:
            "Detailed planning including user flows, wireframes, technology selection, and a clear development roadmap.",
        },
        {
          title: "Design & Development",
          description:
            "Our designers create beautiful interfaces while developers build performant, scalable mobile architectures.",
        },
        {
          title: "Testing & QA",
          description:
            "Comprehensive testing across devices, OS versions, and network conditions to ensure flawless performance.",
        },
        {
          title: "Launch & Deployment",
          description:
            "App store submission, optimization, and launch strategy to maximize visibility and downloads.",
        },
        {
          title: "Maintenance & Support",
          description:
            "Ongoing updates, bug fixes, feature enhancements, and performance monitoring post-launch.",
        },
      ]}
      processHeading="Our 6-Step Development Process"
      relatedServices={[
        {
          icon: Code,
          title: "Software & CRM",
          description:
            "Integrate your mobile app with custom back-end software and CRM systems.",
          href: "/software-crm-development-services",
        },
        {
          icon: Globe,
          title: "Web Design & Development",
          description:
            "Create a cohesive digital experience across web and mobile.",
          href: "/web-designing-development",
        },
        {
          icon: BarChart3,
          title: "Data Analytics",
          description:
            "Track and analyze your mobile app performance with data-driven insights.",
          href: "/data-analytics-services",
        },
      ]}
    />
  );
}
