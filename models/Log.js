const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Activities = require('./Activities');

const logSchema = new Schema({
    //activity: [{ "type": mongoose.Schema.Types.ObjectId, "ref": "Activities" }],
    //level: [{ "type": mongoose.Schema.Types.ObjectId, "ref": "Activities" }],
    //activity: { type: String, ref: 'Activities'},
    duration: {type: Number,required: true},   
    date: { type: Date, required: true },  
});


const Log = mongoose.model("Log", logSchema);

module.exports = Log;
