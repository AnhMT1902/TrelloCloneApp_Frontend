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
            return data
        }
    }
);

export const addBoard: any = createAsyncThunk(
    '/board/create',
    async (board: any) => {
        try {
            console.log(board)
            const token = localStorage.getItem('token');
            if (token) {
                const res = await axios.post('http://localhost:8080/broad', board, {
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

export const getOneBoard: any = createAsyncThunk(
    '/board/_id',
    async (id: string) => {
        try {

            const token = localStorage.getItem('token');
            if (token) {
                const res = await axios.get(`http://localhost:8080/broad/${id}`, {
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