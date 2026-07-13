import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("husky-names");

export default function Page() {
  return <SeoRoutePage slug="husky-names" />;
}
