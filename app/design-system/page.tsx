import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";

export default function DesignSystemPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  const colors = [["Canvas","var(--bg)"],["Surface","var(--surface)"],["Warm","var(--surface-warm)"],["Ink","var(--fg)"],["Orange","var(--accent)"],["Sky","var(--accent-active)"]];
  return <main className="ds-page"><Container><p className="eyebrow">DEVELOPMENT ONLY</p><h1>Pet Name design system</h1><p className="lead">Reusable tokens and components migrated from the native HTML reference.</p>
    <section><h2>Color</h2><div className="swatches">{colors.map(([n,c])=><div className="swatch" key={n} style={{background:c,color:n==="Ink"?"white":"var(--fg)"}}><b>{n}</b></div>)}</div></section>
    <section><h2>Typography</h2><Card className="specimen"><p className="eyebrow">EYEBROW / MONO 12</p><h1>Display 80</h1><h2>Display 56</h2><h3>Display 28</h3><p className="lead">Lead body copy is warm, readable, and editorial.</p><p>Default body copy uses the 17px type token at 1.47 line height.</p></Card></section>
    <section><h2>Actions & fields</h2><Card className="specimen"><div className="specimen-row"><Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button><Chip selected>Cute</Chip><Chip>Elegant</Chip><input className="input" placeholder="Pet personality keywords" /></div></Card></section>
    <section><h2>Cards & layout</h2><div className="layout-demo"><Card>Sidebar / compact column</Card><Card>Content / flexible main column</Card></div></section>
  </Container></main>;
}
