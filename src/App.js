import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Signup from './login/Signup';
import Product from "./componet/Product";
import About from "./componet/About";


function App() {
 
  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/Signup' exact element={<Signup />} />
        <Route path='/Product' exact element={<Product/>} />
        <Route path='/About' exact element={<About/>}/>
      </Routes>
    
    </>
  );
}

export default App;
