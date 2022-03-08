import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./$-home/Home"
import Navbar from "./$-header/Navbar";
import Sidebar from "./$-header/Sidebar";
import Products from "./$-products/Products";
import AboutUs from "./$-about-us/AboutUs";
import LoginForm from "./$-header/LoginForm";
import RegisterForm from "./$-header/RegisterForm";
import ChangePassword from "./$-header/ChangePassword";
import Footer from "./$-footer/Footer";
import {CartPage} from "./$-header/CartPage";





function App() {

  
  
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="contactanos" element={<AboutUs />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
