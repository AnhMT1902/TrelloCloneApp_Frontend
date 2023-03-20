import {createSlice} from "@reduxjs/toolkit";
import {addList} from "../actions/ListAction";

const initialState = {
    currentList: [],
    listCreated: {}
}

const ListSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addList.fulfilled, (state, action) => {
            state.listCreated = action.payload
        });
    }
})
export const listReducer = ListSlice.reducer