import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//private file
import PrivateRoute from "./privateRoute/PrivateRoute";

//components
import Home from "./pages/Home";
import User from "./pages/User";

//
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
