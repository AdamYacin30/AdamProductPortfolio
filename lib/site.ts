// Single source of truth for site-wide constants. No content lives in components.
export const site = {
  name: "Adam Yassine",
  role: "Associate Product Manager, Carfax",
  // Positioning sentence — what he does and in what domain. One line.
  positioning:
    "I build AI products — the evaluation, model tradeoffs, and latency work that decide whether people keep using them.",
  // TODO(domain): swap to the real domain once purchased (adamyassine.com or .dev).
  url: "https://adamyassine.dev",
  email: "adam.gyassine@gmail.com",
  location: "Toronto / GTA, Ontario — open to relocation",
  socials: {
    linkedin: "https://www.linkedin.com/in/adam-yassine-114b82297/",
    github: "https://github.com/AdamYacin30",
  },
  resumePath: "/resume/adam-yassine-pm-resume.pdf",
} as const;

export type Site = typeof site;
