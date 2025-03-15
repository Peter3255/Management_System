/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './app.css';


import { BrowserRouter, Routes, Route } from 'react-router'

import Login from "./components/imports/pages/Login";

import Register from "./components/imports/pages/Register";

import Home from "./components/imports/pages/Home";

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
