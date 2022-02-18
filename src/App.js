import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='productos' element={<Products/>}/>
      <Route path='nosotros' element={<AboutUs/>}/>
      <Route path='contactanos' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
