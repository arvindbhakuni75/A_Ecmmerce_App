import React from "react";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import CheckOut from "./pages/CheckOut";
import SearchResult from "./pages/SearchResult";

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
