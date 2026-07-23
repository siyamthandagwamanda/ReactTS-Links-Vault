import type { LinkItem } from "../../Types/Vault";
import './LinkCard.module.css';

interface LinkCardProps{
    link: LinkItem;
}

export default function LinkCard({ link }: LinkCardProps){
    return (
        <div className="link-card">
            <div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                {link.tag && <span className="tag">{link.tag}</span>}
            </div>

            <a href={link.url} target="_blank" rel="noreferror" className="card-link">

            </a>
        </div>
    );
}

