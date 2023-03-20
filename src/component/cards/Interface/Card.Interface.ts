export interface ICard {
    detail?: string;
    _id?: string
    list?: string;
    index_list?: number;
    provided?: any
}

export interface IAddCard {
    detail: string;
    lists: string;
    broad: string;
}

export interface IUpdateCard {
    detail: string;
}