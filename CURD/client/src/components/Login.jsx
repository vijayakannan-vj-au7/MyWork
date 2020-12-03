import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
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
    //calling form validation fuction
    const isValid = formValidate();
    if (isValid) {
      //comparing the password
      if (password === "admin@123") {
        dispatch(userlogin({ email, password }, history));
      }
    }
  };

  //validate function
  const formValidate = () => {
    let isValid = true;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //checking isempty
    if (email.trim().length === 0 && password.trim().length === 0) {
      isValid = false;
      return toast.error("Enter the Login Credentials");
    }

    //email validation
    if (email.trim().length === 0) {
      isValid = false;
      return toast.error("Email address requried");
    } else if (!pattern.test(email)) {
      isValid = false;
      return toast.error("Enter valid email address");
    }

    //password validation
    if (password.trim().length === 0) {
      isValid = false;
      return toast.error("Password requried");
    } else if (password.trim().length < 6) {
      isValid = false;
      return toast.error("Minimum 6 character requried");
    }
    return isValid;
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center  ">
          <div className="shadow-lg bg-white border border-silver rounded p-5 mt-2">
            <form noValidate onSubmit={loginFormSubmitHandler}>
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
              <div className="text-center mt-2">
                <button type="submit" className="btn btn-info">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
