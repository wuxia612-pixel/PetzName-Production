import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("male-dog-names");

export default function Page() {
  return <SeoRoutePage slug="male-dog-names" />;
}
