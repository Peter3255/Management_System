import React, { useState } from 'react';
import LoginForm from '../imports/LoginForm';

import { useDispatch, useStore } from 'react-redux';
import { loginAction } from '../../container/actions';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const store = useStore()

  // handle Submit handler function
  const handleSubmit = (event) => {
    event.preventDefault();

    const userCredential = {
      email,
      password
    }

    const userdata = { email: "admin@gmail.com", password: "admin123" }
    const login = dispatch(loginAction(userdata))
    login
      .then(data => console.log(data))
      .catch(error => console.log(error))
    console.log(store.getState())
    // console.log(userCredential);
  }

    return (
        <div id="login">
    <div className="container">
      <div className="row login-box">
        
      <LoginForm loginState={{handleSubmit, setEmail, setPassword}} />
       
       
      </div>
    </div>

    
  </div>
    );
}