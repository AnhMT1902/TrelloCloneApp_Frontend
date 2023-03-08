import {createSlice} from "@reduxjs/toolkit"
import {getAllBoardByUser} from "../actions/BoardAction";

const initialState = {
    currentBoard: []
}
const boardSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllBoardByUser.fulfilled, (state, action) => {
            state.currentBoard = action.payload
        })
    }
})

export const boardReducer = boardSlice.reducer;