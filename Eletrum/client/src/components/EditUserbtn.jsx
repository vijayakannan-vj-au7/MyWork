import React, { useState } from "react";
import { useDispatch, useEffect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { editUserData } from "../redux/actions/userActions";

const EditUserbtn = () => {
  const dispatch = useDispatch();

  //edit user data model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  //user form handler
  const userFormSubmitHandler = (e) => {
    console.log(email, firstname, lastname);
    e.preventDefault();
    dispatch(editUserData({ email, firstname, lastname }));
    handleClose();
  };

  return (
    <>
      <Button variant="warning" className="btn-sm" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT USER DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalBody">
          <form onSubmit={userFormSubmitHandler}>
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
              <label>Firstname</label>
              <input
                type="firstname"
                className="form-control"
                placeholder="Enter firstname"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input
                type="lastname"
                className="form-control"
                placeholder="Enter Lastname"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button type="submit" variant="info">
                Save Data
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditUserbtn;
