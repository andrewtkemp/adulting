import React from "react";
import "./ActivitiesStyle.css";
import adultingStatus from "../../assets/adultingStatus.png";

function Activities() {
  const activities = [
    {
      value: "health",
      category: "Health",
      activity: "Took vitamins/ supplements ",
      level: 1,
    },
    {
      value: "health",
      category: "Health",
      activity: "Went to the dentist",
      level: 2,
    },
    {
      value: "health",
      category: "Health",
      activity: "Went to the doctor",
      level: 2,
    },
    {
      value: "health",
      category: "Health",
      activity: "Filled my own prescriptions",
      level: 2,
    },
    {
      value: "health",
      category: "Health",
      activity: "Floss",
      level: 1,
    },
    {
      value: "finances",
      category: "Finances",
      activity: "Create a savings plan/401K",
      level: 3,
    },
    {
      value: "finances",
      category: "Finances",
      activity: "Create a debt repayment plan",
      level: 3,
    },
    {
      value: "finances",
      category: "Finances",
      activity: "Automate savings",
      level: 3,
    },
    {
      value: "finances",
      category: "Finances",
      activity: "Create a budget",
      level: 2,
    },
    {
      value: "finances",
      category: "Finances",
      activity: "Credit check",
      level: 2,
    },
    {
      value: "finances",
      category: "Finances",
      activity: "Pay bills",
      level: 1,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Wash sheets/bedding",
      level: 2,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Do laundry",
      level: 2,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Empty bags/wallets/pockets",
      level: 1,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Fold and put away laundry",
      level: 2,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Purge closet",
      level: 2,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Clean house (dust, sweep, mop, windows, kitchen, bathroom, office, ect.)",
      level: 2,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Spring/Deep clean house",
      level: 3,
    },
    {
      value: "chores",
      category: "Chores",
      activity: "Make the bed",
      level: 1,
    },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Balance and rotate tires",
      level: 2,
    },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Buy new tires",
      level: 2,
    },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Oil change",
      level: 2,
    },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Inspection and registration",
      level: 2,
    },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Replace filters",
      level: 2,
    },
    { value: "automobile", category: "Automobile", activity: "Tune up", level: 2 },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Wash the car",
      level: 2,
    },
    {
      value: "automobile",
      category: "Automobile",
      activity: "Vacuum the car",
      level: 2,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Mow the lawn",
      level: 2,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Trim bushes/trees",
      level: 3,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Weed eat",
      level: 2,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Clean gutters",
      level: 3,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Water the yard",
      level: 2,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Replace AC filters",
      level: 2,
    },
    {
      value: "home",
      category: "Home Maintenance",
      activity: "Fix something that broke",
      level: 2,
    },
    {
      value: "social",
      category: "Social",
      activity: "Check in on an old relationship",
      level: 2,
    },
    {
      value: "social",
      category: "Social",
      activity: "Do something kind for a friend",
      level: 2,
    },
    {
      value: "social",
      category: "Social",
      activity: "Express appreciation for someone close to you",
      level: 1,
    },
    {
      value: "social",
      category: "Social",
      activity: "Coffee or dinner date/make time for a someone",
      level: 2,
    },
    {
      value: "social",
      category: "Social",
      activity: "Spend time with parents/siblings/family members",
      level: 2,
    },
    {
      value: "social",
      category: "Social",
      activity: "Surprise someone",
      level: 2,
    },
    {
      value: "social",
      category: "Social",
      activity: "Host a dinner party",
      level: 3,
    },
    {
      value: "social",
      category: "Social",
      activity: "Babysit for someone",
      level: 3,
    },
    {
      value: "social",
      category: "Social",
      activity: "Commit to an invitation",
      level: 1,
    },
    {
      value: "social",
      category: "Social",
      activity: "Respond to texts within 24 hours",
      level: 1,
    },
    {
      value: "organization/paperwork",
      category: "Organization/Paperwork",
      activity: "Locate and securely store essential documents",
      level: 2,
    },
    {
      value: "organization/paperwork",
      category: "Organization/Paperwork",
      activity: "Set up and use filing system for receipts and other important papers",
      level: 3,
    },
    {
      value: "organization/paperwork",
      category: "Organization/Paperwork",
      activity: "Dump expired stuff",
      level: 1,
    },
    {
      value: "charity",
      category: "Charity",
      activity: "Donate money",
      level: 2,
    },
    {
      value: "charity",
      category: "Charity",
      activity: "Pay it forward",
      level: 2,
    },
    {
      value: "charity",
      category: "Charity",
      activity: "Volunteer",
      level: 3,
    },
    {
      value: "charity",
      category: "Charity",
      activity: "Give to homeless",
      level: 2,
    },
    {
      value: "charity",
      category: "Charity",
      activity: "Help a friend in need",
      level: 2,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Schedule a haircut",
      level: 1,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Meal planning",
      level: 2,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Make a grocery list",
      level: 1,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Clean your jewelry",
      level: 1,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Buy your own clothes",
      level: 2,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Workout",
      level: 3,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Try new wellness trend",
      level: 2,
    },
    {
      value: "fitness",
      category: "Fitness/personal care",
      activity: "Get up when the alarm goes off, don't hit the snooze button",
      level: 1,
    },
    {
      value: "digital",
      category: "Digital",
      activity: "Answer and clear out email",
      level: 2,
    },
    {
      value: "digital",
      category: "Digital",
      activity: "Secure and update user names and passwords",
      level: 2,
    },
    {
      value: "digital",
      category: "Digital",
      activity: "Set up auto backup on computer",
      level: 2,
    },
    {
      value: "digital",
      category: "Digital",
      activity: "Digital clutter/dump and store",
      level: 2,
    },
    {
      value: "digital",
      category: "Digital",
      activity: "Organize digital planner",
      level: 2,
    },
    {
      value: "digital",
      category: "Digital",
      activity: "Clean up social media",
      level: 2,
    },
    {
      value: "pet",
      category: "Pet Care",
      activity: "Take your pet to the vet",
      level: 2,
    },
    {
      value: "pet",
      category: "Pet Care",
      activity: "Spay/neuter your pet",
      level: 3,
    },
    {
      value: "pet",
      category: "Pet Care",
      activity: "Clean up after your pet",
      level: 1,
    },
    {
      value: "pet",
      category: "Self Care",
      activity: "Express gratitude",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Practice mindfulness",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Dance it out",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Be bold",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Try new wellness trend",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Write a reflective letter to yourself",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Journal",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Meditate/pray",
      level: 2,
    },
    {
      value: "self",
      category: "Self Care",
      activity: "Set intentions for the month",
      level: 2,
    },
    {
      value: "work",
      category: "Work",
      activity: "Network with one new person",
      level: 3,
    },
    {
      value: "work",
      category: "Work",
      activity: "Ask for a raise",
      level: 2,
    },
    {
      value: "work",
      category: "Work",
      activity: "Respond to email",
      level: 1,
    },
    {
      value: "miscellaneous",
      category: "Miscellaneous",
      activity: "Spend time on a customer service/tech support call",
      level: 3,
    },
    {
      value: "miscellaneous",
      category: "Miscellaneous",
      activity: "Return a library book",
      level: 1,
    },
    {
      value: "miscellaneous",
      category: "Miscellaneous",
      activity: "Jury duty",
      level: 2,
    },
  ];
  let filterActivity = [];
  const handleActivity = (category) => {
    const filterCategory = category.target.value;
    filterActivity = activities.filter((activity) => activity.value === filterCategory);
  };
  // need to make this work //
  const renderActivity = (activity, index) => {
    console.log("index:", index);
    return <option value="" key=""></option>;
  };

  console.log("HELLO FROM ACTIVITIES!");
  return (
    <div><h5>Enter your activities for today by selecting a category, then an activity.  Your points will be automatically calculated when you enter the amount of time you spent doing your adult acticity. Then enter the date to begin earning awards today!</h5>
    <div className="col s12 m12 l8 offset-s6 activityCard">
      <div className="card">
        <div className="card-image">
          <img src={adultingStatus} alt="adulting status bar"></img>
          < br/>
          < br/>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <p className="card-title green-text text-accent-3 center-align">What did I do today?</p>.
        <div className="card-content">
          <select name="category" id="category" onChange={handleActivity}>
            <option value="" disabled selected>
              choose a category:
            </option>
            <option value="automobile">automobile</option>
            <i classNameName="fas fa-car"></i>
            <option value="charity">charity</option>
            <i class="fas fa-hand-holding-heart"></i>
            <option value="chores">chores</option>
            <i class="fas fa-sink"></i>
            <option value="digital">digital</option>
            <i class="fas fa-desktop"></i>
            <option value="finances">finances</option>
            <i class="fas fa-dollar-sign"></i>
            <option value="fitness">fitness/personal care</option>
            <i class="fas fa-heartbeat"></i>
            <option value="health">health</option>
            <i class="fas fa-file-medical-alt"></i>
            <option value="home">home maintenance</option>
            <i class="fas fa-home"></i>
            <option value="miscellaneous">miscellaneous</option>
            <i class="fa-solid fa-globe"></i>
            <option value="organization/paperwork">organizaiton/paperwork</option>
            <i class="fas fa-folder"></i>
            <option value="personal">personal care</option>
            <i class="fas fa-user-check"></i>
            <option value="pet">pet care</option>
            <i class="fas fa-paw"></i>
            <option value="self">self care</option>
            <i class="fas fa-praying-hands"></i>
            <option value="social">social</option>
            <i class="fas fa-comment-alt"></i>
            <option value="work">work</option>
            <i class="fas fa-briefcase"></i>
          </select>
          <label>Category</label>
          <select>{filterActivity.map(renderActivity)}</select>

          <input placeholder="activity"></input>
          <input className="col s12 m12 l5" placeholder="time"></input>
          <div className="col s12 m12 l2"></div>
          <input className="col s12 m12 l5" type="date" id="date" name="date"></input>
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
    </div>
  );
}

export default Activities;
