/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

export const selectItemsShoppingList = (state) =>
  state.currentShoppingList.items;

const initialState = {
  name: "",
  items: [],
};

const currentShoppingListSlice = createSlice({
  name: "currentShoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => state.items.push(action.payload),
    removeItem: (state, action) =>
      state.items.filter((item) => item._id !== action.payload),
    clearItems: (state) => ({ ...state, items: [] }),
  },
});

export const { addItem, removeItem, clearItems } =
  currentShoppingListSlice.actions;
export default currentShoppingListSlice.reducer;
