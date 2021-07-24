import React from "react";
import axios from "axios";
import { useState } from "react";
import "./SignupStyle.css";
import signUpPic from "../assets/adultingstatus.png";
import { Redirect } from "react-router-dom";

function Signup(props) {
  const [newFirstName, setnewFirstName] = useState("");
  const [newLastName, setnewLastName] = useState("");
  const [username, setnewUserName] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/user", {
        email: newEmail,
        password: newPassword,
        name: `${newFirstName} ${newLastName}`,
        username: username,
      })
      .then((response) => {
        console.log(response);
        window.location = "/home";
        // return (<Redirect to="/home" />)
      })
      .catch((error) => {
        console.log("user not added", error);
      });
  };

  return (
    <div className="center-align phils-house">
      <div className="col s6">
        <img src={signUpPic} alt="adulting status bar" className="materialboxed col s6 m6 l6" width="325" />
      </div>
      <div className="col s6 phils-form">
        <div className="input-field ">
          <input name="newFirstName" onChange={(e) => setnewFirstName(e.target.value)} placeholder="First Name" id="first_name" type="text" className="validate" />
          <label for="first_name"></label>

          <input name="newLastName" onChange={(e) => setnewLastName(e.target.value)} placeholder="Last Name" id="last_name" type="text" className="validate" />
          <label for="last_name"></label>

          <input name="nickname" onChange={(e) => setnewUserName(e.target.value)} placeholder="Username" id="nickname" type="text" className="validate" />
          <label for="nickname"></label>

          <input name="email" onChange={(e) => setnewEmail(e.target.value)} placeholder="Email" id="email" type="text" className="validate" />
          <label for="email"></label>

          <input name="password" onChange={(e) => setnewPassword(e.target.value)} placeholder="Password" id="password" type="text" className="validate" />
          <label for="password"></label>
        </div>
        <button className="submit" onClick={handleSubmit}>
          Start Adulting Today!
        </button>
      </div>
    </div>
  );
  //     var matrixField = component.find("matrixName");
  // matrixField.showHelpMessageIfInvalid();
  // if(!matrixField.checkValidity()) {
  //   // Optional message if you want
  //   alert("Please fill out the required field.");
  //   return; // Don't continue past this point
  // }
}

export default Signup;
