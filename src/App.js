import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/components/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Sidebar from './components/common/Sidebar/Sidebar';
import Products from './pages/Products/components/Products/Products';
import AboutUs from './pages/AboutUs/components/AboutUs/AboutUs';
import LoginForm from './pages/Login/components/LoginForm/LoginForm';
import RegisterForm from './pages/Login/components/RegisterForm/RegisterForm';
import ChangePassword from './pages/Login/components/ChangePassword/ChangePassword';
import Footer from './components/common/Footer/Footer';
import { CartPage } from './pages/Cart/components/CartPage/CartPage';
import ErrorPage from './components/common/Error/Error';

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
