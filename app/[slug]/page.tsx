import type { Metadata } from "next";
import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";
import { getSeoPage, seoPages } from "@/lib/seo-pages";

export const dynamicParams = false;
export function generateStaticParams() { return seoPages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getSeoPage((await params).slug);
  return page ? createSeoPageMetadata(page.slug) : {};
}
export default async function SeoLandingRoute({ params }: { params: Promise<{ slug: string }> }) {
  return <SeoRoutePage slug={(await params).slug} />;
}
