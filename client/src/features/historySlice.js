/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export const selectMonths = (state) => [
  ...new Set(
    state.history.savedShoppingLists.map(
      (shoppingList) =>
        `${new Date(shoppingList.completionDate).getMonth()} ${new Date(
          shoppingList.completionDate
        ).getFullYear()}`
    )
  ),
];

export const selectShoppingListsByMonth = (state, month) =>
  state.history.savedShoppingLists.filter(
    (shoppingList) =>
      `${new Date(shoppingList.completionDate).getMonth()} ${new Date(
        shoppingList.completionDate
      ).getFullYear()}` === month
  );
export const selectSavedShoppingListByDate = (state, dateFormated) =>
  state.history.savedShoppingLists.find(
    (shoppingList) =>
      format(new Date(shoppingList.completionDate), "y_MM_dd_hh_m") ===
      dateFormated
  );

export const selectCategoriesSavedShoppingList = (state, dateFormated) => {
  const targetShoppingList = selectSavedShoppingListByDate(state, dateFormated);
  return [...new Set(targetShoppingList.items.map((item) => item.category))];
};

const initialState = {
  savedShoppingLists: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addShoppingList: (state, action) => {
      state.savedShoppingLists.push(action.payload);
      localStorage.setItem(
        "savedShoppingLists",
        JSON.stringify(state.savedShoppingLists)
      );
    },
    loadSaveShoppingLists: (state) => {
      const aux = localStorage.getItem("savedShoppingLists");
      if (aux) {
        state.savedShoppingLists = JSON.parse(aux);
        return;
      }
      state.savedShoppingLists = [];
    },
  },
  extraReducers: {},
});

export const { addShoppingList, loadSaveShoppingLists } = historySlice.actions;

export default historySlice.reducer;
