import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Loginstyles.css";
import { Link } from "react-router-dom";
import loginPic from "../assets/adulting.png";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName]= useState("") 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, username);
    axios
      .post(
        "api/user/login",
        {
          email,
          password,
          username
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        localStorage.user=JSON.stringify(response.data.user)
        window.location.replace("/home");
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <div className="row center-align ">
        <div className="col s6 pic">
          <img src={loginPic} alt="definition of adulting" className="materialboxed" width="325" />
        </div>

        <div className="col s6 center">
          <div className="input-field ">
            <i className="material-icons prefix">account_circle</i>
            <input name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} id="icon_prefix" type="text" className="validate"></input>
          </div>
          <div className="input-field ">
            <i className="material-icons prefix">account_circle</i>
            <input name="email" placeholder="Username" onChange={(e) => setUserName(e.target.value)} id="icon_prefix" type="text" className="validate"></input>
          </div>
          <div className="input-field ">
            <i className="material-icons prefix">security</i>
            <input name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} id="icon_prefix" type="text" className="validate"></input>
          </div>
          <button className="submit" onClick={handleSubmit}>
            Submit{" "}
          </button>
        </div>

        <div>
          <Link className="submit" to="/signup">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
