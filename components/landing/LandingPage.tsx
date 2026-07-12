"use client";

import { useEffect, useState } from "react";
import { Generator, type Result } from "./Generator";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const initial: Result[] = ["Sunny", "Milo", "Scout", "Luna", "Bowie", "Maple"].map((name, i) => ({ name, meaning: ["A bright companion name that sounds gentle, warm, and easy to call.", "Friendly and curious, suited to a new family member who loves to explore.", "Short and clear for recall training, with a little adventurous energy.", "A calm, moonlit name for a soft, affectionate, or elegant pet.", "Slightly artistic and memorable, ideal for a lively pet with camera-ready charm.", "Warm and seasonal, with the feeling of home, comfort, and everyday closeness."][i] }));

const faqItems = [
  ["How are these name ideas created?", "Share your pet’s type, the naming mood you love, and a small part of your story together. Our AI language model thoughtfully turns those details into six warm, tailored name ideas and explains why each one may suit your companion."],
  ["Can I use it for dogs, cats, and other pets?", "Yes. It works for dogs, cats, rabbits, birds, reptiles, hamsters, horses, and almost any other companion animal. Choose Other and mention the species, appearance, or personality in the story field for more relevant ideas."],
  ["Will the names feel personal?", "Every set begins with the details you share, so the ideas feel more personal than a fixed name list. A name may already exist elsewhere, but your results avoid duplicates and each one comes with its own connection to your pet."],
  ["What should I write in the story field?", "Share one or two useful details, such as how you met, a favorite habit, coat color, energy level, or the feeling your pet brings to your home. A short, specific sentence is enough to inspire more meaningful names."],
  ["Can I explore more name ideas?", "Yes. Return anytime for a fresh direction, or change a style or story detail to shape the next set. Take your time comparing ideas—the right name often arrives as a feeling everyone at home recognizes."],
  ["How do I choose a good pet name?", "Look for a name that feels natural to say, is easy to recognize, and matches your pet's personality. One to three syllables often works well for everyday use and training, but the best choice is the one your household enjoys saying."],
];

export function LandingPage() {
  const [results, setResults] = useState(initial);
  return <>
    <MotionController />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", name: "PetzName", url: "https://petzname.com" }, { "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] }) }} />
    <header className="topnav"><Container className="nav-inner"><a className="brand" href="#top"><span className="brand-mark" />Pet Name Generator</a><nav aria-label="Primary navigation"><a href="#generator">Find a name</a><a href="#how">How it works</a><a href="#faq">FAQ</a></nav></Container></header>
    <main id="top">
      <section className="section hero"><PawTrail /><Container className="hero-grid"><div className="hero-copy"><p className="eyebrow">A NAME FOR YOUR NEW BEST FRIEND</p><h1>Find a name that feels made for your pet.</h1><p className="lead">Share their personality, the style you love, and the story that brought you together. Discover six thoughtful names with a little meaning in every one.</p><div className="hero-actions"><a className="button button--primary" href="#generator">Find pet names</a><a className="button button--secondary" href="#results">See name ideas</a></div><p className="hero-note">For new family members, rescue pets, and every loyal friend ready for a name that feels like home.</p></div><Generator onResults={setResults} /></Container></section>
      <section className="section results" id="results"><Container><SectionHeading eyebrow="YOUR NAME IDEAS" title="Six thoughtful names. Six reasons one may feel like home." lead="Explore warm, memorable ideas shaped by the details that make your pet unlike any other." /><div className="result-grid">{results.map(r => <ResultCard key={r.name} result={r} />)}</div></Container></section>
      <section className="section feature-band"><Container><SectionHeading eyebrow="MADE PERSONAL" title="More than a list of popular pet names." lead="Your pet's character and your shared story guide every suggestion, so each name has a personal connection." /><div className="feature-grid">{[["✦", "A meaning with every name", "Understand the feeling, personality, or story behind each suggestion before you choose your favorite."], ["≡", "Your details shape the ideas", "Add a habit, coat color, favorite memory, or personality trait to inspire names that feel genuinely connected."], ["↻", "Fresh ideas whenever you need them", "Explore another set with the same details, or change the style to discover a completely different direction."]].map(([icon, title, text]) => <Card className="feature-card" key={title}><span className="feature-icon">{icon}</span><h3>{title}</h3><p>{text}</p></Card>)}</div></Container></section>
      <InfoSection id="how" eyebrow="HOW IT WORKS" title="Turn the little things you love about your pet into the right name." items={[["01", "Tell us about your pet", "Choose dog, cat, or another animal and select a gender tone if you want the names to lean masculine, feminine, or neutral."], ["02", "Set the naming mood", "Pick one or more styles—from cute and funny to elegant, strong, royal, fantasy, or Japanese-inspired—to define the feeling you hope their name will carry."], ["03", "Share a piece of your story", "Add a short detail about how you met, their appearance, a lovable habit, or the joy they bring. Specific details help every suggestion feel closer to your pet."], ["04", "Let a thoughtful AI model connect the dots", "Our AI language model considers the details you share, then offers six easy-to-read names and a short explanation for each. Keep the ones your family loves, or explore again until one feels just right."]]} />
      <InfoSection eyebrow="NAMING TIPS" title="The best pet name feels good to say—and easy for them to know." items={[["A", "Keep it clear and easy to call", "Names with one to three syllables are often easier to use during walks, training, playtime, and everyday life."], ["B", "Let their personality lead", "A calm cuddler, fearless explorer, and playful troublemaker each inspire a different kind of name. Add the traits you notice most."], ["C", "Try it out loud", "Say your favorites a few times in a warm voice and across the room. The right name should feel natural for everyone at home."]]} />
      <section className="section faq" id="faq"><Container><div className="faq-title"><p className="eyebrow">PET NAMING FAQ</p><h2>Everything you need to find a name you love</h2></div><div className="faq-list">{faqItems.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div></Container></section>
      <section className="section cta"><Container><h2>Your pet already has a story. Let’s find the name that belongs in it.</h2><p className="lead">A few personal details are all it takes to discover six meaningful ideas made for your new companion.</p><a className="button button--primary" href="#generator">Find pet names</a></Container></section>
    </main><footer><Container className="footer-row"><a href="https://petzname.com" aria-label="PetzName home">petzname.com</a><span>Thoughtful names for every kind of companion.</span><nav className="footer-nav" aria-label="Legal"><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></nav></Container></footer>
  </>;
}

function ResultCard({ result }: { result: Result }) {
  const [copied, setCopied] = useState(false);
  return <Card className="result-card"><div><strong>{result.name}</strong><p>{result.meaning}</p></div><Button variant="ghost" onClick={async () => { await navigator.clipboard?.writeText(result.name); setCopied(true); setTimeout(() => setCopied(false), 1100); }}>{copied ? "Copied" : "Copy name"}</Button></Card>;
}

function InfoSection({ id, eyebrow, title, items }: { id?: string; eyebrow: string; title: string; items: string[][] }) {
  return <section className="section" id={id}><Container className="content-grid"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><div className="info-list">{items.map(([n, t, p]) => <article className="info-row" key={n}><span>{n}</span><div><strong>{t}</strong><p>{p}</p></div></article>)}</div></Container></section>;
}

function PawTrail() {
  let seed = 1847;
  const random = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const paws = Array.from({ length: 22 }, (_, index) => ({ left: 3 + random() * 94, top: 2 + random() * 96, size: 44 + random() * 70, rotation: -42 + random() * 84, delay: index * 0.38, tone: index % 3 === 0 ? "sky" : "orange" }));
  return <div className="paw-field" aria-hidden="true">{paws.map((paw, index) => <span className={`paw-stamp paw-stamp--${paw.tone}`} key={index} style={{ "--paw-left": `${paw.left.toFixed(2)}%`, "--paw-top": `${paw.top.toFixed(2)}%`, "--paw-size": `${paw.size.toFixed(0)}px`, "--paw-rotation": `${paw.rotation.toFixed(0)}deg`, "--paw-delay": `${paw.delay.toFixed(2)}s` } as React.CSSProperties} />)}</div>;
}

function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("motion-ready");
    const items = Array.from(document.querySelectorAll<HTMLElement>([".section:not(.hero) .section-heading", ".result-card", ".feature-card", ".content-grid > div", ".info-row", ".faq-title", ".faq-list details", ".cta .container", "footer .container"].join(",")));
    items.forEach((item, index) => { item.classList.add("reveal"); item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`); });
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }); }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    items.forEach((item) => observer.observe(item));
    return () => { observer.disconnect(); root.classList.remove("motion-ready"); };
  }, []);
  return null;
}
