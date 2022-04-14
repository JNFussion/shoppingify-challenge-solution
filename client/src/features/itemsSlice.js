/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getTargetCategory = (state, name) =>
  state.categories.find((cat) => name === cat.name);

export const selectCategory = (state, name) =>
  state.items.categories.find((cat) => name === cat.name);

export const selectCategories = (state) =>
  state.items.categories.map((cat) => cat.name);

export const fetchCategories = createAsyncThunk(
  "items/fetchCategories",
  async () => {
    const response = await fetch("/categories");
    const data = await response.json();
    return data;
  }
);

export const fetchItemsByCategory = createAsyncThunk(
  "items/fetchItemsByCategory",
  async (category) => {
    const response = await fetch(`/category/${category}/items`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  isLoading: false,
  hasError: false,
  categories: [],
};

const sliceOptions = {
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchItemsByCategory.pending]: (state, action) => {
      const targetCategory = getTargetCategory(state, action.meta.arg);
      targetCategory.isLoading = true;
      targetCategory.hasError = false;
    },
    [fetchItemsByCategory.fulfilled]: (state, action) => {
      const targetCategory = getTargetCategory(state, action.meta.arg);
      targetCategory.isLoading = false;
      targetCategory.hasError = false;
      targetCategory.items = action.payload;
    },
    [fetchItemsByCategory.rejected]: (state, action) => {
      const targetCategory = getTargetCategory(state, action.meta.arg);
      targetCategory.isLoading = false;
      targetCategory.hasError = true;
    },
  },
};

export const itemsSlice = createSlice(sliceOptions);

export default itemsSlice.reducer;
