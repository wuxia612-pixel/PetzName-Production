import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("male-cat-names");

export default function Page() {
  return <SeoRoutePage slug="male-cat-names" />;
}
