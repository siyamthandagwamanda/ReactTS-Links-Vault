import { useState } from "react";
import type { Link } from "../../Types/Link";
import type {LinkCard} from "../LinkCard";

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
            links={links}
            setLinks={setLinks}
            setEditingLink={setEditingLink}
            openForm={openForm}
          />
        ))
      )}
    </div>
  );
}

export default SavedLinks;