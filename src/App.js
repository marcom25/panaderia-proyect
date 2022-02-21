import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='productos' element={<Products/>}/>
      <Route path='nosotros' element={<AboutUs/>}/>
      <Route path='contactanos' element={<Contact/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='register' element={<RegisterForm/>}/>
    </Routes>
  );
}

export default App;
