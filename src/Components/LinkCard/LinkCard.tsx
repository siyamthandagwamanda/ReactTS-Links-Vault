import type { LinkItem } from "../../Types/Vault";
import "./LinkCard.module.css"

type Props = {
  link: LinkItem;
};

function LinkCard({ link }: Props) {
  return (
    <div className="card">
      <h3>{link.title}</h3>

      {link.tag ? (
        <span className="badge">{link.tag}</span>
      ) : null}

      <p>{link.description}</p>

      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.url}
      </a>
    </div>
  );
}

export default LinkCard;