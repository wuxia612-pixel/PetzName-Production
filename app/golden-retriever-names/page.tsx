import { createSeoPageMetadata, SeoRoutePage } from "@/components/seo/SeoRoutePage";

export const metadata = createSeoPageMetadata("golden-retriever-names");

export default function Page() {
  return <SeoRoutePage slug="golden-retriever-names" />;
}
