import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Items from "./components/items/Items";
import ItemsForm from "./components/ItemsForm";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
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
        <div className="absolute right-0 h-full max-w-sm w-96 bg-antique-white">
          <ItemsForm />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
