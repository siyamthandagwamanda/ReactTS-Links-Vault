import { useState } from "react";
import "./App.css";

import type { Link } from "./Types/Link";
import SavedLinks from "./Components/SavedLinks/SavedLinks";
import LinkForm from "./Components/LinkForm/LinkForm";

function App() {
  
  const [links, setLinks] = useState<Link[]>(() => {
    const savedLinks = localStorage.getItem("links");
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  
  const [showForm, setShowForm] = useState(false);

  
  const [editingLink, setEditingLink] = useState<Link | null>(null);

  return (
    <div className="container">
      <header className="header">
        <h1>Link Vault</h1>
        <p>Save, organise and manage your favourite websites.</p>
      </header>

      <SavedLinks
        links={links}
        setLinks={setLinks}
        setEditingLink={setEditingLink}
        openForm={() => setShowForm(true)}
      />

     
      <button
        className="floating-button"
        onClick={() => {
          setEditingLink(null);
          setShowForm(true);
        }}
        aria-label="Add new link"
      >
        +
      </button>

   
      {showForm && (
        <LinkForm
          links={links}
          setLinks={setLinks}
          editingLink={editingLink}
          close={() => {
            setEditingLink(null);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

export default App;