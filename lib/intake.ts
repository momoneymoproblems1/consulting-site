export interface IntakeQuestion {
  n: string;
  label: string;
  hint: string;
}

export const INTAKE_QUESTIONS: ReadonlyArray<IntakeQuestion> = [
  {
    n: "01",
    label: "What AI tools you currently use",
    hint: "Multi-select: ChatGPT, Claude, Custom GPTs, Copilot or Gemini, automation tools, agents, or just exploring.",
  },
  {
    n: "02",
    label: "Your biggest time-drain or weak spot right now",
    hint: "Two or three sentences. The pain point we are trying to move the needle on.",
  },
  {
    n: "03",
    label: "What success looks like after the session",
    hint: "Your specific outcome, so we stay aligned and you get real value out of the time.",
  },
  {
    n: "04",
    label: "Your role at the company",
    hint: "Short answer. Helps me calibrate how I explain things during the call.",
  },
  {
    n: "05",
    label: "Whether you are the decision-maker for AI investment",
    hint: "Yes, shared, not me, or not sure yet. Helps shape what we cover.",
  },
];
