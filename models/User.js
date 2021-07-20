const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LocalStrategy = require("passport-local");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  activities:
    [
        {
        category: {
            type: String
        },
        name: {
            type: String
        },
        time: {
            type: Number
        },
        points: {
            type: Number
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
    ],
});

UserSchema.methods.checkPassword = function(password1, password2) {
  console.log(password1, password2)
  return true
};

const User = mongoose.model("User", UserSchema);



module.exports = User;