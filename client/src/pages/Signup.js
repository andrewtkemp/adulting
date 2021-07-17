import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Signup.css";
import signUpPic from "../assets/adultingStatus.png"
import { Redirect } from "react-router-dom";




function Signup(props) {
    const [newFirstName, setnewFirstName] = useState('')
    const [newLastName, setnewLastName] = useState('')
    const [nickname, setnewNickName] = useState('')
    const [newEmail, setnewEmail] = useState('')
    const [newPassword, setnewPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(
                "/api/user",
                {
                    email: newEmail, password: newPassword, name: `${newFirstName}${newLastName}`, username: nickname
                }

            )
            .then(response => {
                console.log(response)
                // window.location.replace = '/activities';
                return (<Redirect to="/home" />)
            })
            .catch(error => {
                console.log("user not added", error);
            });
    }

    return (
       
       <div className= "center-align" >
           <div className= "row">
     <img src={signUpPic} className="materialboxed" width="325"  />
        <div className="row">
                <div className="input-field col s5">
                    <input name="newFirstName" onChange={e => setnewFirstName(e.target.value)} placeholder="First Name" id="first_name" type="text" className="validate" />
                    <label for="first_name"></label>
                </div>
                <div className="input-field col s5">
                    <input name="newLastName" onChange={e => setnewLastName(e.target.value)} placeholder= "Last Name" id="last_name" type="text" className="validate" />
                    <label for="last_name"></label>
                </div>
            </div>
           <div className= "row">
            <div className="input-field col s5">
                    <input name="nickname" onChange={e => setnewNickName(e.target.value)} placeholder= "Nickname" id="nickname" type="text" className="validate" />
                    <label for="nickname"></label>
                </div>
                <div className="input-field col s5">
                    <input name="email" onChange={e => setnewEmail(e.target.value)} placeholder= "Email" id="email" type="text" className="validate" />
                    <label for="email"></label>
                </div>

                <div className="input-field col s5">
                    <input name="password" onChange={e => setnewPassword(e.target.value)} placeholder= "Password" id="password" type="text" className="validate" />
                    <label for="password"></label>
                </div>
            </div>
            </div>
            <button  className= "submit" onClick={handleSubmit}>Start Adulting Today!</button>
            
        </div>
    );
}

export default Signup;