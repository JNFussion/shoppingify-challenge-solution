import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Items from "./components/items/Items";
import ItemsForm from "./components/ItemsForm";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import ShowItem from "./components/showItem";
import Statistics from "./components/Statistics";
import {
  selectShowForm,
  selectShowItem,
  selectShowShoppingList,
} from "./features/showSlice";

function App() {
  const showShoppingList = useSelector(selectShowShoppingList);
  const showForm = useSelector(selectShowForm);
  const showItem = useSelector(selectShowItem);

  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route index element={<Items />} />
          <Route path="/items" element={<Items />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <div className="absolute right-0 max-h-screen h-full  max-w-sm w-96">
          {showShoppingList && <ShoppingList />}
          {showForm && <ItemsForm />}
          {showItem && <ShowItem />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
