/**
 * Canonical site URL for askberkshirehomes.com (env-driven).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) {
    return fromEnv;
  }
  return "https://www.askberkshirehomes.com";
}
