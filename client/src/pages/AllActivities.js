import React from "react";
import Nav from "../components/Nav/Nav";
import "./AllActivities.css";

function AllActivities() {
  return (
    <div id="AllActivities">
      <Nav />
      <h1>Adulting:</h1>
      <h2>
        Harder than we all thought.
        <br />
        Am I right?
      </h2>
      <div className="row">
        <div className="col s12 m12 l1 allActivities">
          <input placeholder="Date"></input>
        </div>
        <div className="col s12 m12 l4 allActivities">
          <input placeholder="Category"></input>
        </div>
        <div className="col s12 m12 l4 allActivities">
          <input placeholder="Activity"></input>
        </div>
        <div className="col s12 m12 l2 allActivities">
          <input placeholder="Points Earned"></input>
        </div>
      </div>
    </div>
  );
}

export default AllActivities;
