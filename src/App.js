import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/components/Home/Home.jsx';
import Navbar from './components/common/Navbar/Navbar.jsx';
import Sidebar from './components/common/Sidebar/Sidebar.jsx';
import Products from './pages/Products/components/Products/Products.jsx';
import AboutUs from './pages/AboutUs/components/AboutUs/AboutUs.jsx';
import LoginForm from './pages/Login/components/LoginForm/LoginForm.jsx';
import RegisterForm from './pages/Login/components/RegisterForm/RegisterForm.jsx';
import ChangePassword from './pages/Login/components/ChangePassword/ChangePassword.jsx';
import Footer from './components/common/Footer/components/Footer/Footer.jsx';
import { CartPage } from './pages/Cart/components/CartPage/CartPage.jsx';
import ErrorPage from './components/common/Error/Error.jsx';

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
        <Route
          path="error"
          element={<ErrorPage />}
          render={() => <Navigate to="/error" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
