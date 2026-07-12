import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://petzname.com"),
  title: {
    default: "Pet Name Generator | Names With Meaning",
    template: "%s | Pet Name Generator",
  },
  description: "Find six meaningful pet name ideas shaped by your pet's personality, your family's story, and the little moments you share together.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Name Generator | Names With Meaning",
    description: "Turn your pet's personality and your shared story into six meaningful name ideas.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
