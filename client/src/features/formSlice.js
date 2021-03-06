/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

export const selectNameForm = (state) => state.form.name;
export const selectNoteForm = (state) => state.form.note;
export const selectImageForm = (state) => state.form.image;
export const selectCategoryForm = (state) => state.form.category;
export const selectErrorForm = (state) => state.form.error;

const initialState = {
  hasError: false,
  name: "",
  note: "",
  image: "",
  category: "",
  error: {},
};

const formOptions = {
  name: "form",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addNote: (state, action) => {
      state.note = action.payload;
    },
    addImage: (state, action) => {
      state.image = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
    clear: (state, action) => {
      state.name = "";
      state.note = "";
      state.image = "";
      state.category = "";
      state.error = {};
    },
    clearCategory: (state, action) => {
      state.category = "";
    },
  },
  extraReducers: {},
};

const formSlice = createSlice(formOptions);

export const {
  addName,
  addNote,
  addImage,
  addCategory,
  addError,
  clear,
  clearCategory,
} = formSlice.actions;

export default formSlice.reducer;
