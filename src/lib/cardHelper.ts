import { STATUS } from "./constants";
import { CardInput, CardType } from "./types";

import {v4 as uuidv4} from 'uuid';

export const addNewCard = (card : CardInput, cards: CardType[]) => {
    const id = uuidv4();

    const newCard : CardType = {
        ...card,
        id,
        status : STATUS[0]
    }

    return [...cards, newCard];
}

export const deleteCard = (id : string, cards: CardType[]) => {
    return cards.filter(e => e.id != id);
}

export const changeStatusCard = (id : string, status: number, cards: CardType[]) => {
    const card = cards.find(e => e.id == id)!;
    card.status = STATUS.find(e => e.id == status)!;

    return [...cards.filter(e => e.id != id), card];
}