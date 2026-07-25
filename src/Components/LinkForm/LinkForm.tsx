import { useState } from "react";
import  Modal from "../Modal/Modal";
import type { Link } from "../../Types/Link";

interface LinkFormProps{
    links: Link[];
    setLinks: React.ActionDispatch<React.SetStateAction<Link[]>>;
    editingLink: Link | null;
    close: () => void;
}

function LinkForm({
    links,
    setLinks,
    editingLink,
    close,
} : LinkFormProps) {
    
    const [title, setTitle] = useState(editingLink?.title || "");
    const [url, setUrl] = useState(editingLink?.url || "");
    const [description, setDescription] = useState( editingLink?.description || "");

    const [tags, setTags] = useState(editingLink?.tags || "");

    function saveLink(){
        if (!title || !url || !description){
            alert("Please complete all required fields.");
            return;
        }

        let updatedLinks: Link[];

        if (editingLink){
            updatedLinks = links.map((link) => link.id === editingLink.id?
            {
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

    localStorage.setItem(
        "links",
        JSON.stringify(updatedLinks)
    );

    close();
}

return(
    
)