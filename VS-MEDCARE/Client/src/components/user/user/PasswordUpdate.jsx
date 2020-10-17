import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { userUpdatePassword } from "../../../redux/actions/userAction";

const PasswordUpdateBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const handlePasswordUpdateShow = () => setShowPasswordUpdate(true);
  const handlePasswordUpdateClose = () => setShowPasswordUpdate(false);
  //form
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userUpdatePassword({
        oldPassword,
        newPassword,
        confirmNewPassword,
      })
    );
    handlePasswordUpdateClose();
  };

  return (
    <>
      <Link onClick={handlePasswordUpdateShow} className="main-btn">
        Update Password
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showPasswordUpdate} onHide={handlePasswordUpdateShow}>
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
                  Password Update
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handlePasswordUpdateClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label>Old Password</label>
              <input
                type="text"
                className="form-control"
                id="InputPassword"
                placeholder="Enter password"
                required
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                id="InputNewPassword"
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
                id="InputNewPassword"
                placeholder="Confirm new password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
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

export default PasswordUpdateBtn;
