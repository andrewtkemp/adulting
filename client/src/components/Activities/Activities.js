import React, { useEffect, useState, useRef } from "react";
import "./ActivitiesStyle.css";
import adultingStatus from "../../assets/adultingstatus.png";
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
  const time = useRef(null);
  const date = useRef(null);
  const [activities, setActivities] = useState([]);
  const [log, setLog] = useState([]);
  const [selected, setSelected] = useState("Choose an Category");
  const [activitySelected, setActivitySelected] = useState("Choose an Activity");
  const [filterActivity, setFilterActivity] = useState([]);
  const user = JSON.parse(localStorage.user);
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
    axios.get("api/activities").then((res) => {
      console.log(res.data);
      setActivities(res.data);
      setFilterActivity(res.data);
    });
  };
  const createLog = () => {
    axios.post(`api/log/`, { userId: user._id }).then((res) => {
      getLog();
    });
  };
  const getLog = () => {
    axios
      .get(`api/log/${user._id}`)
      .then((res) => {
        if (!res.data.log) {
          createLog();
        }
        console.log(...res.data.log);
        setLog([...log, ...res.data.log]);
        console.log(log);
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(time.current.value);
    console.log(date.current.value);
    axios
      .put(`/api/log/${user._id}/`, {
        id: activitySelected,
        duration: parseInt(time.current.value),
        date: date.current.value,
      })
      .then((reeeee) => {
        console.log(reeeee);
      });
  };
  useEffect(() => {
    getActivities();
    getLog();
  }, []);
 
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
            <input className="col s12 m12 l5" ref={time} placeholder="time (in minutes)"></input>
            <div className="col s12 m12 l2"></div>
            <input className="col s12 m12 l5" ref={date} type="date" id="date" name="date"></input>
            <button className="btn waves-effect waves-#69f0ae green accent-2" type="submit" name="action" onClick={handleSubmit}>
              Submit
              <i className="material-icons right">send</i>
            </button>
            <br />
            <div className="row">
              <h5 className="center-align">I'm getting so much done today!</h5>
              <div className="col s12 m9 l9 todayActivities">
                <input placeholder="ACTIVITY"></input>
              </div>
              <div className="col s12 m3 l3 todayActivities">
                <input placeholder="POINTS"></input>
              </div>
              <div className="row">
                {log.length !== 0 ? (
                  log.map((activity) => (
                    <>
                      <p>{activity.activity.activity}</p> <p>{activity.duration * activity.activity.level}</p>
                    </>
                  ))
                ) : (
                  <p>No Activities found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
