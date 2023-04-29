import { addNewCard } from "@/lib/cardHelper";
import { CardInput } from "@/lib/types";
import { CardAtom } from "@/store/cardAtom";
import { useAtom } from "jotai";
import React, { useState } from "react";

type CardFormProps = {
    setFalse: () => void
}

const CardForm = ({ setFalse }: CardFormProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cards, setCards] = useAtom(CardAtom);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title, description);
        const newCard: CardInput = {
            description, title
        };

        setCards(addNewCard(newCard, cards));
        setFalse();
    }

    return (
        <form onSubmit={(e) => { onSubmit(e) }} className="p-2">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="block border border-gray-400 border-solid rounded-md w-full p-2 mb-4" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="block border border-gray-400 border-solid rounded-md w-full p-2 mb-4">
            </textarea>
            <button type="submit" className="bg-none border border-solid border-blue-400 rounded-md text-blue-400 w-full">Add</button>
        </form>
    )
}

export default CardForm;