import "./globals.css";
import { Footer } from "@/components/base/Footer";
import Navbar from "@/components/base/Navbar";
import { SectionContainer } from "@/components/base/SectionContainer";
import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AtilaDev",
  description: "Working on it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div className="flex h-screen flex-col bg-gray-800">
          <div>
            <Navbar />
          </div>
          <main className="flex-grow">
            <SectionContainer>{children}</SectionContainer>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
