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
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
}: BuildMetaInput): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
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
          url: ogImage,
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
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
