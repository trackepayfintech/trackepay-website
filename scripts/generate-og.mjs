// Build-time generator for per-page Open Graph images.
//
// Writes static PNGs to public/og/<slug>.png so Cloudflare serves them with
// proper image/png MIME (inferred from the .png extension). Bypasses the
// Cloudflare Worker route that next/og's opengraph-image.tsx would create.
//
// Run before `next build`:
//   node scripts/generate-og.mjs

import { ImageResponse } from "@vercel/og";
import { createElement } from "react";
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const h = createElement;

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "og");
const LOGO_PATH = join(ROOT, "public", "images", "logos", "logo-dark.png");

const SIZE = { width: 1200, height: 630 };

// Each entry: file slug → page title + eyebrow.
// "default" is used by the home page and as the global fallback.
const PAGES = [
  { file: "default", eyebrow: "Trackepay Fintech", title: "Software Company in Bhubaneswar" },
  { file: "services", eyebrow: "Services", title: "IT Services in Bhubaneswar" },
  { file: "web-designing-development", eyebrow: "Web Development", title: "Web Development Company in Bhubaneswar" },
  { file: "digital-marketing-services", eyebrow: "Digital Marketing", title: "Digital Marketing Agency in Bhubaneswar" },
  { file: "mobile-application-design-development", eyebrow: "Mobile", title: "Mobile App Development in Bhubaneswar" },
  { file: "software-crm-development-services", eyebrow: "CRM & Software", title: "Custom CRM & Software Development" },
  { file: "data-analytics-services", eyebrow: "Analytics", title: "Data Analytics Services in India" },
  { file: "branding-building-packages", eyebrow: "Branding", title: "Branding Agency in Bhubaneswar" },
  { file: "talent-acquisition", eyebrow: "Hiring", title: "Talent Acquisition & Recruitment" },
  { file: "attendance-management-system", eyebrow: "Product", title: "Attendance Management Software for Business" },
  { file: "hr-management-system", eyebrow: "HRMS", title: "HR Management System for India" },
  { file: "hotel-management-system", eyebrow: "Product", title: "Restaurant Management Software India" },
  { file: "greenbubble-whatsapp-business-api", eyebrow: "GreenBubble", title: "WhatsApp Business API Provider in India" },
  { file: "walytic", eyebrow: "Walytic", title: "WhatsApp Automation at Scale" },
  { file: "government-police-solutions", eyebrow: "Govt & Law Enforcement", title: "Smart Patrol & Police Management Software" },
  { file: "about-us", eyebrow: "About Us", title: "Software & Digital Solutions, Built in Bhubaneswar" },
  { file: "contact", eyebrow: "Contact", title: "Talk to the Trackepay Team" },
  { file: "careers", eyebrow: "Careers", title: "Software Jobs at Trackepay, Bhubaneswar" },
  { file: "career-form", eyebrow: "Career Application", title: "Apply to Join Trackepay" },
  { file: "teams", eyebrow: "Team", title: "The People Behind Trackepay" },
  { file: "technology", eyebrow: "Technology", title: "Our Engineering Stack" },
  { file: "portfolio", eyebrow: "Portfolio", title: "Selected Work & Case Studies" },
  { file: "our-certifications", eyebrow: "Quality", title: "ISO 9001, ISO 27001 & Startup India Certified" },
  { file: "blog", eyebrow: "Blog", title: "Software, Marketing & Business Insights" },
  { file: "cookie-policy", eyebrow: "Legal", title: "Cookie Policy" },
  { file: "privacy-policy", eyebrow: "Legal", title: "Privacy Policy" },
  { file: "terms-conditions", eyebrow: "Legal", title: "Terms & Conditions" },
  {
    file: "top-strategies-for-effective-online-advertising-in-bhubaneswar",
    eyebrow: "Insight",
    title: "Top Strategies for Online Advertising in Bhubaneswar",
  },
];

function template({ title, eyebrow, logoSrc }) {
  return h(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundImage:
          "linear-gradient(135deg, #FFF7ED 0%, #FFE4CC 45%, #FFD0A8 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      },
    },
    h("div", {
      style: {
        position: "absolute",
        top: -180,
        right: -180,
        width: 540,
        height: 540,
        borderRadius: 9999,
        background:
          "radial-gradient(circle, rgba(244,129,32,0.28) 0%, rgba(244,129,32,0) 70%)",
      },
    }),
    h("div", {
      style: {
        position: "absolute",
        bottom: -160,
        left: -160,
        width: 480,
        height: 480,
        borderRadius: 9999,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
      },
    }),
    // Top row: logo + url pill
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        },
      },
      h("img", {
        src: logoSrc,
        alt: "Trackepay",
        width: 320,
        height: 80,
        style: { height: 80, width: "auto", display: "block" },
      }),
      h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(244,129,32,0.25)",
            color: "#9A3412",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 0.5,
          },
        },
        h("div", {
          style: {
            width: 8,
            height: 8,
            borderRadius: 9999,
            background: "#F48120",
          },
        }),
        "trackepay.in"
      )
    ),
    // Bottom block: eyebrow, title, tagline
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 18,
          zIndex: 1,
        },
      },
      eyebrow
        ? h(
            "div",
            {
              style: {
                fontSize: 24,
                fontWeight: 600,
                color: "#C2410C",
                textTransform: "uppercase",
                letterSpacing: 2,
                display: "flex",
              },
            },
            eyebrow
          )
        : null,
      h(
        "div",
        {
          style: {
            fontSize: 68,
            fontWeight: 800,
            color: "#0F172A",
            lineHeight: 1.08,
            letterSpacing: -1.5,
            maxWidth: "92%",
            display: "flex",
          },
        },
        title
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 8,
            color: "#475569",
            fontSize: 22,
            fontWeight: 500,
          },
        },
        "Software, web, mobile & marketing — built in Bhubaneswar."
      )
    )
  );
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const logoBuf = await readFile(LOGO_PATH);
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  let ok = 0;
  let fail = 0;
  for (const page of PAGES) {
    try {
      const response = new ImageResponse(
        template({ ...page, logoSrc }),
        SIZE
      );
      const buf = Buffer.from(await response.arrayBuffer());
      const outPath = join(OUT_DIR, `${page.file}.png`);
      await writeFile(outPath, buf);
      ok++;
      console.log(`OG  generated  public/og/${page.file}.png  (${buf.length} bytes)`);
    } catch (err) {
      fail++;
      console.error(`OG  FAILED     public/og/${page.file}.png  ${err?.message ?? err}`);
    }
  }
  console.log(`\nOG  done  ok=${ok} fail=${fail} of ${PAGES.length}`);
  if (fail > 0) process.exit(1);
}

await main();
