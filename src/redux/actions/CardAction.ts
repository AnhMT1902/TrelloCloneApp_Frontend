import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addCard: any = createAsyncThunk(
    '/card/create',
    async (card) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                console.log(card)
                const res = await axios.post('http://localhost:8080/card', card, {
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