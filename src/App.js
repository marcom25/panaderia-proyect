import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <
        <Route path='/inicio' element={<Home/>} />
        <Route path=''
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
