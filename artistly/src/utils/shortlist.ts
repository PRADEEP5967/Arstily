const SHORTLIST_KEY = "artistly_shortlist";

export function getShortlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(SHORTLIST_KEY) || "[]");
  } catch {
    return [];
  }
}

export function addToShortlist(artistId: string) {
  const current = getShortlist();
  if (!current.includes(artistId)) {
    localStorage.setItem(SHORTLIST_KEY, JSON.stringify([...current, artistId]));
  }
}

export function removeFromShortlist(artistId: string) {
  const current = getShortlist();
  localStorage.setItem(
    SHORTLIST_KEY,
    JSON.stringify(current.filter((id) => id !== artistId))
  );
}

export function isShortlisted(artistId: string): boolean {
  return getShortlist().includes(artistId);
} 