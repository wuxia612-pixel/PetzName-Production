import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NameLandingPage } from "@/components/seo/NameLandingPage";
import { getSeoPage } from "@/lib/seo-pages";

export function createSeoPageMetadata(slug: string): Metadata {
  const page = getSeoPage(slug);
  if (!page) return {};

  const canonical = `/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function SeoRoutePage({ slug }: { slug: string }) {
  const page = getSeoPage(slug);
  if (!page) notFound();

  const relatedPages = page.related
    .map(getSeoPage)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return <NameLandingPage page={page} relatedPages={relatedPages} />;
}
