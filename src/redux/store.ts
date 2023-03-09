import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slice/UserSlice";
import {boardReducer} from "./slice/BoardSlice";
import {listReducer} from "./slice/ListSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer,
        list: listReducer,
    }
})