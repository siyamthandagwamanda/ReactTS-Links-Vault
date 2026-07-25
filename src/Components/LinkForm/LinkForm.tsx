import { useState } from "react";
import  Modal from "../Modal/Modal";
import type { Link } from "../../Types/Link";

interface LinkFormProps{
    links: Link[];
    setLinks: React.ActionDispatch<React.SetStateAction<Link[]>>;
    editingLink: Link | null;
    close: () => void;
}