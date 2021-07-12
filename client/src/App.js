import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./pages/Activities";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup"


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
         <Route exact path= "/login">
           <Login/>
         </Route>
        <Route exact path= "/signup">
          <Signup/>
        </Route>
        <Route exact path={["/", "/activities"]}>
            <Activities />
          </Route>
          <Route exact path="/activities/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
