import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ChangePassword from './components/ChangePassword';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='productos' element={<Products/>}/>
      <Route path='nosotros' element={<AboutUs/>}/>
      <Route path='contactanos' element={<Contact/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='register' element={<RegisterForm/>}/>
      <Route path='changePassword' element={<ChangePassword/>} />
    </Routes>
  );
}

export default App;
