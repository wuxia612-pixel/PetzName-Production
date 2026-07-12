# Brand spec - AI Pet Name Generator reference

Source:
- PRD: `# AI Pet Name Generator - PRD.markdown`
- Visual reference: `original-3c09b4b509b5ec7747d201489c1b66c3.webp`

## Extracted reference palette

Image palette sampling returned these dominant colors:
- `#f6edcf` pale cream background
- `#23485d` deep blue-green headline/nav
- `#e8d6b2` warm sand surface
- `#dfa869` warm orange accent
- `#a5aaa2` muted neutral

## Six working tokens in OKLch

These are supplemental to the active design system. The page should now lean into the pet reference more directly: warm cream canvas, deep blue editorial headings, orange and soft-blue action moments, and rounded friendly cards.

```css
:root {
  --bg: oklch(96% 0.045 88);
  --surface: oklch(99% 0.018 95);
  --fg: oklch(31% 0.066 244);
  --muted: oklch(57% 0.025 190);
  --border: oklch(87% 0.047 82);
  --accent: oklch(77% 0.14 70);
}
```

## Type

- Display: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif
- Body: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif
- Mono: SF Mono, ui-monospace, JetBrains Mono, Menlo, Monaco, Consolas, monospace

## Layout posture

- Lead with a warm cream stage and a large deep-blue headline, matching the reference image's friendly pet-shop mood.
- Use orange for the main CTA and soft blue for secondary actions, echoing the dog/cat split in the reference.
- Prefer oversized pill buttons, blob-like brand marks, and 24px-42px rounded cards.
- Add sparse paw-print style details through CSS only; avoid cluttering every section with decoration.
- Keep the generator above the fold because the product value is immediate naming interaction.
