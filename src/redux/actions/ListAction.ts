import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addList: any = createAsyncThunk(
    '/list/create',
    async (list) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const res = await axios.post('http://localhost:8080/list', list, {
                    headers: {'Authorization': 'Bearer ' + token},
                })
                return res.data
            }
            return {message: 'Unauthorized'}
        } catch ({response: {data}}) {
            console.log(data, 'response')
            return data
        }
    }
)
export const getOneList: any = createAsyncThunk(
    '/list/_id',
    async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const res = await axios.post(`http://localhost:8080/list/${id}`, {
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