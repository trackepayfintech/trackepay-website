import type { MetadataRoute } from "next";

const BASE_URL = "https://www.trackepay.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/about-us/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contact/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/portfolio/", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/blog/", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/careers/", changeFrequency: "weekly" as const, priority: 0.6 },
    { path: "/career-form/", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/teams/", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/technology/", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/our-certifications/", changeFrequency: "monthly" as const, priority: 0.5 },
    // Services
    { path: "/web-designing-development/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/mobile-application-design-development/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/digital-marketing-services/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/data-analytics-services/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/software-crm-development-services/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/branding-building-packages/", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/talent-acquisition/", changeFrequency: "monthly" as const, priority: 0.7 },
    // Products
    { path: "/greenbubble-whatsapp-business-api/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/walytic/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/government-police-solutions/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/hr-management-system/", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/attendance-management-system/", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/hotel-management-system/", changeFrequency: "monthly" as const, priority: 0.7 },
    // Blog posts
    { path: "/top-strategies-for-effective-online-advertising-in-bhubaneswar/", changeFrequency: "yearly" as const, priority: 0.5 },
    // Legal
    { path: "/privacy-policy/", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms-conditions/", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
