import React from "react";
import { AllProducts, ProductDetail } from "./pages";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar, CheckOut, SearchResult } from "./components";
import { Toaster } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import AuthLogin from "./pages/AuthLogin";

function App() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login-auth");
  }

  return (
    <div className="w-full ">
      <Navbar />
      <SearchResult />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login-auth" element={<AuthLogin />} />
      </Routes>
      <CheckOut />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
