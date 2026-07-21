const submissions = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS = 3;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_SUBMISSIONS) {
    return false;
  }

  timestamps.push(now);
  submissions.set(ip, timestamps);
  return true;
}