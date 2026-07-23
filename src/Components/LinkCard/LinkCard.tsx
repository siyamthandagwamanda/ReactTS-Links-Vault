import React from "react";
import type { LinkItem } from "../../Types/Vault";
import './LinkCard.module.css';

interface LinkCardProps{
    link: LinkItem;
}

export default function LinkCard({ link }: LinkCardProps){
    return (

        <div className="card">

          <div className="card-content">
                <div className="card-header">
                    <h3>{link.title}</h3>
                    {link.tag && <span className="badge">{link.tag}</span>}
                </div>  
                <p className="card-desc">{link.description}</p>
          </div>

          <a href={link.url} target="_blank" rel="noreferror" className="card-link">
            {link.url}
          </a>
        </div>

    );
}

