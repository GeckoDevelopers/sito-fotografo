import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Home from './home/home';
import Navbar from './navbar/navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
