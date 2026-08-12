import type { Link } from "../Types/Link";

const STORAGE_KEY = "links";

export function getLinks(): Link[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Link[]) : [];
  } catch (error) {
    console.error("Failed to read links from storage:", error);
    return [];
  }
}

export function saveLinks(links: Link[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch (error) {
    console.error("Failed to save links to storage:", error);
  }
}
