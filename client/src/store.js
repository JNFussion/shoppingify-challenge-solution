import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import currentShoppingListReducer from "./features/currentShoppingListSlice";
import searchTermReducer from "./features/searchTermSlice";
import formReducer from "./features/formSlice";
import showReducer from "./features/showSlice";
import currentItemReducer from "./features/currentItem";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    form: formReducer,
    currentShoppingList: currentShoppingListReducer,
    searchTerm: searchTermReducer,
    show: showReducer,
    currentItem: currentItemReducer,
  },
});

export default store;
