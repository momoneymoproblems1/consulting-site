export type TierId = "30" | "60" | "120" | "day";

export interface Tier {
  id: TierId;
  duration: string;
  price: number;
  label: string;
  featured: boolean;
  desc: string;
  bullets: ReadonlyArray<string>;
}

export const TIERS: ReadonlyArray<Tier> = [
  {
    id: "30",
    duration: "30 minutes",
    price: 500,
    label: "$500",
    featured: true,
    desc: "First consultation. Quick diagnostic plus action ideas you can use this week.",
    bullets: [
      "Short intake form before the call so we hit the ground running",
      "30 minute live video session",
      "Quick diagnostic of your current workflow and AI use",
      "Two or three concrete ideas you can act on this week",
      "Path into a deeper engagement or monthly partnership",
    ],
  },
  {
    id: "60",
    duration: "60 minutes",
    price: 1500,
    label: "$1,500",
    featured: false,
    desc: "Value audit. Custom slide deck plus a 30 day action plan.",
    bullets: [
      "Discovery questionnaire I review before the session",
      "Custom slide deck tailored to your business, presented live",
      "30 day action plan with two or three prioritized next steps",
      "Realistic outcome forecast before you commit further budget",
      "Path into a 120 minute session or monthly partnership",
    ],
  },
  {
    id: "120",
    duration: "120 minutes",
    price: 3000,
    label: "$3,000",
    featured: false,
    desc: "Diagnostic plus prototype. Two prototyped workflows and a 90 day roadmap.",
    bullets: [
      "Deep pre-session discovery across two of your business functions",
      "One or two prototyped system prompts or workflows built live",
      "90 day implementation roadmap with token budget estimates",
      "Slide deck and written brief for leadership to circulate",
      "One week of async follow up plus path to monthly partnership",
    ],
  },
  {
    id: "day",
    duration: "Full day",
    price: 5000,
    label: "$5,000",
    featured: false,
    desc: "Onsite engagement. Team training plus implementation and a usage guide.",
    bullets: [
      "Extensive pre-onsite questionnaire and context gathering with key people",
      "Full day onsite Seattle area or virtual deep work session",
      "Team training for up to 15 people on practical Claude and ChatGPT use",
      "Five custom system prompts plus a master prompter",
      "Written usage guide and implementation handoff doc",
      "Recommended monthly partnership for ongoing agent and skill additions",
    ],
  },
];

export function tierById(id: string): Tier {
  return TIERS.find((t) => t.id === id) ?? TIERS[0];
}
