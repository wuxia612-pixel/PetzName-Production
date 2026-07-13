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
    default: "Pet Name Generator | Names With Meaning",
    template: "%s | Pet Name Generator",
  },
  description: site.description,
  keywords: ["AI pet name generator", "pet names with meaning", "dog name generator", "cat name generator", "unique pet names"],
  category: "pets",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pet Name Generator | Names With Meaning",
    description: "Turn your pet's personality and your shared story into six meaningful name ideas.",
    siteName: "Pet Name Generator",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PetzName pet name generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Name Generator | Names With Meaning",
    description: "Turn your pet's personality and your shared story into six meaningful name ideas.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StructuredData />{children}</body></html>;
}
