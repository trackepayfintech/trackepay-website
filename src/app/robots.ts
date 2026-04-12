import type { MetadataRoute } from "next";

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
