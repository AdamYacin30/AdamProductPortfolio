// Single source of truth for site-wide constants. No content lives in components.
export const site = {
  name: "Adam Yassine",
  role: "Associate Product Manager, Carfax",
  // Positioning sentence describing the work in one line.
  positioning: "Product manager interested in AI systems. Took an agentic AI product 0→1 at Carfax with S&P Global Mobility, and a coworking marketplace into two countries before that.",
  // TODO(domain): swap to the real domain once purchased (adamyassine.com or .dev).
  url: "https://adamyassine.dev",
  email: "adam.gyassine@gmail.com",
  phone: "+1 226 504 3934",
  location: "Toronto, Ontario",
  socials: {
    linkedin: "https://www.linkedin.com/in/adam-yassine-114b82297/",
    github: "https://github.com/AdamYacin30",
  },
  resumePath: "/resume/Adam%20Yassine%20-%20Resume%20-%202026.pdf",
} as const;

export type Site = typeof site;
