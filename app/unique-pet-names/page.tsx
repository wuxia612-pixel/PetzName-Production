import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("unique-pet-names");

export default function Page() {
  return <SeoRoutePage slug="unique-pet-names" />;
}
