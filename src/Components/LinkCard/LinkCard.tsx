import type { Link } from "../../Types/Link";

interface LinkCardProps {
  link: Link;
  onDelete: (id: number) => void;
  onEdit: (link: Link) => void;
}

function LinkCard({ link, onDelete, onEdit }: LinkCardProps) {
  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this link?")) {
      onDelete(link.id);
    }
  }

  return (
    <div className="link-card">
      <h3>{link.title}</h3>

      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.url}
      </a>

      <p>{link.description}</p>

      <p>
        <strong>Tags:</strong> {link.tags || "None"}
      </p>

      <div className="card-buttons">
        <button className="edit-btn" onClick={() => onEdit(link)}>
          Edit
        </button>

        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default LinkCard;