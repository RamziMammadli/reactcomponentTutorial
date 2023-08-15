import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk(
  "api/categories",
  async () => {
    const response = await axios.get(
      "https://northwind.vercel.app/api/categories/"
    );
    return response.data;
  }
);

const getSlice = createSlice({
  name: "getSlice",
  initialState: {},
  reducers: {
    addPost: (state, action) => {
      state.categories.push(action.payload);
    },
    changeLike: (state, action) => {
      let category = state.categories.find((p) => p.id == action.payload);
      if (category != undefined) {
        category.isLiked = !category.isLiked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { addPost } = getSlice.actions;

export default getSlice.reducer;
