import { useState } from "react";
import type { Link } from "../../Types/Link"; // adjust path as needed
import LinkCard from "../LinkCard/LinkCard";

interface SavedLinksProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  setEditingLink: React.Dispatch<React.SetStateAction<Link | null>>;
  openForm: () => void;
}

function SavedLinks({
  links,
  setLinks,
  setEditingLink,
  openForm,
}: SavedLinksProps) {
  const [search, setSearch] = useState("");

  // Handler 1: Delete a link by ID
  function handleDelete(id: number) {
    const updated = links.filter((link) => link.id !== id);
    setLinks(updated);
    localStorage.setItem("links", JSON.stringify(updated));
  }

  // Handler 2: Set the editing link and open form
  function handleEdit(link: Link) {
    setEditingLink(link);
    openForm();
  }

  const filteredLinks = links.filter((link) => {
    const searchText = search.toLowerCase();

    return (
      (link.title?.toLowerCase() || "").includes(searchText) ||
      (link.url?.toLowerCase() || "").includes(searchText) ||
      (link.description?.toLowerCase() || "").includes(searchText) ||
      (link.tags?.toLowerCase() || "").includes(searchText)
    );
  });

  return (
    <div className="saved-links">
      <h2>Saved Links</h2>

      <input
        type="text"
        placeholder="Search by title, URL, description or tags..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {filteredLinks.length === 0 ? (
        <p>No links found.</p>
      ) : (
        filteredLinks.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}

export default SavedLinks;