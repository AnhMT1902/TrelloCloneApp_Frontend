import {createSlice} from "@reduxjs/toolkit"
import {addBoard, getAllBoardByUser} from "../actions/BoardAction";

const initialState = {
    currentBoard: []
}
const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllBoardByUser.fulfilled, (state, action) => {
            state.currentBoard = action.payload
        });
        builder.addCase(addBoard.fulfilled, (state: any, action) => {
            state.currentBoard = [...state.currentBoard, action.payload]
        })
    }
})

export const boardReducer = boardSlice.reducer;