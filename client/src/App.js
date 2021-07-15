import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./pages/Activities";
import Login from "./pages/login";
import Signup from "./pages/Signup"


function App() {
  return (
    <Router>
      <div className="container">
        
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
            
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
