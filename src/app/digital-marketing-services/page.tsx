import type { Metadata } from "next";
import {
  Palette,
  BarChart3,
  Search,
  MousePointerClick,
  Share2,
  Mail,
  FileText,
} from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Trackepay Fintech",
  description:
    "Comprehensive digital marketing services including SEO, PPC, social media marketing, email marketing, and content marketing.",
};

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      heroTitle="Digital Marketing Services"
      heroSubtitle="Grow your online presence, reach your target audience, and drive measurable results with our comprehensive digital marketing strategies tailored to your business goals."
      heroImageSrc="/images/wp/Gemini_Generated_Image_d1idwwd1idwwd1id.png"
      breadcrumbLabel="Digital Marketing"
      introparagraphs={[
        "In the digital age, effective marketing is the key to reaching your customers where they are. Our digital marketing team combines creativity with data-driven strategies to deliver campaigns that convert.",
        "From search engine optimization to social media management, we cover every aspect of digital marketing to ensure your brand stands out in a crowded online landscape.",
      ]}
      sections={[
        {
          heading: "Our Marketing Services",
          description:
            "A full suite of digital marketing solutions to drive traffic, engagement, and revenue.",
          items: [
            {
              icon: Search,
              title: "SEO",
              description:
                "On-page and off-page optimization to improve your search rankings and drive organic traffic to your website.",
            },
            {
              icon: MousePointerClick,
              title: "PPC Advertising",
              description:
                "Targeted pay-per-click campaigns on Google, Bing, and social platforms to deliver immediate results.",
            },
            {
              icon: Share2,
              title: "Social Media Marketing",
              description:
                "Strategic social media management across platforms to build community and drive brand awareness.",
            },
            {
              icon: Mail,
              title: "Email Marketing",
              description:
                "Personalized email campaigns that nurture leads, retain customers, and drive repeat business.",
            },
            {
              icon: FileText,
              title: "Content Marketing",
              description:
                "High-quality content creation including blogs, articles, and resources that establish thought leadership.",
            },
          ],
        },
      ]}
      processSteps={[
        {
          title: "Consultation",
          description:
            "We analyze your current marketing performance, understand your goals, and identify growth opportunities.",
        },
        {
          title: "Strategy & Planning",
          description:
            "A customized marketing strategy with clear KPIs, channel selection, and budget allocation.",
        },
        {
          title: "Implementation",
          description:
            "Campaign execution across chosen channels with compelling creative and targeted messaging.",
        },
        {
          title: "Analysis & Reporting",
          description:
            "Regular performance reports with insights and recommendations for continuous optimization.",
        },
      ]}
      processHeading="Our 4-Step Process"
      relatedServices={[
        {
          icon: Palette,
          title: "Branding Building Packages",
          description:
            "Strengthen your marketing with a cohesive brand identity.",
          href: "/branding-building-packages",
        },
        {
          icon: BarChart3,
          title: "Data Analytics",
          description:
            "Measure and optimize your marketing performance with data insights.",
          href: "/data-analytics-services",
        },
      ]}
    />
  );
}
