const mongoose = require('mongoose');
const { Activites } = require('../models');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/adulting"
);

const activitiesSeed = [
    {
        category: "Health",
        activity: "Took vitamins/ supplements ",
        points: 2,

    },
    {
        category: "Money",
        activity: "Create a savings plan",
        points: 3,
    
    },
    {
        category: "Chores",
        activity: "clean house",
        points: 10
    },
    {
        category: "Car Maintenance",
        activity: "Changed tires",
        points: 7,
    },
    {
        category: "House Maintenance",
        activity: "Fixed something broken ",
        points: 10,
    },
    {
        category: "Work",
        activity: "Network with 1 new person",
        points: 4,
    },
    {
        category: "Social",
        activity: "Check in on an old relationship",
        points: 2,
    },
    {
        category: "Charity",
        activity: "Donate money",
        points: 4,
    },
    {
        category: "Bureaucratic/ Paperwork",
        activity: "Locate and securely store essential documents",
        points: 7,
    },
    {
        category: "Digital",
        activity: "Clean inbox",
        points: 3,
    },
    {
        category: "Self Care/ Self Improvement",
        activity: "Express gratitude",
        points: 5,
    },

];

db.Categories.deleteMany({})
  .then(() => db.Activites.collection.insertMany(activitiesSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

