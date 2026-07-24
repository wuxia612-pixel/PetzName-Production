import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";
import { seoPages } from "@/lib/seo-pages";

const pages = ["/", "/about", "/contact", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdated);
  return [
    ...pages.map((path) => ({ url: absoluteUrl(path), lastModified, changeFrequency: path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : 0.4 })),
    ...seoPages.map((page) => ({ url: absoluteUrl(`/${page.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
