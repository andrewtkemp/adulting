import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import "./AllActivities.css";
import axios from "axios";

function AllActivities() {
  const [activities, setActivities] = useState([]);
  const getAllActivities = () => {
    axios.get("/api/activities").then((activities) => {
      console.log(activities);
      setActivities(activities.data);
    });
  };
  const renderAllActivities = () => {
    return activities.map((activity) => {
      return (
        <div className="row">
          <div className="col s12 m12 l1 allActivities">{activity.date}</div>
          <div className="col s12 m12 l4 allActivities">{activity.category}</div>
          <div className="col s12 m12 l4 allActivities">{activity.activity}</div>
          <div className="col s12 m12 l2 allActivities">{activity.points}</div>
        </div>
      );
    });
  };
  useEffect(() => {
    getAllActivities();
  }, []);
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
        <div className="col s12 m12 l1 rowHeading">
          <input placeholder="Date"></input>
        </div>
        <div className="col s12 m12 l4 rowHeading">
          <input placeholder="Category"></input>
        </div>
        <div className="col s12 m12 l4 rowHeading">
          <input placeholder="Activity"></input>
        </div>
        <div className="col s12 m12 l2 rowHeading">
          <input placeholder="Points Earned"></input>
        </div>
      </div>
      <div className="row">{renderAllActivities()}</div>
    </div>
  );
}

export default AllActivities;