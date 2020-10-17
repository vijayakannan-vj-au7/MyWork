import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//private file
import PrivateRoute from "./privateRoute/PrivateRoute";

//components
import Home from "./pages/Home";
import Super from "./pages/Super";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Doctor from "./pages/Doctor";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctor" component={Doctor} />
          <PrivateRoute exact path="/superadmin" component={Super} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
