const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const expressSession = require('express-session');
const passport = require('passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adulting", {useFindAndModify: false, useUnifiedTopology: true });

app.use(expressSession({
  secret: "this is my super secrety-secret",
  resave: false,
  saveUninitialized: false
}));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view

//app.use(require('./routes'));
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/passportLocal.js')();

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
