import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("orange-cat-names");

export default function Page() {
  return <SeoRoutePage slug="orange-cat-names" />;
}
