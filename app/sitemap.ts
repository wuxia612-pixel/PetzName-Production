import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const pages = ["/", "/about", "/contact", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.4 }));
}
