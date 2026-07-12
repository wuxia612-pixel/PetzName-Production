export const site = {
  name: "PetzName",
  url: "https://petzname.com",
  description: "Find six meaningful pet name ideas shaped by your pet's personality, your family's story, and the little moments you share together.",
  contactEmail: "hello@petzname.com",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
