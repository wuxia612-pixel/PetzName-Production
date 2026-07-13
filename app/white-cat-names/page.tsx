import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("white-cat-names");

export default function Page() {
  return <SeoRoutePage slug="white-cat-names" />;
}
