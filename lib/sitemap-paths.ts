/**
 * Static public routes for askberkshirehomes.com (included in sitemap.xml).
 * Excludes dynamic segments (e.g. /listings/[id]) and non-page routes.
 */
export const PUBLIC_STATIC_PATHS: string[] = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/glossary",
  "/google-business",
  "/home-valuation",
  "/listings",
  "/market-report",
  "/market-update",
  "/market-insights",
  "/investment-properties",
  "/luxury-homes",
  "/new-construction",
  "/relocation",
  "/security-policy",
  "/services",
  "/why-berkshire-hathaway",
  "/buyers",
  "/buyers/california-relocator",
  "/buyers/first-time-buyers",
  "/buyers/luxury-homes-las-vegas",
  "/sellers",
  "/sellers/divorce-probate",
  "/sellers/downsizing",
  "/sellers/move-up",
  "/sellers/relocation",
  "/neighborhoods",
  "/neighborhoods/centennial-hills",
  "/neighborhoods/green-valley",
  "/neighborhoods/henderson",
  "/neighborhoods/inspirada",
  "/neighborhoods/mountains-edge",
  "/neighborhoods/north-las-vegas",
  "/neighborhoods/skye-canyon",
  "/neighborhoods/southern-highlands",
  "/neighborhoods/summerlin",
  "/neighborhoods/the-ridges",
  "/55-plus-communities",
  "/55-plus-communities/del-webb-lake-las-vegas",
  "/55-plus-communities/heritage-stonebridge",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/trilogy-summerlin",
];

export function priorityForPath(path: string): number {
  if (path === "/") return 1;
  if (path === "/glossary") return 0.9;
  if (
    path === "/about" ||
    path === "/contact" ||
    path === "/faq" ||
    path === "/google-business"
  ) {
    return 0.85;
  }
  if (path.startsWith("/glossary/")) return 0.8;
  if (path === "/home-valuation" || path === "/listings") return 0.75;
  return 0.65;
}

export function changeFrequencyForPath(
  path: string
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  if (path === "/" || path === "/listings" || path.startsWith("/neighborhoods")) {
    return "weekly";
  }
  if (path === "/market-update" || path === "/market-report") {
    return "weekly";
  }
  return "monthly";
}
