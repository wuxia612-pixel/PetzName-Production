import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("disney-pet-names");

export default function Page() {
  return <SeoRoutePage slug="disney-pet-names" />;
}
