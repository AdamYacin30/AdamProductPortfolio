export type TagCategory = "ai" | "strategy" | "growth";

const categoryPatterns: Array<[RegExp[], TagCategory]> = [
  [[/agentic/i, /ai/i, /llm/i, /evaluation/i, /voice ai/i, /document ai/i, /backend systems/i, /trip planning/i, /compliance/i, /technical/i], "ai"],
  [[/product analytics/i, /monetization/i, /product strategy/i, /go-to-market/i, /strategy/i, /workflow automation/i, /product-led growth/i], "strategy"],
  [[/marketplace/i, /localization/i, /growth/i, /launch/i, /cold start/i, /0→1 growth/i, /0-to-1 growth/i], "growth"],
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
