import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk(
  "api/categories",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/api/products"
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
    addWishlist: (state, action) => {
      let product = state.products.find((p) => p.id == action.payload);
      if (product != undefined) {
        product.wishlist = !product.wishlist;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
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
export const { addPost,addWishlist } = getSlice.actions;

export default getSlice.reducer;
