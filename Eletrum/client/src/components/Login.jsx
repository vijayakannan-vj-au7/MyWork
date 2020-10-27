import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { userlogin } from "../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //user login form handler
  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    if (password === "admin@123") {
      dispatch(userlogin({ email, password }, history));
    } else {
      toast.error("Invaid Password");
    }
  };

  return (
    <>
      <div className="container login-container">
        <div className="row justify-content-center">
          <form onSubmit={loginFormSubmitHandler}>
            <div className="form-group mt-5">
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
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-info">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
