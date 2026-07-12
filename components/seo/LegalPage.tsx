import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type Section = { title: string; content: React.ReactNode };
export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: Section[] }) {
  return <main className="legal-page"><Container><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p><div className="legal-content">{sections.map((section) => <section key={section.title}><h2>{section.title}</h2><div>{section.content}</div></section>)}</div><p className="legal-back"><Link href="/">Return to the pet name generator</Link></p></Container></main>;
}
export const siteEmail = <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>;
