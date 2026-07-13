import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("cute-cat-names");

export default function Page() {
  return <SeoRoutePage slug="cute-cat-names" />;
}
