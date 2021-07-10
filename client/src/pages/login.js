import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Loginstyles.css"
import {Link} from "react-router-dom"


    

    function Login(props) {
        const [email, setEmail]= useState('')
        const [password, setPassword]= useState('')
   
   const handleSubmit =(event) => {
       event.preventDefault()
        axios
            .post(
                "/login",
                {
                   email, password
                },
                { withCredentials: true }
            )
            .then(response => {
               
            })
            .catch(error => {
                console.log("login error", error);
            });
    

    }


    
        return (
          <div>
     <input name="email" onChange= {e=>setEmail(e.target.value)} />
    <input name="password" onChange= {e=>setPassword(e.target.value)} />
    <button onClick= {handleSubmit}>Submit </button>
    <Link to="/signup">Start Adulting Today!</Link>      
           
            </div>
    
        );
      }
    



export default Login;