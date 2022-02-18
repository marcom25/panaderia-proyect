import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='productos' element={<Products/>}/>
    </Routes>
  );
}

export default App;
