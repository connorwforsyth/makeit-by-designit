import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import alphabeta from "@/styles/alphabetaFont";
import Texture from "@/components/BackgroundTexture";

const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Makeit — By Designit",
  description:
    "Your team, your users and our squad, creating a prototype that can be tested with your customers right away.",
  metadataBase: new URL("https://makeit-by-designit.vercel.app/"),
  openGraph: {
    title: "Makeit",
    description:
      "Our team, your users and our squad, creating a prototype that can be tested with your customers right away.",
    url: "https://makeit.designit.com",
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
    <html lang="en">
      <body
        style={{
          backdropFilter: "url(#grainy)",
        }}
        className={`flex min-h-screen flex-col antialiased ${alphabeta.className}`}
      >
        <Texture />
        {children}
        <Footer />
      </body>
    </html>
  );
}
