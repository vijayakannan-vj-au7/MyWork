import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userlogin } from "../redux/actions/userActions";

const Loign = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //user login form handler
  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    if (password === "admin@123") {
      dispatch(userlogin({ email, password }, history));
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={loginFormSubmitHandler}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-info">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loign;
