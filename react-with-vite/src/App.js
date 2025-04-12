import { useState, useEffect } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './app.css';
import axios from "axios";


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "./components/imports/pages/Login";

import Register from "./components/imports/pages/Register";

import Home from "./components/imports/pages/Home";

function App() {
  const [count, setCount] = useState(0);
      const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api");
      setArray(response.data.fruits)
      console.log(response.data.fruits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

return (
  <div id="login">
    <div className="container">
      <div className="row login-box">
        
      
      
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home fruits={array} />} />
          
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
