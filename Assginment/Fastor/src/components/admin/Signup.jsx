import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import logo from "../../images/fastorlogo.png";
import { signupFuction } from "../../redux/actions/adminAction";

//
const Signup = () => {
  //
  const dispatch = useDispatch();
  //model state
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpShow = () => setShowSignUp(true);
  const handleSignUpClose = () => setShowSignUp(false);
  //form state
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  //signup form handler
  const signFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(signupFuction({ role, name, email, bio, password }));
    handleSignUpClose();
  };
  //
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
                  style={{ width: "50px" }}
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
              <label>Role</label> &ensp;
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="vendor"
                  onChange={(e) => setRole(e.target.value)}
                />
                <label className="form-check-label">Vendor</label>
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
                <label>Bio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter bio"
                  required
                  onChange={(e) => setBio(e.target.value)}
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
    </>
  );
};

export default Signup;
