import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("black-dog-names");

export default function Page() {
  return <SeoRoutePage slug="black-dog-names" />;
}
