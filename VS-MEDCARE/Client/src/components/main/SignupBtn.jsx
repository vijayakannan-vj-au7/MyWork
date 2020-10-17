import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import logo from "../../images/head-logo-1.png";
import { userRegister } from "../../redux/actions/userAction";
import { loginFunction } from "../../redux/actions/authAction";

//
const SignupBtn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //model
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpShow = () => setShowSignUp(true);
  const handleSignUpClose = () => setShowSignUp(false);
  //model-login
  const [showSignIn, setShowSignIn] = useState(false);
  const handleSignInShow = () => setShowSignIn(true);
  const handleSignInClose = () => setShowSignIn(false);
  //form
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  //signup form handler
  const signFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister({ name, email, contact, password }));
    handleSignUpClose();
    history.push("/");
  };
  //login form handler
  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginFunction({ email, password, role }, history));
    handleSignInClose();
  };

  const thisforlogin = () => {
    handleSignUpClose();
    handleSignInShow();
  };

  return (
    <>
      <Link onClick={handleSignUpShow} className="main-btn">
        signup
      </Link>

      {/* ==============Sign-up-model================ */}

      <Modal show={showSignUp} onHide={handleSignUpShow}>
        <Modal.Header>
          <div className="container">
            <div className="row">
              {/* ============================== */}
              <div className="col-3">
                <img
                  className="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">Sign Up</Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleSignUpClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={signFormSubmitHandler}>
            <div className="model-body-bg">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter fullname"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                <label>Contact</label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="form-control"
                  placeholder="Enter contact number"
                  required
                  onChange={(e) => setContact(e.target.value)}
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
            </div>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col align-self-center">
                  <span className="linkspan" onClick={() => thisforlogin()}>
                    already have account ?
                  </span>
                </div>
                <div className="col">
                  <button type="submit" className="model-main-btn">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={showSignIn} onHide={handleSignInShow}>
        <Modal.Header>
          <div className="container">
            <div className="row">
              {/* ============================== */}
              <div className="col-3">
                <img
                  className="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">Login</Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleSignInClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={loginFormSubmitHandler}>
            <label>Role</label> &ensp;
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="superadmin"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">SuperAdmin</label>
              &ensp;
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="admin"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">Admin</label>
              &ensp;
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="user"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">User</label>
            </div>
            <hr />
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
            <div className="text-center">
              <button type="submit" className="model-main-btn">
                Login
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupBtn;
