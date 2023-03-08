import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBoardByUser: any = createAsyncThunk(
    '/boards',
    async (token: string) => {
        try {
            const res = await axios.get('http://localhost:8080/broad', {
                headers: {'Authorization': 'Bearer ' + token}
            })
            return res.data
        } catch ({response: {data}}) {
            console.log(data, "errr")
            return data
        }
    }
)