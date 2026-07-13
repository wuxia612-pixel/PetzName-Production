import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("cool-pet-names");

export default function Page() {
  return <SeoRoutePage slug="cool-pet-names" />;
}
