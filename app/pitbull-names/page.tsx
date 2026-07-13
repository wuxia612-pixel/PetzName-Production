import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("pitbull-names");

export default function Page() {
  return <SeoRoutePage slug="pitbull-names" />;
}
