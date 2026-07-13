import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { seoPages } from "@/lib/seo-pages";

const pages = ["/", "/about", "/contact", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : 0.4 })),
    ...seoPages.map((page) => ({ url: absoluteUrl(`/${page.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
