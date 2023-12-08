import React from "react";
import { AllProducts, ProductDetail } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, CheckOut, SearchResult } from "./components";

function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <SearchResult />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <CheckOut />
    </div>
  );
}

export default App;
