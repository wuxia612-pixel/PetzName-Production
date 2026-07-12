# Cloudflare deployment checklist

## Required secrets

Create a new DeepSeek key before production. Store these values as Cloudflare Worker secrets, never as `NEXT_PUBLIC_` variables:

- `DEEPSEEK_API_KEY`
- `TURNSTILE_SECRET_KEY`

The only public value is `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. Configure it as a Cloudflare build variable. Also set the following non-secret build variables:

- `TURNSTILE_ALLOWED_HOSTNAMES=petzname.com,www.petzname.com`
- `ALLOWED_ORIGINS=https://petzname.com,https://www.petzname.com`
- `GENERATION_RATE_LIMIT=5`

## Turnstile

Create a managed Turnstile widget for `petzname.com` and `www.petzname.com`. Add its site key as `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and its secret key as `TURNSTILE_SECRET_KEY`. Production generation fails closed if the secret is missing or the token fails server-side verification.

## WAF rate limit

Create a Cloudflare WAF rate limiting rule before enabling traffic:

- Expression: `(http.request.uri.path eq "/api/generate-names" and http.request.method eq "POST")`
- Characteristics: IP
- Period: 10 minutes
- Requests: 5
- Mitigation: Managed Challenge; block repeat offenders for 1 hour

This rule is the production rate limit. The application also has a short-term in-process limit, but the WAF rule remains necessary because Workers can run across multiple instances.

## Deploy

1. Add `petzname.com` to Cloudflare and point the domain's DNS to Cloudflare.
2. In Workers & Pages, create the Worker project `petzname` and add the variables and secrets above.
3. Run `npm run preview` to test the Workers runtime locally.
4. Run `npm run deploy`, then attach `petzname.com` and `www.petzname.com` as custom domains.
5. Verify one successful generation and confirm requests without a valid Turnstile token return `403`.
