import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Geist({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Gooding — AI integrations for small businesses",
  description:
    "Strategy workshops, custom GPTs, ops automation, and team training. Practical AI for small businesses, without rebuilding your stack. One call gets you concrete next steps.",
  metadataBase: new URL("https://andrew-gooding.vercel.app"),
  openGraph: {
    title: "Andrew Gooding — AI integrations for small businesses",
    description:
      "Practical AI for small businesses. Strategy, custom GPTs, ops automation, training.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Gooding — AI integrations for small businesses",
    description:
      "Practical AI for small businesses. Strategy, custom GPTs, ops automation, training.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
