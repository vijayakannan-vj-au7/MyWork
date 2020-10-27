import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { addUserData } from "../redux/actions/userActions";

const AddUserBtn = () => {
  const dispatch = useDispatch();

  //add user data model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  //user form handler
  const userFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, job);
    dispatch(addUserData({ name, job }));
    //handleClose();
  };

  return (
    <>
      <Button variant="success" className="btn-sm m-1" onClick={handleShow}>
        Add User Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD USER DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalBody">
          <form onSubmit={userFormSubmitHandler}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Job</label>
              <input
                type="Job"
                className="form-control"
                placeholder="Enter Job Name"
                required
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button type="submit" variant="info">
                Add Data
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
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

export default AddUserBtn;
