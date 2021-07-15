import React from "react";
import "./ProfileStyle.css";

function Profile() {
  return (
      <div className="col s12 m12 l4 profileCard">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Profile</span>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="#">See all my Adulting Activities</a>
          </div>
        </div>
      </div>
  );
}

export default Profile;
