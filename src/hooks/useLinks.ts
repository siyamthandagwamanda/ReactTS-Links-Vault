import { useEffect, useState } from "react";
import type { Link } from "../Types/Link";
import { getLinks, saveLinks } from  "../services/linkStorage";

export function useLinks() {
  const [links, setLinks] = useState<Link[]>(() => getLinks());

  useEffect(() => {
    saveLinks(links);
  }, [links]);

  function addLink(newLink: Omit<Link, "id">) {
    const link: Link = { ...newLink, id: Date.now() };
    setLinks((prev) => [...prev, link]);
  }

  function updateLink(id: number, updates: Omit<Link, "id">) {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, ...updates } : link))
    );
  }

  function deleteLink(id: number) {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  }

  return { links, addLink, updateLink, deleteLink };
}
