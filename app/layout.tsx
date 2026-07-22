import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexa-studio-ashen.vercel.app"),
  title: "Nexa Studio — Jasa Pembuatan Website Profesional",
  description:
    "Nexa Studio membantu bisnis berkembang melalui website modern, cepat, responsif, dan profesional.",

  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "web development",
    "landing page",
    "company profile",
    "website bisnis",
    "Nexa Studio",
  ],

  authors: [
    {
      name: "Nexa Studio",
    },
  ],

  creator: "Nexa Studio",

  openGraph: {
    title: "Nexa Studio — Jasa Pembuatan Website Profesional",
    description:
      "Bangun website modern, cepat, responsif, dan profesional untuk mengembangkan bisnis Anda.",
    url: "https://nexa-studio-ashen.vercel.app",
    siteName: "Nexa Studio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexa Studio — Jasa Pembuatan Website Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Studio — Jasa Pembuatan Website Profesional",
    description:
      "Solusi website modern dan profesional untuk membantu bisnis berkembang.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}