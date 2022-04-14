import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import currentShoppingListReducer from "./features/currentShoppingListSlice";
import searchTermReducer from "./features/searchTermSlice";
import formReducer from "./features/formSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    form: formReducer,
    currentShoppingList: currentShoppingListReducer,
    searchTerm: searchTermReducer,
  },
});

export default store;
