import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addList: any = createAsyncThunk(
    '/list/create',
    async (list) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                console.log(token)
                const res = await axios.post('http://localhost:8080/list' , list, {
                    headers: {'Authorization': 'Bearer ' + token},
                })
                return res.data
            }
            return {message: 'Unauthorized'}
        } catch ({response: {data}}) {
            return data
        }
    }
)