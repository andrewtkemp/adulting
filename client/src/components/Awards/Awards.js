import React from "react";
import "./AwardsStyle.css";

function Awards() {
  return (
    <div className="col s12 m12 l4 awardCard">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Awards</span>
          <p>This is where we will show the awards that have been achieved.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
}

export default Awards;
