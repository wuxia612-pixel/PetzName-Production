import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("brown-dog-names");

export default function Page() {
  return <SeoRoutePage slug="brown-dog-names" />;
}
