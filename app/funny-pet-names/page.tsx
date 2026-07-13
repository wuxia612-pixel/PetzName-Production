import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("funny-pet-names");

export default function Page() {
  return <SeoRoutePage slug="funny-pet-names" />;
}
