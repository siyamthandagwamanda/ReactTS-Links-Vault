import { useState } from "react";
import "./App.css";

import type { Link } from "./Types/Link";
import { useLinks } from "./hooks/useLinks";
import SavedLinks from "./Components/SavedLinks/SavedLinks";
import LinkForm from "./Components/LinkForm/LinkForm";

function App() {
  const { links, addLink, updateLink, deleteLink } = useLinks();

  const [showForm, setShowForm] = useState(false);
  const [editingLink, setEditingLink] = useState<Link | null>(null);

  function openAddForm() {
    setEditingLink(null);
    setShowForm(true);
  }

  function openEditForm(link: Link) {
    setEditingLink(link);
    setShowForm(true);
  }

  function closeForm() {
    setEditingLink(null);
    setShowForm(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Link Vault</h1>
        <p>Save, organise and manage your favourite websites.</p>
      </header>

      <SavedLinks links={links} onDelete={deleteLink} onEdit={openEditForm} />

      <button
        className="floating-button"
        onClick={openAddForm}
        aria-label="Add new link"
      >
        +
      </button>

      {showForm && (
        <LinkForm
          editingLink={editingLink}
          onAdd={addLink}
          onUpdate={updateLink}
          close={closeForm}
        />
      )}
    </div>
  );
}

export default App;
