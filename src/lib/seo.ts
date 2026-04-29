import type { Metadata } from "next";

export const SITE_URL = "https://www.trackepay.in";
export const SITE_NAME = "Trackepay Fintech (OPC) Pvt Ltd";
export const DEFAULT_OG_IMAGE = "/images/wp/Trackepay-logo.png";
export const TWITTER_HANDLE = "@trackepay";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /**
   * Override the OG image URL. Defaults to the static PNG generated
   * at build time by `scripts/generate-og.mjs` and served from
   * `/og/<slug>.png` (proper image/png MIME, no Worker route).
   */
  ogImage?: string;
};

function defaultOgImageFor(path: string): string {
  if (path === "/" || path === "") return `${SITE_URL}/og/default.png`;
  // Convert "/services/web-designing-development" -> "services-web-designing-development"
  const slug = path.replace(/^\/+|\/+$/g, "").replace(/\//g, "-");
  return `${SITE_URL}/og/${slug}.png`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: BuildMetaInput): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const og = ogImage ?? defaultOgImageFor(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: og,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
    robots: { index: true, follow: true },
  };
}
