import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import logo from "../../images/head-logo-1.png";
import { loginFunction } from "../../redux/actions/authAction";
import { forgotPassword } from "../../redux/actions/userAction";
import { postOtp } from "../../redux/actions/userAction";
import { tokenResend } from "../../redux/actions/userAction";

//
const LoginBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //signin model
  const [showSignIn, setShowSignIn] = useState(false);
  const handleSignInShow = () => setShowSignIn(true);
  const handleSignInClose = () => setShowSignIn(false);

  //forgot password model
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleForgotPasswordShow = () => setShowForgotPassword(true);
  const handleForgotPasswordClose = () => setShowForgotPassword(false);

  //post top model
  const [showPostOtp, setShowPostOtp] = useState(false);
  const handlePostOtpShow = () => setShowPostOtp(true);
  const handlePostOtpClose = () => setShowPostOtp(false);

  //resend token model
  const [showTokenResend, setShowTokenResend] = useState(false);
  const handleTokenResendShow = () => setShowTokenResend(true);
  const handleTokenResendClose = () => setShowTokenResend(false);

  //form
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  //login form handler
  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginFunction({ email, password, role }, history));
    handleSignInClose();
  };

  //forgot password from handler
  const fpFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ email, role }));
    handleForgotPasswordClose();
  };

  //post otp from handler
  const postFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postOtp({ email, otp, newPassword, confirmNewPassword, role }));
    handlePostOtpClose();
  };

  //token resend from handler
  const tokenFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(tokenResend({ email, role }));
    handleTokenResendClose();
  };

  //forgot password function
  const thisForPass = () => {
    handleSignInClose();
    handleForgotPasswordShow();
  };

  //post otp function
  const thisForPost = () => {
    handleSignInClose();
    handlePostOtpShow();
  };

  //token resend function
  const thisForToken = () => {
    handleSignInClose();
    handleTokenResendShow();
  };

  return (
    <>
      <Link onClick={handleSignInShow} className="main-btn">
        Login
      </Link>
      {/* ===============================Login-in-model==================================== */}
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
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col align-self-center">
                  <span className="linkspan" onClick={() => thisForPass()}>
                    Forgot Password ?
                  </span>
                </div>
                <div className="col">
                  <button type="submit" className="model-main-btn">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
          <hr />
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col align-self-center">
                <span className="linkspan" onClick={() => thisForPost()}>
                  Post OTP Here
                </span>
              </div>
              <div className="col align-self-center">
                <span className="linkspan" onClick={() => thisForToken()}>
                  Get Activation Link
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* ===============================forgot-password-model==============================*/}
      <Modal show={showForgotPassword} onHide={handleForgotPasswordShow}>
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
                <Modal.Title className="align-self-center">
                  Forgot Password
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleForgotPasswordClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={fpFormSubmitHandler}>
            <label>Role</label> &ensp;
            <div className="form-check form-check-inline">
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
            <div className="text-center">
              <button type="submit" className="model-main-btn">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* ===============================post-otp-model================================*/}
      <Modal show={showPostOtp} onHide={handlePostOtpShow}>
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
                <Modal.Title className="align-self-center">
                  Post OTP
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handlePostOtpClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={postFormSubmitHandler}>
            <label>Role</label> &ensp;
            <div className="form-check form-check-inline">
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
                id="InputEmail1"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>OTP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter six digit OTP"
                required
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                required
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Conform Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm new password"
                required
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="model-main-btn">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* ===============================resend-token-model==============================*/}
      <Modal show={showTokenResend} onHide={handleTokenResendShow}>
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
                <Modal.Title className="align-self-center">
                  Resend Account Activation Link
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleTokenResendClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={tokenFormSubmitHandler}>
            <label>Role</label> &ensp;
            <div className="form-check form-check-inline">
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
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="model-main-btn">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginBtn;
