import {createSlice} from "@reduxjs/toolkit"
import {login, register} from "../actions/UserAction";

const initialState = {
    currentUser: {}
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
        });

        builder.addCase(register.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
    }
})

export const userReducer = userSlice.reducer;