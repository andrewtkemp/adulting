const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LocalStrategy = require("passport-local");
const bcrypt = require('bcrypt');

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

UserSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})

UserSchema.methods.checkPassword = function(password, password2) {
  return bcrypt.compare(password, password2).then(function(result) {
    return result
  });
}

const User = mongoose.model("User", UserSchema);



module.exports = User;