import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Items />} />
        <Route path="/items" element={<Items />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
