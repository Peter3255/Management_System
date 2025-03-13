/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './app.css';


import { BrowserRouter, Routes, Route } from 'react-router'

import Login from './components/pages/Login';

function App() {
return (
  <div id="login">
    <div className="container">
      <div className="row login-box">
        
      
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
    
       
      </div>
    </div>

    
  </div>
);
}

export default App
