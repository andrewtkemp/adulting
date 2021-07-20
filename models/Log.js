const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    activity: { type: Schema.type.ObjectId, ref: 'Activities'},
    duration: {type: Number,required: true},   
    Date: { type: Date, required: true },  
});


const Log = mongoose.model("Log", logSchema);

module.exports = Log;
