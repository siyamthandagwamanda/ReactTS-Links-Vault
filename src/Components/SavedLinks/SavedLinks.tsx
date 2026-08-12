import { useState } from "react";
import type { Link } from "../../Types/Link";
import LinkCard from "../LinkCard/LinkCard";

interface SavedLinksProps {
  links: Link[];
  onDelete: (id: number) => void;
  onEdit: (link: Link) => void;
}

function SavedLinks({ links, onDelete, onEdit }: SavedLinksProps) {
  const [search, setSearch] = useState("");

  const filteredLinks = links.filter((link) => {
    const searchText = search.toLowerCase();

    return (
      (link.title?.toLowerCase() || "").includes(searchText) ||
      (link.url?.toLowerCase() || "").includes(searchText) ||
      (link.description?.toLowerCase() || "").includes(searchText) ||
      (link.tag?.toLowerCase() || "").includes(searchText)
    );
  });

  return (
    <div className="saved-links">
      <h2>Saved Links</h2>

      <input
        type="text"
        placeholder="Search by title, URL, description or tag..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {filteredLinks.length === 0 ? (
        <p>No links found. Click btn To Add.</p>
      ) : (
        filteredLinks.map((link) => (
          <LinkCard key={link.id} link={link} onDelete={onDelete} onEdit={onEdit} />
        ))
      )}
    </div>
  );
}

export default SavedLinks;
