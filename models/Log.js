const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Activities = require('./Activities');

const logSchema = new Schema({
    log: [{
        activity: { "type": mongoose.Schema.Types.ObjectId, "ref": "Activities" },
        duration: {type: Number,required: true},   
        date: { type: Date, required: true }, 
    }], 
    userId: {"type": mongoose.Schema.Types.ObjectId, "ref": "User" }
});


const Log = mongoose.model("Log", logSchema);

module.exports = Log;
