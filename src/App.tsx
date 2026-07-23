import { useState } from "react";
import VaultPopup from "./Components/VaultPopup/VaultPopup";
import ManageLinksPopup from "./Components/ManageLinksPopup/ManageLinksPopup";
import LinkCard from "./Components/LinkCard/LinkCard";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import type { LinkItem, ModalState } from "./Types/Vault";

export default function App() {
  const [activeModal, setActiveModal] =
    useState<ModalState>("NONE");

  const [links, setLinks] = useLocalStorage<LinkItem[]>(
    "simple_classnames_links_v1",
    []
  );

  function addLink(newLink: Omit<LinkItem, "id">) {
    const id = Math.random().toString(36).substring(2, 9);

    const link: LinkItem = {
      id,
      title: newLink.title,
      url: newLink.url,
      description: newLink.description,
      tag: newLink.tag,
    };

    setLinks((previousLinks) => {
      return [...previousLinks, link];
    });

    setActiveModal("MANAGE_DIRECTORY");
  }

  function editLink(updatedLink: LinkItem) {
    setLinks((previousLinks) => {
      return previousLinks.map((link) => {
        if (link.id === updatedLink.id) {
          return updatedLink;
        }

        return link;
      });
    });
  }

  function deleteLink(id: string) {
    setLinks((previousLinks) => {
      return previousLinks.filter((link) => {
        return link.id !== id;
      });
    });
  }

  return (
    <div className="dashboard">
      <header className="header">
        <div className="info">
          <h1>My Links Vault</h1>

          <p className="subtitle">
            Your simple personal bookmark layout tool.
          </p>
        </div>

        <button
          className="btn btn-secondary"
          onClick={() => setActiveModal("MANAGE_DIRECTORY")}
        >
          Directory ({links.length})
        </button>
      </header>

      {links.length === 0 ? (
        <div className="empty-view">
          <p>
            No bookmarks saved yet. Click the button below to
            add your first link.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => setActiveModal("ADD_SEARCH")}
          >
            Get Started
          </button>
        </div>
      ) : (
        <main className="grid">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
            />
          ))}
        </main>
      )}

      <button
        className="floating-btn"
        onClick={() => setActiveModal("ADD_SEARCH")}
        aria-label="Add Link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <VaultPopup
        isOpen={activeModal === "ADD_SEARCH"}
        onClose={() => setActiveModal("NONE")}
        onSubmit={addLink}
        existingLinks={links}
      />

      <ManageLinksPopup
        isOpen={activeModal === "MANAGE_DIRECTORY"}
        onClose={() => setActiveModal("NONE")}
        links={links}
        onDelete={deleteLink}
        onEdit={editLink}
      />
    </div>
  );
}