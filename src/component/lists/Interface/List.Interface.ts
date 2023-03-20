import {ICard} from "../../cards/Interface/Card.Interface";

export interface IList {
    title: string;
    id: string;
    cards: ICard[] | [];
    provided: any
}

export interface ITitleList {
    title: string;
    id: string;
}

export interface ICreateList {
    title: string;
    broad?: string;
}

export interface IdList {
    id: string;
}