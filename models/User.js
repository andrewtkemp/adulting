const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

  Log:
    [
     {
      completedLog: {
        type: Schema.Types.ObjectId, ref: 'Log'
      },
     }  
    ],
});

UserSchema.methods.checkPassword = function(password1, password2) {
  console.log(password1, password2)
  return true
};

const User = mongoose.model("User", UserSchema);



module.exports = User;