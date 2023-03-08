import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'auth/login',
    async (data: any) => {
        try {
            const res = await axios.post(`http://localhost:8080/auth/login`, data);
            return res.data
        } catch ({response: {data}}) {
            return data
        }
    }
)
export const register = createAsyncThunk(
    'auth/register',
    async (data: any) => {
        try {
            const res = await axios.post(`http://localhost:8080/auth/register`, data);
            return res.data
        } catch ({response: {data}}) {
            return data
        }
    }
)