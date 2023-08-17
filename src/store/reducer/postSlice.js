import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const _createPost = createAsyncThunk('api/post', async (data) => {
    const response = await axios.post('https://northwind.vercel.app/api/categories/', data)
    return response.data
})

const postSlice = createSlice({
    name: 'postSlice',
    initialState: { },  
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
        // GET
        .addCase(_createPost.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
        .addCase(_createPost.pending, (state, action) => {
            state.loading = true
        })
        .addCase(_createPost.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }

})

export default postSlice.reducer