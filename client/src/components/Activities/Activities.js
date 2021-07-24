import React, { useEffect, useState, useRef } from "react";
import "./ActivitiesStyle.css";
import adultingStatus from "../../assets/adultingStatus.png";
import axios from "axios";


export default function Activities() {
  const categories = [
    "Automobile",
    "Charity",
    "Chores",
    "Digital",
    "Finances",
    "Fitness/personal care",
    "Health",
    "Home Maintenance",
    "Miscellaneous",
    "Organization/Paperwork",
    "Pet Care",
    "Self Care",
    "Social",
    "Work",
  ];
  const time = useRef(null)
  const [activities, setActivities] = useState([]);
  const [selected, setSelected] = useState("Choose an Category");
  const [activitySelected, setActivitySelected] = useState("Choose an Activity");
  const [filterActivity, setFilterActivity] = useState([]);
  const handleActivity = (event) => {
    const filterCategory = event.target.value;
    console.log(filterCategory);
    setSelected(filterCategory);
    setFilterActivity(
      activities.filter((activity) => {
        console.log(activity);
        return activity.category.toLowerCase() === filterCategory;
      })
    );
  };

  const getActivities = () => {
    axios.get("/api/activities").then((res) => {
      console.log(res.data);
      setActivities(res.data);
      setFilterActivity(res.data);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user= JSON.parse(localStorage.user)
    console.log(user)
    console.log(activitySelected)
    axios
      .put(`/api/user/${"60f8d284c3cbbea44113f982"}/${activitySelected}`, {
        activity: "Jury duty",
        category: "Miscellaneous",
        level: 2,
        _id: "60fa01f7a7dfd34918a57170",
      })
      .then((reeeee) => {
        console.log(reeeee);
      });
  };
  useEffect(() => {
    getActivities();
  }, []);

  // const renderPoints = ({activity.time}, {activity.level}) => {
  //   return {activity.time} * {activity.level};
  // };
  const renderTodayActivities = () => {
    function sameDay(d1, d2) {
      return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    }

    return activities.map((activity) => {
      if (!sameDay(new Date(activity.date), new Date())) {
        return;
      }
      return (
        <div className="row">
          <div className="col s12 m9 l9 TodayActivities">{activity.activity}</div>
          <div className="col s12 m3 l3 TodayActivities">{activity.points}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h4>Start ADULTING and earn awards today!</h4>

      <div className="col s12 m12 l8 activityCard">
        <div className="card z-depth-5">
          <div className="card-image">
            <img src={adultingStatus} alt="adulting status bar"></img>
          </div>
          <p className="card-title green-text text-accent-3 center-align">What did I do today?</p>
          <p className="center-align">
            Select a category, then activity.
            <br />
            Enter amount of time (in minutes) doing activity, then enter date.
            <br />
            Points will be calculated when time is entered.
          </p>
          <div className="card-content">
            <select name="category" id="category" onChange={handleActivity} value={selected}>
              <option disabled value="Choose an Category">
                {" "}
                Choose a Category
              </option>
              {categories.map((c) => (
                <option key={`i - ${c}`} value={c.toLowerCase()}>
                  {c}
                </option>
              ))}
            </select>
            <select name="activities" id="activities" value={activitySelected} onChange={(e) => setActivitySelected(e.target.value)}>
              <option value="Choose an Activity" disabled>
                {" "}
                Choose an Activity
              </option>
              {filterActivity.map((c) => (
                <option key={`i - ${c.activity}`} value={c._id}>
                  {c.activity}
                </option>
              ))}
            </select>
            {/* <input placeholder="activity"></input> */}
            <input className="col s12 m12 l5" ref={time} placeholder="time (in minutes)"></input>
            <div className="col s12 m12 l2"></div>
            <input className="col s12 m12 l5" type="date" id="date" name="date"></input>
            <button className="btn waves-effect waves-#69f0ae green accent-2" type="submit" name="action" onClick={handleSubmit}>
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
          <br />
          <div className="row">
            <h5 className="center-align">I'm getting so much done today!</h5>
            <div className="col s12 m9 l9 todayActivities">
              <input placeholder="ACTIVITY"></input>
            </div>
            <div className="col s12 m3 l3 todayActivities">
              <input placeholder="POINTS"></input>
            </div>
            <div className="row">{renderTodayActivities()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
