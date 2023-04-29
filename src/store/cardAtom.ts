import { CardType } from '@/lib/types'
import { atomWithStorage } from 'jotai/utils';

export const CardAtom = atomWithStorage("cardData",[] as CardType[])