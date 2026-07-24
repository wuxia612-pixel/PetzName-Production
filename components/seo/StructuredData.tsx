import { absoluteUrl, site } from "@/lib/site";

const data = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, logo: absoluteUrl("/paw.svg"), email: site.contactEmail },
  { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, publisher: { "@id": `${site.url}/#organization` } },
  { "@type": "WebApplication", "@id": `${site.url}/#app`, name: site.name, alternateName: "PetzName AI Pet Name Generator", url: site.url, applicationCategory: "LifestyleApplication", operatingSystem: "Any", isAccessibleForFree: true, description: site.description, publisher: { "@id": `${site.url}/#organization` } },
] };

export function StructuredData() { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />; }
