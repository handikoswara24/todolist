import React, { useState } from "react";
import Card from "./Card";

import { STATUS } from "../lib/constants";
import PlusIcon from "@/icon/plus";
import CloseIcon from "@/icon/close";
import CardForm from "./CardForm";
import { useAtom } from "jotai";
import { CardAtom } from "@/store/cardAtom";

type BoxProps = {
    type: number
}

const Box = ({ type }: BoxProps) => {
    const [showAdd, setShowAdd] = useState(false);
    const [cards,] = useAtom(CardAtom);

    const filterCards = cards.filter(e => e.status.id == type);

    return (
        <div className="border border-gray-400 border-solid rounded-lg relative">
            <div className="pl-1 pb-2 border-b solid border-gray-400 bg-gray">
                {STATUS.find(e => e.id == type)?.label}
                {type == 1 && !showAdd && <span className="inline-block cursor-pointer absolute top-2 right-1" onClick={() => setShowAdd(true)}><PlusIcon className="h-4 w-4 text-green-600" /></span>}
                {type == 1 && showAdd && <span className="inline-block cursor-pointer absolute top-2 right-1" onClick={() => setShowAdd(false)}><CloseIcon className="h-4 w-4 text-green-600" /></span>}
                {type == 1 && showAdd && (
                    <div className="absolute z-10 bg-gray-200 w-full left-0 top-8">
                        <CardForm setFalse={() => setShowAdd(false)} />
                    </div>
                )}
            </div>
            <div className="p-4">
                {filterCards.map(c => (
                    <Card card={c} key={c.id} />
                ))}
            </div>
        </div>
    )
}

export default Box;