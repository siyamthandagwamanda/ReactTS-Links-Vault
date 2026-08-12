import { useState } from "react";
import Modal from "../Modal/Modal";
import type { Link } from "../../Types/Link";

interface LinkFormProps{
  editingLink: Link | null;
  onAdd: (link: Omit<Link, "id">) => void;
  onUpdate: (id: number, updates: Omit<Link, "id">) => void;
  close: () => void;
}