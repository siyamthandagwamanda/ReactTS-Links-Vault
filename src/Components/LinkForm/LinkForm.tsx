import { useState } from "react";
import Modal from "../Modal/Modal";
import type { Link } from "../../Types/Link";

interface LinkFormProps{
  editingLink: Link | null;
  onAdd: (link: Omit<Link, "id">) => void;
  onUpdate: (id: number, updates: Omit<Link, "id">) => void;
  close: () => void;
}

interface FormData{
  title: string;
  url: string;
  description: string;
  tag: string;
}

function LinkForm({ editingLink, onAdd, onUpdate, close, }: LinkFormProps){
  const [formData, setFormData] = useState<FormData>({
    title: editingLink ? editingLink.title : "",
    url: editingLink ? editingLink.url : "",
    description: editingLink ? editingLink.description : "",
    tag: editingLink ? editingLink.tag : "",
  });

   const [errorMessage, setErrorMessage] = useState("");

   function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

  
    setErrorMessage("");

    const title = formData.title;
    const url = formData.url;
    const description = formData.description;
    const tag = formData.tag;

  
    if (
      !title.trim() ||
      !url.trim() ||
      !description.trim()
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (editingLink) {
      onUpdate(editingLink.id, {
        title: title,
        url: url,
        description: description,
        tag: tag,
      });
    } else {
     
      onAdd({
        title: title,
        url: url,
        description: description,
        tag: tag,
      });
    }

    close();
  }
}