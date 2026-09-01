export type TagCategory = "ai" | "strategy" | "growth";

const categoryPatterns: Array<[RegExp[], TagCategory]> = [
  [[/agentic/i, /ai/i, /llm/i, /evaluation/i, /technical/i], "ai"],
  [[/product analytics/i, /monetization/i, /product strategy/i, /go-to-market/i, /strategy/i], "strategy"],
  [[/marketplace/i, /localization/i, /growth/i, /launch/i], "growth"],
];

export function getTagCategory(tag: string): TagCategory {
  const normalized = tag.toLowerCase();

  for (const [patterns, category] of categoryPatterns) {
    if (patterns.some((pattern) => pattern.test(normalized))) {
      return category;
    }
  }

  return "strategy";
}

export function getTagClassName(tag: string): string {
  return `tag tag--${getTagCategory(tag)}`;
}
