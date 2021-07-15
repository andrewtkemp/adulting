import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" pages={Login} />
          <Route exact path="/signup" pages={Signup} />
          <Route exact path="/Home" pages={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
