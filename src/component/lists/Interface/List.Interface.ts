import {ICard} from "../../cards/Interface/Card.Interface";

export interface IList {
    title: string;
    id: string;
    cards: ICard[] | [];
}

export interface ITitleList {
    title: string;
    id: string;
}

export interface ICreateList {
    title: string;
}