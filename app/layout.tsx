import type { Metadata } from "next";
import "@/styles/globals.css";
import alphabeta from "@/styles/alphabetaFont";
import Texture from "@/components/BackgroundTexture";
import Footer from "@/components/LandingPageElements/Footer";
import { PHProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Makeit — By Designit",
  description:
    "Your team, your users and our squad, creating a prototype that can be tested with your customers right away.",
  metadataBase: new URL("https://makeitbydesignit.com/"),
  openGraph: {
    title: "Makeit",
    description:
      "Our team, your users and our squad, creating a prototype that can be tested with your customers right away.",
    url: "https://makeitbydesignit.com",
    siteName: "Makeit — by Designit",
    images: [
      {
        url: "/opengraph-image.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "/opengraph-image.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        style={{
          backdropFilter: "url(#grainy)",
        }}
        className={` flex flex-col antialiased ${alphabeta.className}`}
      >
        <PHProvider>
          <Texture />
          {children}
          <Footer />
          <Analytics />
        </PHProvider>
      </body>
    </html>
  );
}
