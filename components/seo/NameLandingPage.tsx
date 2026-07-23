import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import type { SeoPage } from "@/lib/seo-pages";
import { absoluteUrl, site } from "@/lib/site";

export function NameLandingPage({ page, relatedPages }: { page: SeoPage; relatedPages: SeoPage[] }) {
  const faq = [
    [
      `How do I choose a good name from these ${page.eyebrow.toLowerCase()}?`,
      "Pick a name you enjoy saying, that is easy to call, and that suits the personality you see every day. Try your favorites out loud with the people who share life with your pet.",
    ],
    [
      "Can I get more personalized ideas?",
      "Yes. The generator uses your pet details and story to suggest six fresh names, each with a short meaning.",
    ],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: page.title, item: absoluteUrl(`/${page.slug}`) },
        ],
      },
      {
        "@type": "Article",
        headline: page.title,
        description: page.description,
        mainEntityOfPage: absoluteUrl(`/${page.slug}`),
        author: { "@type": "Organization", name: site.name },
        publisher: { "@type": "Organization", name: site.name },
      },
      {
        "@type": "ItemList",
        name: page.listIntro,
        numberOfItems: page.names.length,
        itemListElement: page.names.map((idea, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: idea.name,
          description: idea.meaning,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <AdSenseScript />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="topnav">
        <Container className="nav-inner">
          <a className="brand" href="/">
            <span className="brand-mark" />
            Pet Name Generator
          </a>
          <nav aria-label="Primary navigation">
            <a href="/#generator">Generate names</a>
            <a href="/dog-names">Dog names</a>
            <a href="/cat-names">Cat names</a>
            <a className="nav-info-link" href="/about">About</a>
            <a className="nav-info-link" href="/contact">Contact</a>
          </nav>
        </Container>
      </header>

      <main>
        <section className="seo-hero">
          <Container>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="lead">{page.intro}</p>
            <a className="button button--primary" href="/#generator">Generate personal pet names</a>
          </Container>
        </section>

        <section className="section seo-examples">
          <Container>
            <SectionHeading
              eyebrow="NAME LIST"
              title={page.listIntro}
              lead="Browse the list, notice the names that feel natural, then turn your favorite direction into something personal."
            />
            <ol className="seo-name-list">
              {page.names.map((idea) => (
                <li className="seo-name-item" key={idea.name}>
                  <h2>{idea.name}</h2>
                  <p><strong>Meaning:</strong> {idea.meaning}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="section seo-convert">
          <Container>
            <div className="seo-convert-card">
              <p className="eyebrow">PERSONALIZE IT</p>
              <h2>{page.ctaTitle}</h2>
              <p className="lead">A list is a great starting point. Our AI pet name generator turns your pet's type, personality, naming style, and story into six personalized names with meaning.</p>
              <a className="button button--primary" href="/#generator">Generate pet names <span aria-hidden="true">-&gt;</span></a>
            </div>
          </Container>
        </section>

        <section className="section seo-tips">
          <Container className="content-grid">
            <div>
              <p className="eyebrow">HOW TO CHOOSE</p>
              <h2>A name your pet and family can grow into.</h2>
            </div>
            <div className="info-list">
              {page.tips.map((tip, index) => (
                <article className="info-row" key={tip}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{tip}</strong>
                    <p>Keep the names that make you smile; the best one often feels natural from the first call.</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section seo-related">
          <Container>
            <SectionHeading eyebrow="KEEP EXPLORING" title="More pet name ideas to love." />
            <nav className="seo-link-grid" aria-label="Related pet naming pages">
              {relatedPages.map((related) => (
                <a key={related.slug} href={`/${related.slug}`}>
                  <strong>{related.title}</strong>
                  <span>Explore ideas and inspiration</span>
                </a>
              ))}
            </nav>
          </Container>
        </section>

        <section className="section faq">
          <Container>
            <div className="faq-title">
              <p className="eyebrow">QUESTIONS, ANSWERED</p>
              <h2>Generating the right pet name should feel simple.</h2>
            </div>
            <div className="faq-list">
              {faq.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="section cta">
          <Container>
            <h2>There is a name waiting in your story together.</h2>
            <p className="lead">Tell us a little about your companion and generate six personalized names with meaning.</p>
            <a className="button button--primary" href="/#generator">Generate pet names</a>
          </Container>
        </section>
      </main>

      <footer>
        <Container className="footer-row">
          <div className="footer-brand">
            <a href="/" aria-label="PetzName home">petzname.com</a>
            <span>Generate personalized names for every kind of companion.</span>
          </div>
          <nav className="footer-nav" aria-label="PetzName information">
            <a href="/about"><strong>About</strong><small>Our story and values</small></a>
            <a href="/contact"><strong>Contact</strong><small>Feedback and support</small></a>
            <a href="/privacy"><strong>Privacy</strong><small>How information is handled</small></a>
            <a href="/terms"><strong>Terms</strong><small>Service guidelines</small></a>
          </nav>
        </Container>
      </footer>
    </>
  );
}
