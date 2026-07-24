import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: "/paw.svg", type: "image/svg+xml" }],
    shortcut: ["/paw.svg"],
    apple: [{ url: "/paw.svg" }],
  },
  title: {
    default: "PetzName | AI Pet Name Generator",
    template: "%s | PetzName",
  },
  description: site.description,
  keywords: ["AI pet name generator", "pet names with meaning", "dog name generator", "cat name generator", "unique pet names"],
  category: "pets",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "PetzName | AI Pet Name Generator",
    description: "Generate six personalized pet names with meaning from your pet's personality, your favorite style, and your story together.",
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PetzName pet name generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetzName | AI Pet Name Generator",
    description: "Generate six personalized pet names with meaning from your pet's personality, your favorite style, and your story together.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StructuredData />{children}</body></html>;
}
