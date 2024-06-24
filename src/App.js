import React from 'react'
import Main from './components/main';
import Favorite from './components/favorite';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
  <div>
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/components/favorite" element={<Favorite/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>

  );
}

export default App;
