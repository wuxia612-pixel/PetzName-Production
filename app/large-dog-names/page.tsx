import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("large-dog-names");

export default function Page() {
  return <SeoRoutePage slug="large-dog-names" />;
}
