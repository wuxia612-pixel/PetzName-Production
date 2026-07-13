import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("small-dog-names");

export default function Page() {
  return <SeoRoutePage slug="small-dog-names" />;
}
