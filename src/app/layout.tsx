import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import "./globals.css";

const GTM_ID = "GTM-5LNFVCRH";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  // ✅ FIX WARNING
  metadataBase: new URL("http://localhost:3000"), // change to your domain later

  title:
    "Trackepay Fintech (OPC) Pvt Ltd | Smart Digital Solutions & IT Services",
  description:
    "Trackepay provides enterprise-grade digital solutions, software development, fintech services, and marketing strategies to help businesses streamline operations and accelerate growth.",

  // ✅ LOGO (FAVICON)
  icons: {
    icon: "/images/wp/Trackepay-logo.png",
  },

  openGraph: {
    title: "Trackepay Fintech | Smart Digital Solutions & IT Services",
    description:
      "Enterprise-grade digital solutions, software development, and fintech services that help businesses streamline operations and accelerate growth.",
    type: "website",
    locale: "en_IN",
    siteName: "Trackepay Fintech",

    // ✅ SOCIAL IMAGE
    images: [
      {
        url: "/images/wp/Trackepay-logo.png",
        width: 1200,
        height: 1000,
        alt: "Trackepay Fintech Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Trackepay Fintech | Smart Digital Solutions & IT Services",
    description:
      "Enterprise-grade digital solutions, software development, and fintech services.",

    images: ["/images/wp/Trackepay-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}