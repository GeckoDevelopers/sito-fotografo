import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Navbar_lato from './views/navbar_lato/navbar';

import Home from "./slider_no_swipe-img/slider_view"
import Sicilia from "./slider_no_swipe-img/slider_view"
import Casuale from "./slider_no_swipe-img/slider_view"
import Test from "./slider_no_swipe-img/slider_view"

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar_lato/>
    <Routes>
      {<Route path='/' element={<Home/>} />}
      <Route path='/sicilia' element={<Sicilia/>} />
      <Route path='/casuale' element={<Casuale/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
