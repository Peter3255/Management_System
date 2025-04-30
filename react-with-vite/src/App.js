import { useState, useEffect } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './app.css';
import axios from "axios";


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "./components/pages/Login";

import Register from "./components/pages/Register";

import Home from "./components/pages/Home";

function App() {
  
  

return (
  <div id="login">
    <div className="container">
      <div className="row login-box">
        
      
      
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        </BrowserRouter>
    
       
      </div>
    </div>

    
  </div>
);
}

export default App
