import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/activities" component={Activities} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
