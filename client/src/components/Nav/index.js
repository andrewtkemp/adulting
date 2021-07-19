import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/login";
import AllActivities from "../../pages/AllActivities";

function Nav() {
  return (
    <nav>
      <div class="#69f0ae green accent-2 nav-wrapper">
        <a href="/Home" class="brand-logo">
          ADULTING
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="/AllActivities">Activity Log</a>
          </li>
          <li>
            <a href="/Login">Log Out</a>
          </li>
        </ul>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/AllActivities">Activity Log</a>
        </li>
        <li>
          <a href="/Login">Log Out</a>
        </li>
      </ul>


export default Nav;
