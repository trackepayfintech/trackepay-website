import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/career-form/"],
      },
    ],
    sitemap: "https://www.trackepay.in/sitemap.xml",
  };
}
