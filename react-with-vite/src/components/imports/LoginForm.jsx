import React from 'react';
import ErrorAlert from './ErrorAlert';

export default function LoginForm(props) {

    let { handleSubmit, setEmail, setPassword, errorMessage, setError } = props.loginState;

    return (
        

<div className="form-section">
      <div className="title">
      <h3>Sign into your account</h3>
      </div>
      <div className="login-inner-form">
      <form method="POST" onSubmit={handleSubmit}>

      <div className="from-group form-box">
      <input type="text" id="email" onChange={e => setEmail(e.target.value)} className="input-text" placeholder="Email Address" />
      </div>

      <div className="form-group form-box">
      <input type="text" id="password" onChange={e => setPassword(e.target.value)} className="input-text" placeholder="Password" />
      </div>

      {
        errorMessage && <ErrorAlert errorMessage={errorMessage} clearError={() => setError(undefined)}></ErrorAlert>
      }

      <div className="form-group">
      <button >Login</button>
      </div>

      </form>
    </div>
    </div>

        
    )
}