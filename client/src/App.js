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
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={["/login", "/login"]}>
            <Login />
          </Route>
          <Route exact path={["/signup", "/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/home", "/home"]}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
