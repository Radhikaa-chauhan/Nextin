import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nextin Universal — Premium Staffing & Recruitment",
    template: "%s | Nextin Universal",
  },
  description:
    "Nextin Universal aligns exceptional talent with prestigious opportunities worldwide. Specializing in contract staffing, permanent placement, and executive search across leading industries.",
  keywords: [
    "staffing",
    "recruitment",
    "talent acquisition",
    "executive search",
    "contract staffing",
    "permanent placement",
    "Nextin Universal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nextin Universal",
    title: "Nextin Universal — Premium Staffing & Recruitment",
    description:
      "Aligning exceptional talent with prestigious opportunities worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextin Universal — Premium Staffing & Recruitment",
    description:
      "Aligning exceptional talent with prestigious opportunities worldwide.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${notoSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
