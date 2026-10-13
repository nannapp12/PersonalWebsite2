import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "wdth"],
  display: "swap",
});
const text = Source_Serif_4({ subsets: ["latin"], variable: "--font-text", axes: ["opsz"], display: "swap" });

export const metadata: Metadata = {
  title: "Pujitha Nannapaneni | Product Portfolio Management Leader",
  description:
    "Partner at Archents. Fourteen years in life sciences portfolio management across AbbVie, Cibus, Adaptive Biotechnologies and Seagen. Kellogg MBA. Building AI agents.",
  openGraph: {
    title: "Pujitha Nannapaneni",
    description: "Product portfolio management leader in life sciences, building AI agents.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
