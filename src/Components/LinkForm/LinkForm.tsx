import { useState } from "react";
import Modal from "../Modal/Modal";
import type { Link } from "../../Types/Link";

interface LinkFormProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  editingLink: Link | null;
  close: () => void;
}

function LinkForm({ links, setLinks, editingLink, close }: LinkFormProps) {
  const [title, setTitle] = useState(editingLink?.title || "");
  const [url, setUrl] = useState(editingLink?.url || "");
  const [description, setDescription] = useState(
    editingLink?.description || ""
  );
  const [tag, setTags] = useState(editingLink?.tag || "");

  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");

    if (!title.trim() || !url.trim() || !description.trim()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (editingLink) {
      setLinks(
        links.map((link) =>
          link.id === editingLink.id
            ? { ...editingLink, title, url, description, tag }
            : link
        )
      );
    } else {
      const newLink: Link = {
        id: Date.now(),
        title,
        url,
        description,
        tag,
      };

      setLinks([...links, newLink]);
    }

    close();
  }

  return (
    <Modal onClose={close}>
      <h2>{editingLink ? "Edit Link" : "Save New Link"}</h2>

      {errorMessage && (
        <p style={{ color: "#e11d48", fontSize: "14px", marginBottom: "10px" }}>
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="url"
          placeholder="Website URL *"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <textarea
          placeholder="Description *"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tag (optional)"
          value={tag}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit">
          {editingLink ? "Update Link" : "Save Link"}
        </button>
      </form>
    </Modal>
  );
}

export default LinkForm;
