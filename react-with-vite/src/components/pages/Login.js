import React, { useState } from 'react';
import LoginForm from '../imports/LoginForm';

import { useDispatch, useStore } from 'react-redux';
import { loginAction } from '../../container/actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("")

  const dispatch = useDispatch();
  const store = useStore()
  const navigate = useNavigate()

  // handle Submit handler function
  const handleSubmit = (event) => {
    event.preventDefault();

    const userCredential = {
      email,
      password
    }

    dispatch(loginAction(userCredential)) // Dispatch the loginAction
      .then(data => {
        navigate('/') 
        console.log("Login Success:", data); // This should log the entire response data
        // You can now access the token from 'data' like this: data.token
      })
      .catch(error => {
        setError(error.err)
        console.error("Login Failed:", error);
      });

    // console.log(store.getState());
    // console.log(userCredential);
  };

    return (
        <div id="login">
    <div className="container">
      <div className="row login-box">
        
      <LoginForm loginState={{handleSubmit, setEmail, setPassword, errorMessage, setError}} />
       
       
      </div>
    </div>

    
  </div>
    );
}