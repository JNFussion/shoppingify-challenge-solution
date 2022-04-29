import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/history/History";
import SavedShoppingList from "./components/history/SavedShoppingList";
import Items from "./components/items/Items";
import ItemsForm from "./components/ItemsForm";
import Navbar from "./components/Navbar";
import Confirmation from "./components/shoppingList/Confirmation";
import ShoppingList from "./components/shoppingList/ShoppingList";
import ShowItem from "./components/showItem";
import Statistics from "./components/Statistics";
import { loadSaveShoppingLists } from "./features/historySlice";
import {
  selectShowConfirmation,
  selectShowForm,
  selectShowItem,
  selectShowShoppingList,
  toggleShoppingList,
} from "./features/showSlice";

function App() {
  const showShoppingList = useSelector(selectShowShoppingList);
  const showForm = useSelector(selectShowForm);
  const showItem = useSelector(selectShowItem);
  const showConfirmation = useSelector(selectShowConfirmation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSaveShoppingLists());
    if (window.matchMedia("(max-width: 768px)").matches) {
      dispatch(toggleShoppingList());
    }
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <div className="h-full flex">
        <Navbar />
        <Routes>
          <Route index element={<Items />} />
          <Route path="/items" element={<Items />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<SavedShoppingList />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <div className="z-50 absolute md:relative right-0 w-72 md:w-96">
          {showShoppingList && <ShoppingList />}
          {showForm && <ItemsForm />}
          {showItem && <ShowItem />}
        </div>
        {showConfirmation && <Confirmation />}
      </div>
    </BrowserRouter>
  );
}

// absolute right-0 max-h-screen h-full  max-w-sm w-96

export default App;
