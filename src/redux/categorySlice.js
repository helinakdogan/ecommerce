import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// As an initial state, we don't have any information about categories so it is empty array
const initialState = {
    categories: []
}

export const getCategories = createAsyncThunk('category', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;
})


const categorySlice = createSlice({
    name: "categories",
    initialState,
    // We can't use reducers because we have to use asyncthunk func for api
    reducers: {},

    // Instead, we use this.
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    }
})

export default categorySlice.reducer;