const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitiesSchema = new Schema({
  category: {type: String,required: true},   
  activity: { type: String, required: true },
  points: {type: Number,required: true},
  date: { type: Date, default: Date.now }
});

const Activities = mongoose.model("Activities", activitiesSchema);

module.exports = Activities;
