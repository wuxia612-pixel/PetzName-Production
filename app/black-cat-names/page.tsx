import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("black-cat-names");

export default function Page() {
  return <SeoRoutePage slug="black-cat-names" />;
}
