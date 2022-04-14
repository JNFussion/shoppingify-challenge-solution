import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import currentShoppingListReducer from "./features/currentShoppingListSlice";
import searchTermReducer from "./features/searchTermSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    currentShoppingList: currentShoppingListReducer,
    searchTerm: searchTermReducer,
  },
});

export default store;
