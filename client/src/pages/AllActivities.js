import React from "react";
import Nav from "../components/Nav/index";
import adultingIsHard from "../assets/adultingIsHard.png";

function AllActivities() {
  return (
    <div>
      <Nav />
      <main className="container">
        <div className="col s6 pic">
          <img src={adultingIsHard} className="materialboxed" id="allActivitiesPic" width="325" />
        </div>
        <div className="row">
          <div className="col s12 m12 l2 allActivities">
            <input placeholder="date"></input>
          </div>
          <div className="col s12 m12 l4 allActivities">
            <input placeholder="category"></input>
          </div>
          <div className="col s12 m12 l4 allActivities">
            <input placeholder="activity"></input>
          </div>
          <div className="col s12 m12 l2 allActivities">
            <input placeholder="points earned"></input>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllActivities;
