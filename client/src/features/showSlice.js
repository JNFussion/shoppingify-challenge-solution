/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

export const selectShowShoppingList = (state) => state.show.shoppingList;
export const selectShowForm = (state) => state.show.form;
export const selectShowItem = (state) => state.show.item;

const initialState = {
  shoppingList: true,
  form: false,
  item: false,
};

const showOptions = {
  name: "show",
  initialState,
  reducers: {
    toggleShoppingList: (state, action) => {
      state.shoppingList = !state.shoppingList;
      state.form = false;
      state.item = false;
    },
    showShoppingList: (state, action) => {
      state.shoppingList = true;
      state.form = false;
      state.item = false;
    },
    showForm: (state, action) => {
      state.shoppingList = false;
      state.form = true;
      state.item = false;
    },
    showItem: (state, action) => {
      state.shoppingList = false;
      state.form = false;
      state.item = true;
    },
  },
  extraReducers: {},
};

const showSlice = createSlice(showOptions);

export const { toggleShoppingList, showShoppingList, showForm, showItem } =
  showSlice.actions;

export default showSlice.reducer;
