import React, { useEffect, useState } from "react";
import "./ActivitiesStyle.css";
import adultingStatus from "../../assets/adultingStatus.png";
import axios from 'axios';

export default function Activities() {
  const categories = ["Health",
    "Finances",
    "Chores",
    "Automobile",
    "Home Maintenance",
    "Social",
    "Organization/Paperwork",
    "Charity",
    "Fitness/personal care",
    "Digital",
    "Pet Care",
    "Self Care",
    "Work",
    "Miscellaneous",
    "Custom"];
  const [activities, setActivities] = useState([]);
  const [selected, setSelected] = useState('Choose an Category');
  const [activitySelected, setActivitySelected] = useState('Choose an Activity');
  const [filterActivity, setFilterActivity] = useState([]);
  const handleActivity = (event) => {
    const filterCategory = event.target.value;
    console.log(filterCategory);
    setSelected(filterCategory);
    setFilterActivity(activities.filter((activity) => {
      console.log(activity);
      return (activity.category.toLowerCase() === filterCategory)
    }))
  };
  // need to make this work //
 
  const getActivities = () => {
    axios.get('/api/activities').then((res) => {
      console.log(res.data);
      setActivities(res.data);
      setFilterActivity(res.data);
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/user/${"60e9d680eb86590ee05ac5d2"}/${activitySelected}`, {
      activity: "Jury duty",
      category: "Miscellaneous",
      level: 2,
      _id: "60fa01f7a7dfd34918a57170"
    }).then((reeeee) => {
      console.log(reeeee);
    })
  }
  useEffect(() => {
    getActivities();
  }, [])


  return (
    <div><h4>Start earning awards today!</h4>
      <h5>Select a category, then activity.
        <br />Enter amount of time doing activity.
        <br />Enter date.
        < br />Points will be calculated when time is entered.</h5>
      <div className="col s12 m12 l8 activityCard">
        <div className="card">
          <div className="card-image">
            <img src={adultingStatus} alt="adulting status bar"></img>
          </div>
          <p className="card-title green-text text-accent-3 center-align">What did I do today?</p>
          <div className="card-content">
            <select name="category" id="category" onChange={handleActivity} value={selected}>
              <option disabled  value="Choose an Category"> Choose a Category</option>
              {categories.map((c) => (<option key={`i - ${c}`} value={c.toLowerCase()}>{c}</option>))}
            </select>
            <select name="activities" id="activities" value={activitySelected} onChange={e => setActivitySelected(e.target.value)}>
              <option value="Choose an Activity" disabled> Choose an Activity</option>
              {filterActivity.map((c) => (<option key={`i - ${c.activity}`} value={c._id}>{c.activity}</option>))}
            </select>
            {/* <input placeholder="activity"></input> */}
            <input className="col s12 m12 l5" placeholder="time"></input>
            <div className="col s12 m12 l2"></div>
            <input className="col s12 m12 l5" type="date" id="date" name="date"></input>
            <button className="btn waves-effect waves-#69f0ae green accent-2" type="submit" name="action" onClick={handleSubmit}>Submit
              <i className="material-icons right">send</i>
            </button>

          </div>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <h5 className="center-align">I'm getting so much done!</h5>
              <div className="col s12 m12 l5 todayActivities">
                <input placeholder="category"></input>
              </div>
              <div className="col s12 m12 l5 todayActivities">
                <input placeholder="activity"></input>
              </div>
              <div className="col s12 m12 l2 todayActivities">
                <input placeholder="points"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
