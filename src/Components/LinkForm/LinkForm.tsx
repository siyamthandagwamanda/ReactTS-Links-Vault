import { useState } from "react";
import Modal from "../Modal/Modal";
import type { Link } from "../../Types/Link";

interface LinkFormProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  editingLink: Link | null;
  close: () => void;
}

function LinkForm({
  links,
  setLinks,
  editingLink,
  close,
}: LinkFormProps) {
  const [title, setTitle] = useState(editingLink?.title || "");
  const [url, setUrl] = useState(editingLink?.url || "");
  const [description, setDescription] = useState(
    editingLink?.description || ""
  );
  const [tags, setTags] = useState(editingLink?.tags || "");

  const [errorMessage, setErrorMessage] = useState("");

  
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");

    if (!title.trim() || !url.trim() || !description.trim()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    let updatedLinks: Link[];

    if (editingLink) {
      updatedLinks = links.map((link) =>
        link.id === editingLink.id
          ? {
              ...editingLink,
              title,
              url,
              description,
              tags,
            }
          : link
      );
    } else {
      const newLink: Link = {
        id: Date.now(),
        title,
        url,
        description,
        tags,
      };

      updatedLinks = [...links, newLink];
    }

    setLinks(updatedLinks);
    localStorage.setItem("links", JSON.stringify(updatedLinks));

    close()
  }

  return (
    
    <Modal onclose={close}>
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
          placeholder="Tags (optional)"
          value={tags}
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