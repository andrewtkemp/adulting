const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    // activity: { type: Schema.type.ObjectId, ref: 'Activities'},
    duration: {type: Number,required: true},   
    date: { type: Number, required: true },  
});


const Log = mongoose.model("Log", logSchema);

module.exports = Log;
