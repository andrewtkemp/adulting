import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Signup.css";
import {Redirect} from "react-router-dom";


function Signup(props) {
    const [newFirstName, setnewFirstName]= useState('')
    const [newLastName, setnewLastName]= useState('')
    const [nickname, setnewNickName]= useState('')
    const [newEmail, setnewEmail]= useState('')
    const [newPassword, setnewPassword]= useState('')


    const handleSubmit =(event) => {
        event.preventDefault()
         axios
             .post(
                 "/api/user",
                 {
                    email:newEmail, password:newPassword,name:`${newFirstName}${newLastName}`, username: nickname
                 }
                 
             )
             .then(response => {
             console.log(response)
             return (<Redirect to = "/activities" />)
             })
             .catch(error => {
                 console.log("user not added", error);
             });
     
 
     }
 
 
     
         return (
           <div>
      <input name="newFirstName" onChange= {e=>setnewFirstName(e.target.value)} />
      <input name="newLastName" onChange= {e=>setnewLastName(e.target.value)} />
      <input name="nickname" onChange= {e=>setnewNickName(e.target.value)} />
      <input name="newEmail" onChange= {e=>setnewEmail(e.target.value)} />
     <input name="newPassword" onChange= {e=>setnewPassword(e.target.value)} />
     <button onClick= {handleSubmit}>Start Adulting Today!</button>
        
            
             </div>
     
         );
       }
     
 
 
 
 export default Signup;