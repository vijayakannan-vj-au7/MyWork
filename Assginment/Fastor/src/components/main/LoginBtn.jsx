import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { loginFunction } from "../../redux/actions/authAction";

//image
import logo from "../../images/fastorlogo.png";

//
const LoginBtn = () => {
  //
  const dispatch = useDispatch();
  //
  const history = useHistory();
  //model state
  const [showSignIn, setShowSignIn] = useState(false);
  const handleSignInShow = () => setShowSignIn(true);
  const handleSignInClose = () => setShowSignIn(false);
  //form state
  const [pdata, setPdata] = useState();
  const [odata, setOdata] = useState();
  //login form handler
  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    const dial_code = +91;
    const phone = parseInt(pdata);
    const otp = parseInt(odata);
    dispatch(loginFunction({ phone, otp, dial_code }, history));
    handleSignInClose();
  };
  //
  return (
    <>
      <Link onClick={handleSignInShow} className="main-btn">
        Login
      </Link>
      {/* ===============Login-in-model=============== */}
      <Modal show={showSignIn} onHide={handleSignInShow}>
        <Modal.Header>
          <div className="container">
            <div className="row">
              {/* ============================== */}
              <div className="col-3">
                <img
                  className="image-fulid justify-content-start align-items-center"
                  style={{ width: "50px" }}
                  src={logo}
                  alt="fastor-logo"
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
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Contact Number"
                required
                onChange={(e) => setPdata(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter OTP"
                required
                onChange={(e) => setOdata(e.target.value)}
              />
            </div>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col">
                  <button type="submit" className="model-main-btn">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginBtn;
