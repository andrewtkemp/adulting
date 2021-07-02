const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitiesSchema = new Schema({
  Category: { type: String, required: true },
  activity: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Activities = mongoose.model("Activities", activitiesSchema);

module.exports = Activites;
