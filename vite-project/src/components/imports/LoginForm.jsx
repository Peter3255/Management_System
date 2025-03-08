import React from 'react'

export default function LoginForm(props) {
    return (
        

<div className="form-section">
      <div className="title">
      <h3>Sign into your account</h3>
      </div>
      <div className="login-inner-form">
      <form method="POST">

      <div className="from-group form-box">
      <input type="text" id="email" classname="input-text" placeholder="Email Address" />
      </div>

      <div className="form-group form-box">
      <input type="text" id="password" className="input-text" placeholder="Password" />
      </div>

      <div className="form-group">
      <button>Login</button>
      </div>

      </form>
    </div>
    </div>

        
    )
}