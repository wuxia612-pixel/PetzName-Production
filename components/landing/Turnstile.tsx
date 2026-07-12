"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

type TurnstileProps = {
  onTokenChange: (token: string | null) => void;
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function Turnstile({ onTokenChange }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!siteKey || document.getElementById("cf-turnstile-script")) return;
    const script = document.createElement("script");
    script.id = "cf-turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => setScriptReady(true);
    script.onerror = () => setError(true);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  useEffect(() => {
    if (!siteKey || !scriptReady || !containerRef.current || !window.turnstile || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token: unknown) => onTokenChange(typeof token === "string" ? token : null),
      "expired-callback": () => onTokenChange(null),
      "error-callback": () => { setError(true); onTokenChange(null); },
    });
    return () => {
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [onTokenChange, scriptReady]);

  if (!siteKey) return null;
  return <div className="turnstile" aria-live="polite"><div ref={containerRef} />{error && <p className="status">Security check could not load. Please refresh and try again.</p>}</div>;
}
