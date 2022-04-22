/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

export const selectCategoriesShoppingList = (state) => [
  ...new Set(state.currentShoppingList.items.map((item) => item.category.name)),
];

export const selectItemsShoppingList = (state) =>
  state.currentShoppingList.items;

export const selectItemsByCategoryShoppingList = (state, category) =>
  state.currentShoppingList.items.filter((item) => item.category !== category);

export const selectTitleShoppingList = (state) =>
  state.currentShoppingList.title;

export const selectItemByName = (state, itemName) =>
  state.currentShoppingList.items.find((item) => item.name === itemName);

export const selectIsEditingShoppingList = (state) =>
  state.currentShoppingList.isEditing;

export const selectIsCompletedShoppingList = (state) =>
  state.currentShoppingList.isCompleted;

export const selectCurrentShoppingList = (state) => state.currentShoppingList;

const initialState = {
  title: "",
  items: [],
  isEditing: true,
  isCompleted: false,
  completionDate: 0,
};

const currentShoppingListSlice = createSlice({
  name: "currentShoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        name: action.payload.name,
        category: action.payload.category,
        qty: 1,
        isEditing: false,
      };
      const possibleItem = state.items.find((i) => i.name === newItem.name);
      if (possibleItem) {
        possibleItem.qty += 1;
      } else {
        state.items.push(newItem);
      }
    },
    // eslint-disable-next-line consistent-return
    removeItem: (state, action) => {
      const result = state.items.filter((item) => item.name !== action.payload);
      if (result.length) {
        state.items = result;
        return;
      }
      state.items = [];
    },
    clearItems: (state) => ({ ...state, items: [] }),
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    toggleIsEditing: (state, action) => {
      state.isEditing = !state.isEditing;
    },
    toggleIsEditingItem: (state, action) => {
      const targetItem = state.items.find(
        ({ name }) => name === action.payload
      );
      if (targetItem) {
        targetItem.isEditing = !targetItem.isEditing;
      }
    },
    increaseQty: (state, action) => {
      const targetItem = state.items.find(
        ({ name }) => name === action.payload
      );
      if (targetItem) {
        targetItem.qty += 1;
      }
    },
    decreaseQty: (state, action) => {
      const targetItem = state.items.find(
        ({ name }) => name === action.payload
      );
      if (targetItem) {
        if (targetItem.qty - 1 > 0) {
          targetItem.qty -= 1;
        }
      }
    },
    cancelShoppingList: (state, action) => {
      state.isEditing = false;
      state.isCompleted = false;
      state.completionDate = Date.now();
    },
    completedShoppingList: (state, action) => {
      state.isEditing = false;
      state.isCompleted = true;
      state.completionDate = Date.now();
    },
    resetShoppingList: (state, action) => ({ ...initialState }),
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  setTitle,
  setIsEditing,
  toggleIsEditing,
  toggleIsEditingItem,
  increaseQty,
  decreaseQty,
  cancelShoppingList,
  completedShoppingList,
  resetShoppingList,
} = currentShoppingListSlice.actions;
export default currentShoppingListSlice.reducer;
