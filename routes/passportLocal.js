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
          User.findOne({ username: username }, (err, user) => {
            if (!user.length) {
              return cb(null, false);
            }
            const validPassword = user[0].checkPassword(password, user[0].password);
            if (validPassword) {
              console.log(user, password)
              return cb(null, { id: user[0]._id , username: user[0].username });
            } else {
              return cb(null, false);
            }
          });
        })
    )
    // db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], function(err, row) {
    //   if (err) { return cb(err); }
    //   if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    //   crypto.pbkdf2(password, row.salt, 10000, 32, 'sha256', function(err, hashedPassword) {
    //     if (err) { return cb(err); }
    //     if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
    //       return cb(null, false, { message: 'Incorrect username or password.' });
    //     }

    //     var user = {
    //       id: row.id.toString(),
    //       username: row.username,
    //       displayName: row.name
    //     };
    //     return cb(null, user);
    //   });
    // });
    //   }));


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