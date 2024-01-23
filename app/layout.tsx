import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import alphabeta from "@/styles/alphabetaFont";

const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Makeit — By Designit",
  description: "An experiment created by Designit Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alphabeta.className}>
        <div className="min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
