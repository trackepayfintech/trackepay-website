import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT = "Trackepay — Software Company in Bhubaneswar";

const LOGO_RELATIVE = "public/images/logos/logo-dark.png";
const LOGO_FALLBACK_URL = "https://www.trackepay.in/images/logos/logo-dark.png";

let _logoSrc: string | null = null;
function getLogoSrc(): string {
  if (_logoSrc) return _logoSrc;
  // Try filesystem first (works at build time during `next build`).
  try {
    const buf = readFileSync(join(process.cwd(), LOGO_RELATIVE));
    _logoSrc = `data:image/png;base64,${buf.toString("base64")}`;
    return _logoSrc;
  } catch {
    // Fall back to live URL — satori fetches it at render time.
    _logoSrc = LOGO_FALLBACK_URL;
    return _logoSrc;
  }
}

export type OgVariant = {
  title: string;
  eyebrow?: string;
};

export async function renderOG({ title, eyebrow }: OgVariant) {
  const logoSrc = getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
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
        }}
      >
        {/* Soft glow accents */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 540,
            height: 540,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(244,129,32,0.28) 0%, rgba(244,129,32,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
          }}
        />

        {/* Top: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="Trackepay"
            width={320}
            height={80}
            style={{ height: 80, width: "auto", display: "block" }}
          />
          <div
            style={{
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
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: "#F48120",
              }}
            />
            trackepay.in
          </div>
        </div>

        {/* Bottom block: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 1,
          }}
        >
          {eyebrow ? (
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#C2410C",
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: "92%",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 8,
              color: "#475569",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            Software, web, mobile & marketing — built in Bhubaneswar.
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
