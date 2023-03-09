import {createSlice} from "@reduxjs/toolkit";
import {addCard} from "../actions/CardAction";

const initialState = {
    currentCard: []
}
const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCard.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const cardReducer = CardSlice.reducer