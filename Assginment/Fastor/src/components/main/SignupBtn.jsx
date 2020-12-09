import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { registerFuction } from "../../redux/actions/authAction";

//image
import logo from "../../images/fastorlogo.png";

//
const SignupBtn = () => {
  //
  const history = useHistory();
  //
  const dispatch = useDispatch();
  //model state
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpShow = () => setShowSignUp(true);
  const handleSignUpClose = () => setShowSignUp(false);
  //state

  const [phone, setPhone] = useState();

  //signup form handler
  const signFormSubmitHandler = (e) => {
    e.preventDefault();
    const dial_code = +91;
    dispatch(registerFuction({ phone, dial_code }));
    handleSignUpClose();
    history.push("/");
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
                  alt="fastor-logo"
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
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Contact Number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col">
                  <button type="submit" className="model-main-btn">
                    Register
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

export default SignupBtn;
