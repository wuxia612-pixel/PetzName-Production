import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("puppy-names");

export default function Page() {
  return <SeoRoutePage slug="puppy-names" />;
}
