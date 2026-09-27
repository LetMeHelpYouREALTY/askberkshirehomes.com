/** Follow Up Boss API credentials from environment (Vercel naming + legacy). */
export function getFubApiKey(): string {
  return process.env.FOLLOW_UP_BOSS_API_KEY || process.env.FUB_API_KEY || "";
}

export function getFubSystemKey(): string | undefined {
  return process.env.FUB_SYSTEM_KEY;
}
