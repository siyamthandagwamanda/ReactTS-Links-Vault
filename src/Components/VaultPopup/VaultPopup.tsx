import { useState } from "react";
import type { LinkItem } from "../../Types/Vault";
import "./VaultPopup.module.css"

interface VaultPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<LinkItem, "id">) => void;
  existingLinks: LinkItem[];
}

export default function VaultPopup({
  isOpen,
  onClose,
  onSubmit,
  existingLinks,

}: VaultPopupProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const [alert, setAlert] = useState({
    message: "Tip: Fill out all required fields before saving.",
    isError: false,
  });

  if (!isOpen) {
    return null;
  }

  const filteredResults = existingLinks.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  function clearForm() {
    setSearchQuery("");
    setTitle("");
    setUrl("");
    setDescription("");
    setTag("");

    setAlert({
      message: "Tip: Fill out all required fields before saving.",
      isError: false,
    });
  }

  function handleClose() {
    clearForm();
    onClose();
  }

  return (
    <div className="backdrop">
      <div className="modal max-w-sm">
        <div className="modal-header">
          <h3>Vault Manager</h3>

          <button
            type="button"
            className="close-btn"
            onClick={handleClose}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="search">Search Existing Titles</label>

            <input
              id="search"
              type="text"
              className="field"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {searchQuery.trim() !== "" && (
              <p className="search-count">
                {filteredResults.length} match
                {filteredResults.length === 1 ? "" : "es"} found
              </p>
            )}
          </div>

          <div
            className={`alert ${
              alert.isError ? "alert-red" : "alert-blue"
            }`}
          >
            {alert.message}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (!title.trim() || !url.trim() || !description.trim()) {
                setAlert({
                  message: "Please complete all required fields.",
                  isError: true,
                });
                return;
              }

              if (
                !url.startsWith("http://") &&
                !url.startsWith("https://")
              ) {
                setAlert({
                  message: "URL must start with http:// or https://",
                  isError: true,
                });
                return;
              }

              onSubmit({
                title: title.trim(),
                url: url.trim(),
                description: description.trim(),
                tag: tag.trim() !== "" ? tag.trim() : undefined,
              });

              clearForm();
              onClose();
            }}
            className="form"
          >
            <span className="form-heading">Add New Link</span>

            <div className="form-group">
              <label htmlFor="title">Title *</label>

              <input
                id="title"
                type="text"
                className="field"
                placeholder="React Documentation"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">URL *</label>

              <input
                id="url"
                type="url"
                className="field"
                placeholder="https://react.dev"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>

              <textarea
                id="description"
                className="field"
                rows={2}
                placeholder="Describe this link..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tag">Tag (Optional)</label>

              <input
                id="tag"
                type="text"
                className="field"
                placeholder="frontend"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary">
                Save Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}