export const site = {
  name: "PetzName",
  url: "https://petzname.com",
  description: "Generate six personalized pet names with meaning, shaped by your pet's personality, your favorite style, and your story together.",
  contactEmail: "hello@petzname.com",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
