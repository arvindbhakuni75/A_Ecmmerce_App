import React from "react";
import { AllProducts, ProductDetail } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, CheckOut, SearchResult } from "./components";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
