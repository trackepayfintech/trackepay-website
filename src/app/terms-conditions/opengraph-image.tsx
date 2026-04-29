import { renderOG, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = OG_ALT;
export const dynamic = "force-static";

export default async function Image() {
  return renderOG({
    eyebrow: "Legal",
    title: "Terms & Conditions",
  });
}
