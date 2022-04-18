/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const selectItem = (state) => state.currentItem.item;

export const fetchItem = createAsyncThunk(
  "currentItem/fetchItem",
  async (name) => {
    const response = await fetch(`/item/${name}`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  isLoading: false,
  hasError: false,
  item: {},
};

const currentItemOptions = {
  name: "currentItem",
  initialState,
  reducers: {
    clearItem: (state, action) => {
      state.item = {};
    },
  },
  extraReducers: {
    [fetchItem.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.item = action.payload;
    },
    [fetchItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const currentItemSlice = createSlice(currentItemOptions);

export const { clearItem } = currentItemSlice.actions;

export default currentItemSlice.reducer;
