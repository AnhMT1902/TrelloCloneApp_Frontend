import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slice/UserSlice";
import {boardReducer} from "./slice/BoardSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer
    }
})