import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("anime-pet-names");

export default function Page() {
  return <SeoRoutePage slug="anime-pet-names" />;
}
