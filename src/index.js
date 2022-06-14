import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Navbar_lato from './components/navbar_lato/navbar';

import Home from './views/home/home';

import Bioinfo from './views/bioinfo/bioinfo';
import Book from './views/book/book';
import Contact from './views/contact/contact';

import Sicilia from './views/sicilia/sicilia';
import Casuale from './views/casuale/casuale';
import Test from './views/test/test';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar_lato/>
    <div id='navbarSpacing'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sicilia' element={<Sicilia/>} />
        <Route path='/casuale' element={<Casuale/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/bioinfo' element={<Bioinfo/>} />
        <Route path='/book' element={<Book/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
