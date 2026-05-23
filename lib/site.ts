export const SITE = {
  name: "Andrew Gooding",
  tagline: "AI integrations for small businesses",
  email: "drewgood27@gmail.com",
  linkedinUrl: "https://linkedin.com/in/Andrew-gooding247",
  baseUrl: "https://andrew-gooding.vercel.app",
  location: "Seattle, PST",
  availability: "Weekdays, 9am to 5pm PST",
} as const;

export type SiteConfig = typeof SITE;
