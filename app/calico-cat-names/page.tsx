import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("calico-cat-names");

export default function Page() {
  return <SeoRoutePage slug="calico-cat-names" />;
}
