import type { Metadata } from "next";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
  metadataBase: new URL("https://www.trackepay.in"),
  title: {
    default:
      "Trackepay Fintech (OPC) Pvt Ltd | Smart Digital Solutions & IT Services",
    template: "%s | Trackepay Fintech",
  },
  description:
    "Trackepay provides enterprise-grade digital solutions, software development, fintech services, and marketing strategies to help businesses streamline operations and accelerate growth.",
  keywords: [
    "Trackepay",
    "fintech",
    "software development",
    "IT services",
    "digital solutions",
    "Bhubaneswar",
    "enterprise software",
    "smart policing",
    "government solutions",
    "SaaS",
  ],
  authors: [{ name: "Trackepay Fintech (OPC) Pvt Ltd" }],
  creator: "Trackepay Fintech",
  publisher: "Trackepay Fintech (OPC) Pvt Ltd",
  openGraph: {
    title: "Trackepay Fintech | Smart Digital Solutions & IT Services",
    description:
      "Enterprise-grade digital solutions, software development, and fintech services that help businesses streamline operations and accelerate growth.",
    url: "https://www.trackepay.in",
    type: "website",
    locale: "en_IN",
    siteName: "Trackepay Fintech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trackepay Fintech | Smart Digital Solutions & IT Services",
    description:
      "Enterprise-grade digital solutions, software development, and fintech services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.trackepay.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
