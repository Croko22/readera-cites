import React from "react";
import {Routes, Route} from "react-router-dom";

import { Navbar } from './components/Navbar';
import {Library} from './components/Library';
import {Book} from './components/Book';
import {Footer} from './components/Footer';
import {Upload} from './components/Upload';
import { ToTheTopB } from './components/ToTheTopB';
//READERA CITES
function App() {
  return(
    <>
    <ToTheTopB/>
    <Navbar/>
    <div className="container d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Library/>}/>
          <Route path="/book" element={<Book/>}/>
          <Route exact path="/upload" element={<Upload/>}/>
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;

