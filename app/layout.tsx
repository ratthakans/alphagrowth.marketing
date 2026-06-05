import type { Metadata } from "next";
import { Space_Grotesk, Anuphan, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const sans = Anuphan({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphagrowth.marketing"),
  title: {
    default: "Alpha Growth Marketing — Creative Marketing Agency สายเทรดทอง XAU/USD",
    template: "%s · Alpha Growth Marketing",
  },
  description:
    "Creative + Performance Agency ที่เข้าใจสายเทรดทอง XAU/USD · Forex · Prop Firm เปลี่ยน Ad Spend เป็น FTD จริง — Bangkok 2026",
  keywords: [
    "XAU/USD marketing",
    "forex agency",
    "prop firm marketing",
    "เอเจนซี่สายเทรด",
    "FTD",
    "creative agency bangkok",
  ],
  openGraph: {
    title: "Alpha Growth Marketing",
    description: "We create the alpha. You market the growth.",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
