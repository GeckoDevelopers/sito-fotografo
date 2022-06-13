import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Navbar_lato from './components/navbar_lato/navbar';

import Home from './views/home/home';
import Sicilia from './views/sicilia/sicilia';
import Casuale from './views/casuale/casuale';
import Test from './views/test/test';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar_lato/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sicilia' element={<Sicilia/>} />
      <Route path='/casuale' element={<Casuale/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
