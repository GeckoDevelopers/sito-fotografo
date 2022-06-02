import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Home from './views/home/home';
/* import Navbar_top from './views/navbar/navbar'; */
import Navbar_lato from './views/navbar_lato/navbar';
import Slides from './views/slides/slides'

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* <Navbar_top/> */}
    <Navbar_lato/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/slides" element={<Slides/>} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
