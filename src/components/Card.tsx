import CloseIcon from "@/icon/close";
import { STATUS } from "@/lib/constants";
import { CardProps } from "@/lib/types";
import { CardAtom } from "@/store/cardAtom";
import React from "react";
import { useAtom } from "jotai";
import { changeStatusCard, deleteCard } from "@/lib/cardHelper";
import { useDrag } from "react-dnd";

const Card = ({ card }: CardProps) => {
    const { description, id, status, title } = card;
    const [cards, setCards] = useAtom(CardAtom);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { id, status },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    const deleteCardById = () => {
        setCards(deleteCard(card.id, cards));
    }

    return (
        <div className={`p-2 border border-solid ${isDragging ? "border-pink-400" : "border-gray-400"} rounded-lg bg-white mb-4`} ref={drag}>
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
                    <select name={`status-${id}`} id={`status-${id}`} className="bg-white" value={status.id} onChange={e => setCards(changeStatusCard(card.id, Number(e.target.value), cards))} disabled>
                        {STATUS.map(e => (
                            <option value={e.id} key={e.id + "-" + "id"}>{e.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Card;