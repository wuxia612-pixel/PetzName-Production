import Script from "next/script";

/**
 * Loads Google AdSense Auto ads only on editorial content pages. Interactive
 * generator, verification, empty, and error screens must never request ads.
 * Keeping this behind an environment variable lets local previews run without
 * requesting ads and prevents placeholder IDs from reaching users.
 */
export function AdSenseScript() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-9252347925290370";

  if (!clientId || !/^ca-pub-\d+$/.test(clientId)) return null;

  return (
    <Script
      async
      strategy="beforeInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
    />
  );
}
