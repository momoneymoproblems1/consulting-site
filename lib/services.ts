export interface Service {
  n: string;
  title: string;
  desc: string;
}

export const SERVICES: ReadonlyArray<Service> = [
  {
    n: "01",
    title: "Strategy workshops",
    desc: "Where to start, what to skip, what to build first. A clear picture of where AI actually moves the needle for your business.",
  },
  {
    n: "02",
    title: "Custom GPTs",
    desc: "Purpose-built assistants for your team's actual workflows. Not generic chatbots; tools that know your context.",
  },
  {
    n: "03",
    title: "Operations automation",
    desc: "Replace the repetitive parts of your day with reliable systems. Bookkeeping, intake, follow-ups, reporting.",
  },
  {
    n: "04",
    title: "Team training",
    desc: "Practical Claude and ChatGPT fluency for everyone you employ. Hands-on, not theoretical.",
  },
  {
    n: "05",
    title: "Token economics",
    desc: "Cut model spend without cutting quality. Audit current usage, tune prompts, route to cheaper models where it fits.",
  },
  {
    n: "06",
    title: "Prompt engineering",
    desc: "Reusable prompts and a master prompter that writes new ones on demand. Less guessing, more leverage.",
  },
];
