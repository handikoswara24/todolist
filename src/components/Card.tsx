import CloseIcon from "@/icon/close";
import { STATUS } from "@/lib/constants";
import { CardProps } from "@/lib/types";
import { CardAtom } from "@/store/cardAtom";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { changeStatusCard, deleteCard } from "@/lib/cardHelper";

const Card = ({ card }: CardProps) => {
    const { description, id, status, title } = card;
    const [currentStatus, setCurrentStatus] = useState(status);
    const [cards, setCards] = useAtom(CardAtom);

    const deleteCardById = () => {
        setCards(deleteCard(card.id, cards));
    }

    return (
        <div className="p-2 border border-solid border-gray-400 rounded-lg bg-white mb-4">
            <div className="flex justify-between">
                <div className="font-semibold break-words">{title}</div>
                <div className="cursor-pointer" onClick={() => deleteCardById()}>
                    <CloseIcon className="w-4 h-4 text-pink-600" />
                </div>
            </div>
            <div className="mt-2 break-words">
                {description}
            </div>
            <div className="flex mt-2">
                <label htmlFor={`status-${id}`} className="mr-2">
                    Status
                </label>
                <div>
                    <select name={`status-${id}`} id={`status-${id}`} className="bg-white" value={card.status.id} onChange={e => setCards(changeStatusCard(card.id, Number(e.target.value), cards))}>
                        {STATUS.map(e => (
                            <option value={e.id}>{e.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Card;