export interface CaseStudyStat {
  value: string;
  emPart?: string;
  label: string;
}

export interface CaseStudyDeliverable {
  n: string;
  text: string;
}

export interface CaseStudy {
  slug: string;
  clientMark: string;
  heading: string;
  emPart: string;
  headingSuffix: string;
  where: string;
  lede: string;
  stats: ReadonlyArray<CaseStudyStat>;
  deliverables: ReadonlyArray<CaseStudyDeliverable>;
  outcome: string;
}

export const CASE_STUDIES: ReadonlyArray<CaseStudy> = [
  {
    slug: "enervest",
    clientMark: "CLIENT  /  ENERVEST",
    heading: "A team of",
    emPart: "30",
    headingSuffix: ", fluent in three days.",
    where: "Battery and energy, working with the Australian Government.",
    lede: "Australian energy and battery company working on government contracts. A 30-person team, brand new to Claude. Brought in to turn AI from curiosity into daily practice.",
    stats: [
      { value: "3", emPart: "d", label: "Onsite" },
      { value: "30", label: "People trained" },
      { value: "10", label: "Custom system prompts" },
      { value: "1", emPart: ":1", label: "Sessions per person" },
    ],
    deliverables: [
      { n: "01", text: "Onsite presentation plus a Claude Usage Guide tailored to Enervest workflows." },
      { n: "02", text: "Seven named Claude Project assistants, one per role: CEO, Finance and Board, Admin and SharePoint, Operations, Chairman, Community Engagement, Brand and Comms." },
      { n: "03", text: "Master prompter that turns a one-line ask into a full system prompt on demand." },
      { n: "04", text: "SharePoint connector proposal plus a What's Possible overview covering Skills, Connectors, and Agents." },
      { n: "05", text: "One on one working sessions with each leader to unblock their specific pain points." },
    ],
    outcome:
      "A team that was new to Claude on Monday was running their own prompts and workflows by Wednesday. The master prompter keeps them improving without me in the room.",
  },
];

export const ENERVEST = CASE_STUDIES[0];
