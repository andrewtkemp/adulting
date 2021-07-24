const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adulting");

const activitiesSeed = [
  {
    category: "Health",
    activity: "Took vitamins/ supplements ",
    level: 1
  },
  {
    category: "Health",
    activity: "Went to the dentist",
    level: 2
  },
  {
    category: "Health",
    activity: "Went to the doctor",
    level: 2
  },
  {
    category: "Health",
    activity: "Filled my own prescriptions",
    level: 2
  },
  {
    category: "Health",
    activity: "Floss",
    level: 1
  },
  {
    category: "Finances",
    activity: "Create a savings plan/401K",
    level: 3
  },
  {
    category: "Finances",
    activity: "Create a debt repayment plan",
    level: 3
  },
  {
    category: "Finances",
    activity: "Automate savings",
    level: 3
  },
  {
    category: "Finances",
    activity: "Create a budget",
    level: 2
  },
  {
    category: "Finances",
    activity: "Credit check",
    level: 2
  },
  {
    category: "Finances",
    activity: "Pay bills",
    level: 1
  },
  {
    category: "Chores",
    activity: "Wash sheets/bedding",
    level: 2
  },
  {
    category: "Chores",
    activity: "Do laundry",
    level: 2
  },
  {
    category: "Chores",
    activity: "Empty bags/wallets/pockets",
    level: 1
  },
  {
    category: "Chores",
    activity: "Fold and put away laundry",
    level: 2
  },
  {
    category: "Chores",
    activity: "Purge closet",
    level: 2
  },
  {
    category: "Chores",
    activity: "Clean house (dust, sweep, mop, windows, kitchen, bathroom, office, ect.)",
    level: 2
  },
  {
    category: "Chores",
    activity: "Spring/Deep clean house",
    level: 3
  },
  {
    category: "Chores",
    activity: "Make the bed",
    level: 1
  },
  {
    category: "Automobile",
    activity: "Balance and rotate tires",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Buy new tires",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Oil change",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Inspection and registration",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Replace filters",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Tune up",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Wash the car",
    level: 2
  },
  {
    category: "Automobile",
    activity: "Vacuum the car",
    level: 2
  },
  {
    category: "Home Maintenance",
    activity: "Mow the lawn",
    level: 2
  },
  {
    category: "Home Maintenance",
    activity: "Trim bushes/trees",
    level: 3
  },
  {
    category: "Home Maintenance",
    activity: "Weed eat",
    level: 2
  },
  {
    category: "Home Maintenance",
    activity: "Clean gutters",
    level: 3
  },
  {
    category: "Home Maintenance",
    activity: "Water the yard",
    level: 2
  },
  {
    category: "Home Maintenance",
    activity: "Replace AC filters",
    level: 2
  },
  {
    category: "Home Maintenance",
    activity: "Fix something that broke",
    level: 2
  },
  {
    category: "Social",
    activity: "Check in on an old relationship",
    level: 2
  },
  {
    category: "Social",
    activity: "Do something kind for a friend",
    level: 2
  },
  {
    category: "Social",
    activity: "Express appreciation for someone close to you",
    level: 1
  },
  {
    category: "Social",
    activity: "Coffee or dinner date/make time for a someone",
    level: 2
  },
  {
    category: "Social",
    activity: "Spend time with parents/siblings/family members",
    level: 2
  },
  {
    category: "Social",
    activity: "Surprise someone",
    level: 2
  },
  {
    category: "Social",
    activity: "Host a dinner party",
    level: 3
  },
  {
    category: "Social",
    activity: "Babysit for someone",
    level: 3
  },
  {
    category: "Social",
    activity: "Commit to an invitation",
    level: 1
  },
  {
    category: "Social",
    activity: "Respond to texts within 24 hours",
    level: 1
  },
  {
    category: "Organization/Paperwork",
    activity: "Locate and securely store essential documents",
    level: 2
  },
  {
    category: "Organization/Paperwork",
    activity: "Set up and use filing system for receipts and other important papers",
    level: 3
  },
  {
    category: "Organization/Paperwork",
    activity: "Dump expired stuff",
    level: 1
  },
  {
    category: "Charity",
    activity: "Donate money",
    level: 2
  },
  {
    category: "Charity",
    activity: "Pay it forward",
    level: 2
  },
  {
    category: "Charity",
    activity: "Volunteer",
    level: 3
  },
  {
    category: "Charity",
    activity: "Give to homeless",
    level: 2
  },
  {
    category: "Charity",
    activity: "Help a friend in need",
    level: 2
  },
  {
    category: "Fitness/personal care",
    activity: "Schedule a haircut",
    level: 1
  },
  {
    category: "Fitness/personal care",
    activity: "Meal planning",
    level: 2
  },
  {
    category: "Fitness/personal care",
    activity: "Make a grocery list",
    level: 1
  },
  {
    category: "Fitness/personal care",
    activity: "Clean your jewelry",
    level: 1
  },
  {
    category: "Fitness/personal care",
    activity: "Buy your own clothes",
    level: 2
  },
  {
    category: "Fitness/personal care",
    activity: "Workout",
    level: 3
  },
  {
    category: "Fitness/personal care",
    activity: "Try new wellness trend",
    level: 2
  }, 
  {
    category: "Fitness/personal care",
    activity: "Get up when the alarm goes off, don't hit the snooze button",
    level: 1
  },
  {
    category: "Digital",
    activity: "Answer and clear out email",
    level: 2
  },
  {
    category: "Digital",
    activity: "Secure and update user names and passwords",
    level: 2
  },
  {
    category: "Digital",
    activity: "Set up auto backup on computer",
    level: 2
  },
  {
    category: "Digital",
    activity: "Digital clutter/dump and store",
    level: 2
  },
  {
    category: "Digital",
    activity: "Organize digital planner",
    level: 2
  },
  {
    category: "Digital",
    activity: "Clean up social media",
    level: 2
  },
  {
    category: "Pet Care",
    activity: "Take your pet to the vet",
    level: 2
  },
  {
    category: "Pet Care",
    activity: "Spay/neuter your pet",
    level: 3
  },
  {
    category: "Pet Care",
    activity: "Clean up after your pet",
    level: 1
  },
  {
    category: "Self Care",
    activity: "Express gratitude",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Practice mindfulness",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Dance it out",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Be bold",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Try new wellness trend",
    level: 2
  }, 
  {
    category: "Self Care",
    activity: "Write a reflective letter to yourself",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Journal",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Meditate/pray",
    level: 2
  },
  {
    category: "Self Care",
    activity: "Set intentions for the month",
    level: 2
  },
  {
    category: "Work",
    activity: "Network with one new person",
    level: 3
  },
  {
    category: "Work",
    activity: "Ask for a raise",
    level: 2
  },
  {
    category: "Work",
    activity: "Respond to email",
    level: 1
  },
  {
    category: "Miscellaneous",
    activity: "Spend time on a customer service/tech support call",
    level: 3
  },
  {
    category: "Miscellaneous",
    activity: "Return a library book",
    level: 1
  },
  {
    category: "Miscellaneous",
    activity: "Jury duty",
    level: 2
  },
  {
    category: "Custom",
    activity: "",
    level: 2
  }, 
];

// db.Activities
//   .remove({})
//   .then(() => db.Activities.collection.insertMany(activitiesSeed))
//   .then((data) => {
//     console.log(data.result.n + " activities have been inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

db.Activities.remove({})
  .then(() => db.Activities.collection.insertMany(activitiesSeed))
  .then((data) => {
    db.User.create({
      "email": "andrew3",
      "password": "andrew3",
      "name": "AndrewKemp",
      "username": "andrew3",
      "activities": data.ops,
    }).then(
      (dbUser) => {console.log(dbUser)}
    )
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });