import React from "react";
import axios from "axios";

import "./StatusStyle.css";






function Status() {
  return (
      <div className="col s12 m12 l4 profileCard">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Status</span>
            <p>This is where we will display the user's name, their current score and level.  We will also show how many points until the next level</p>
          </div>
          <div className="card-action">
            <a href="#AllActivities">See all my Adulting Activities</a>
          </div>
        </div>
      </div>
  );
}

export default Status;
