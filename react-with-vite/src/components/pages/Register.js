import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from "../../container/actions";
import RegisterForm from '../imports/RegisterForm';

export default function Register() {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordCheck, setPasswordCheck] = useState("");

const dispatch = useDispatch()

// on form submit click handler
const handleSubmit = (event) => {
  event.preventDefault();

    const newUser = {
      username,
      email,
      password,
      passwordCheck
    }
    
    const user = { username : "admin", email: "admin@gmail.com",
                  password: "admin123", passwordCheck: "admin123"}
    const validate = dispatch(registerAction(user));
    validate
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))
    // console.log(newUser);

  }

  let registerData = {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck
  }


    return (
       <div id="login">
           <div className="container">
             <div className="row login-box">
               
             <RegisterForm registerState={registerData} />
              
           
              
             </div>
           </div>
       
           
         </div>
  
    );
}