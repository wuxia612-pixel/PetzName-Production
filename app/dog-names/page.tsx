import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("dog-names");

export default function Page() {
  return <SeoRoutePage slug="dog-names" />;
}
