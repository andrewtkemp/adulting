import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import "./AllActivitiesStyle.css";
import axios from "axios";
import dayjs from "dayjs";

function AllActivities() {
  const [activities, setActivities] = useState([]);
  const getAllActivities = () => {
    axios.get("/api/activities").then((activities) => {
      console.log(activities);
      setActivities(activities.data);
    });
  };

  const getDate = () => {
    return dayjs().format("MM/DD/YYYY");
  };

  const renderAllActivities = () => {
    return activities.map((activity) => {
      return (
        <div className="row">
          <div className="col s12 m2 l2 allActivities">{getDate(activity.date)}</div>
          <div className="col s12 m3 l3 allActivities">{activity.category}</div>
          <div className="col s12 m4 l4 allActivities">{activity.activity}</div>
          <div className="col s12 m2 l2 allActivities">{activity.points}</div>
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
        <div className="col s12 m2 l2 hide-on-small-only rowHeading">
          <input placeholder="DATE"></input>
        </div>
        <div className="col s12 m3 l3 hide-on-small-only rowHeading">
          <input placeholder="CATEGORY"></input>
        </div>
        <div className="col s12 m4 l4 hide-on-small-only rowHeading">
          <input placeholder="ACTIVITY"></input>
        </div>
        <div className="col s12 m2 l2 hide-on-small-only rowHeading">
          <input placeholder="POINTS"></input>
        </div>
      </div>
      <div className="row">{renderAllActivities()}</div>
    </div>
  );
}

export default AllActivities;
