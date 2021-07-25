var passport = require('passport');
var Strategy = require('passport-local');
const User = require('../models/User');

module.exports = function () {

    
    // The local strategy requires a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(
        "local",
        new Strategy((username, password, cb) => {
          console.log("start", username, password, cb);
          User.findOne({ username: username }, async (err, user) => {
            console.log(user);
            if (!user) {
              return cb(null, false);
            }
            console.log("start", password, user);
            const validPassword = await user.checkPassword(password, user.password);
            console.log(validPassword);
            if (validPassword) {
              console.log('valid', user, password)
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          });
        })
    ) 

    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser(function (user, cb) {
        console.log('de', user, cb)
        process.nextTick(function () {
            cb(null, { id: user._id, username: user.username });
        });
    });

    passport.deserializeUser(function (user, cb) {
        console.log('de', user, cb)
        return cb(null, { id: user._id, username: user.username });
    });

}