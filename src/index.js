import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Navbar_lato from './views/navbar_lato/navbar';
import Home from './views/home/slides_view';
import Sicilia from './views/sicilia/slides_view'
import Casual from "./views/casual/slides_view";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar_lato/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sicilia" element={<Sicilia/>} />
      <Route path='/casual' element={<Casual/>} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
