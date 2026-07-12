"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Turnstile } from "./Turnstile";

export type Result = { name: string; meaning: string };

const styles = ["Cute", "Royal", "Fantasy", "Japanese-inspired", "Strong", "Funny", "Elegant"];
const storyExample = "e.g. She ran to us in the morning sun, full of joy, and made our home feel brighter.";
const requiresVerification = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

export function Generator({ onResults }: { onResults: (results: Result[]) => void }) {
  const [pet, setPet] = useState<"dog" | "cat" | "other">("dog");
  const [gender, setGender] = useState("Neutral");
  const [selectedStyles, setStyles] = useState(["Cute"]);
  const [keywords, setKeywords] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [verificationGranted, setVerificationGranted] = useState(false);
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const [status, setStatus] = useState("Whenever you are ready, one short memory is enough to begin.");
  const [loading, setLoading] = useState(false);
  const handleTurnstileToken = useCallback((token: string | null) => setTurnstileToken(token), []);
  useEffect(() => {
    setVerificationGranted(document.cookie.split("; ").some((cookie) => cookie === "pn_verified_ui=1"));
  }, []);

  async function generate() {
    if (requiresVerification && !turnstileToken && !verificationGranted) {
      setStatus("Please complete the quick security check before finding names.");
      return;
    }
    setLoading(true);
    setStatus("Finding names inspired by your pet's story...");
    try {
      const response = await fetch("/api/generate-names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ petType: pet, gender, styles: selectedStyles, story: keywords, turnstileToken }),
      });
      const data = await response.json() as { names?: Result[]; error?: string };
      if (!response.ok || !data.names) throw new Error(data.error || "We couldn't find names this time. Please try again.");
      onResults(data.names);
      setTurnstileToken(null);
      setVerificationGranted(true);
      setTurnstileResetSignal((signal) => signal + 1);
      setStatus(`Six warm name ideas are ready for your ${pet}.`);
      window.setTimeout(() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    } catch (error) {
      if (error instanceof Error && error.message.includes("security check")) {
        setVerificationGranted(false);
        setTurnstileResetSignal((signal) => signal + 1);
      }
      setStatus(error instanceof Error ? error.message : "We couldn't find names this time. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return <section className="generator" id="generator" aria-label="Pet name generator">
    <div className="generator__head"><div><strong>Find a name to grow into</strong><span>A few little details help each idea feel closer to home.</span></div></div>
    <form className="generator__body" onSubmit={(e) => { e.preventDefault(); void generate(); }}>
      <Choice label="Pet type" hint="Required">{(["dog", "cat", "other"] as const).map(v => <Chip key={v} selected={pet === v} onClick={() => setPet(v)}>{v === "other" ? "Other" : v[0].toUpperCase() + v.slice(1)}</Chip>)}</Choice>
      <Choice label="Gender" hint="Optional">{["Male", "Female", "Neutral"].map(v => <Chip key={v} selected={gender === v} onClick={() => setGender(v)}>{v}</Chip>)}</Choice>
      <Choice label="Naming style" hint="Choose one or more">{styles.map(v => <Chip key={v} selected={selectedStyles.includes(v)} onClick={() => setStyles(s => s.includes(v) ? s.filter(x => x !== v) : [...s, v])}>{v}</Chip>)}</Choice>
      <label className="field"><span className="label-row"><b>Your story together</b><small>Recommended</small></span><textarea className="input story-input" value={keywords} onChange={e => setKeywords(e.target.value)} placeholder={storyExample} /></label>
      {!verificationGranted && <Turnstile onTokenChange={handleTurnstileToken} resetSignal={turnstileResetSignal} />}
      <div className="form-actions"><Button disabled={loading}>{loading && <span className="spinner" />}{loading ? "Finding names..." : "Find 6 names"}</Button><Button type="button" variant="secondary" onClick={() => { setKeywords(""); setStyles(["Cute"]); setStatus("Start fresh whenever you are ready."); }}>Reset</Button></div>
      <p className="status" role="status" aria-live="polite">{status}</p>
    </form>
  </section>;
}

function Choice({ label, hint, children }: { label: string; hint: string; children: React.ReactNode }) {
  return <fieldset className="field"><legend className="label-row"><b>{label}</b><small>{hint}</small></legend><div className="chips">{children}</div></fieldset>;
}
