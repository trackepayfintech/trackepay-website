import type { Metadata } from "next";
import {
  Megaphone,
  BarChart3,
  PenTool,
  Target,
  FileText,
  Share2,
  Globe,
} from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Branding Building Packages - Trackepay Fintech",
  description:
    "Build a strong, memorable brand identity that resonates with your audience. Complete branding packages for startups and growing businesses.",
};

export default function BrandingPage() {
  return (
    <ServicePageTemplate
      heroTitle="Branding Building Packages"
      heroSubtitle="Build a strong, memorable brand identity that resonates with your audience. Our comprehensive branding packages help startups and growing businesses establish a professional, cohesive presence."
      heroImageSrc="/images/wp/Gemini_Generated_Image_bv68rabv68rabv68.png"
      breadcrumbLabel="Branding Packages"
      introparagraphs={[
        "Your brand is more than just a logo — it's the complete experience your customers have with your business. We help startups and growing businesses build brands that stand out, connect with audiences, and drive loyalty.",
        "Our branding experts combine strategy, design, and storytelling to create brand identities that are authentic, memorable, and built to last.",
      ]}
      sections={[
        {
          heading: "What's Included",
          description:
            "Everything you need to build a professional, cohesive brand from the ground up.",
          items: [
            {
              icon: PenTool,
              title: "Brand Identity Design",
              description:
                "Logo design, color palettes, typography, and visual elements that define your brand's look and feel.",
            },
            {
              icon: Target,
              title: "Brand Strategy",
              description:
                "Positioning, messaging, target audience research, and competitive analysis to define your brand direction.",
            },
            {
              icon: FileText,
              title: "Brand Collateral",
              description:
                "Business cards, letterheads, presentations, and marketing materials that reinforce your brand.",
            },
            {
              icon: Share2,
              title: "Social Media Branding",
              description:
                "Consistent social media profiles, templates, and content guidelines across all platforms.",
            },
            {
              icon: Globe,
              title: "Website Design",
              description:
                "A branded website design that translates your identity into a compelling online presence.",
            },
          ],
        },
      ]}
      processSteps={[
        {
          title: "Discovery",
          description:
            "We learn about your business, values, audience, and competitive landscape through workshops and research.",
        },
        {
          title: "Strategy",
          description:
            "Defining your brand positioning, voice, messaging framework, and target audience personas.",
        },
        {
          title: "Design",
          description:
            "Creating the visual identity including logo concepts, color systems, typography, and design language.",
        },
        {
          title: "Development",
          description:
            "Building out all brand assets, templates, guidelines, and collateral for consistent application.",
        },
        {
          title: "Launch",
          description:
            "Rolling out your new brand across all touchpoints with a strategic launch plan and team training.",
        },
      ]}
      processHeading="Our 5-Step Methodology"
      relatedServices={[
        {
          icon: Megaphone,
          title: "Digital Marketing",
          description:
            "Amplify your new brand with targeted digital marketing campaigns.",
          href: "/digital-marketing-services",
        },
        {
          icon: BarChart3,
          title: "Data Analytics",
          description:
            "Track brand awareness and engagement with data-driven analytics.",
          href: "/data-analytics-services",
        },
      ]}
    />
  );
}
