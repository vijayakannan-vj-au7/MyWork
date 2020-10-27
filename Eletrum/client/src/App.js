import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./privateRouter/PrivateRouter";

//pages
import UserLogin from "./pages/userLogin";
import UserDashboard from "./pages/userDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <PrivateRoute exact path="/userdashboard" component={UserDashboard} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
