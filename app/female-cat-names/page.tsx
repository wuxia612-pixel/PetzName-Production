import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("female-cat-names");

export default function Page() {
  return <SeoRoutePage slug="female-cat-names" />;
}
