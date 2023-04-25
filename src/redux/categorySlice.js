import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : []
}

export const getCategories = createAsyncThunk('category', async() => {
    const response = await fetch('')
})


const categorySlice = createSlice({
    name: "categories",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        //builder
    }
})


//37.00