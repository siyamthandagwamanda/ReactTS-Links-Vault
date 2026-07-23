import { useState } from "react";
import type { LinkItem } from "../../Types/Vault";
import "./ManageLinksPopup.module.css";

interface ManageLinksPopupProps {
  isOpen: boolean;
  onClose: () => void;
  links: LinkItem[];
  onDelete: (id: string) => void;
  onEdit: (updatedLink: LinkItem) => void;
}

export default function ManageLinksPopup({
  isOpen,
  onClose,
  links,
  onDelete,
  onEdit,
}: ManageLinksPopupProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editTag, setEditTag] = useState("");

  const [notify, setNotify] = useState({
    msg: "Ready to manage your links.",
    type: "alert-green",
  });

  if (!isOpen) {
    return null;
  }

  function startEditing(link: LinkItem) {
    setEditingId(link.id);
    setEditTitle(link.title);
    setEditUrl(link.url);
    setEditDesc(link.description);
    setEditTag(link.tag || "");
  }

  function handleSaveEdit(id: string) {
    if (!editTitle.trim() || !editUrl.trim()) {
      setNotify({
        msg: "Please enter a title and URL.",
        type: "alert-red",
      });
      return;
    }

    onEdit({
      id,
      title: editTitle.trim(),
      url: editUrl.trim(),
      description: editDesc.trim(),
      tag: editTag.trim() || undefined,
    });

    setEditingId(null);

    setNotify({
      msg: "Link updated.",
      type: "alert-green",
    });
  }

  function handleDelete(id: string) {
    onDelete(id);

    setNotify({
      msg: "Link deleted.",
      type: "alert-red",
    });
  }

  return (
    <div className="backdrop">
      <div className="modal max-w-md height-80">
        <div className="modal-header bg-grey">
          <div className="info">
            <h3>Vault Directory</h3>
            <span className="subheading">
              Total Saved Links: {links.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="close-btn"
            aria-label="Close directory"
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

        <div className={`alert ${notify.type} margin-24`}>
          {notify.msg}
        </div>

        <div className="modal-body bg-grey">
          {links.length === 0 ? (
            <p className="empty-text">
              Your link vault is empty.
            </p>
          ) : (
            links.map((link) => (
              <div key={link.id} className="row-item">
                {editingId === link.id ? (
                  <div className="edit-box">
                    <div className="form-row">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="field"
                      />

                      <input
                        type="text"
                        value={editTag}
                        onChange={(e) => setEditTag(e.target.value)}
                        className="field"
                        placeholder="Tag"
                      />
                    </div>

                    <input
                      type="text"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="field"
                    />

                    <textarea
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      className="field"
                      rows={2}
                    />

                    <div className="edit-actions">
                      <button
                        onClick={() => setEditingId(null)}
                        className="btn btn-secondary btn-sm"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => handleSaveEdit(link.id)}
                        className="btn btn-primary btn-sm"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="view-box">
                    <div className="item-content">
                      <div className="item-title-row">
                        <h4>{link.title}</h4>

                        {link.tag && (
                          <span className="badge blue-badge">
                            {link.tag}
                          </span>
                        )}
                      </div>

                      <p>{link.description}</p>

                      <span className="item-url">
                        {link.url}
                      </span>
                    </div>

                    <div className="item-actions">
                      <button
                        onClick={() => startEditing(link)}
                        className="btn btn-secondary btn-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(link.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}