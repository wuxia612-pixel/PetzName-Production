import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("white-dog-names");

export default function Page() {
  return <SeoRoutePage slug="white-dog-names" />;
}
