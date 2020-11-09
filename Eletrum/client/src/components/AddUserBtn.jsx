import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { addUserData } from "../redux/actions/userActions";

const AddUserBtn = () => {
  const dispatch = useDispatch();
  //add user data model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setName("");
    setJob("");
    setNameError("");
    setJobError("");
    setShow(true);
  };

  //state
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [nameError, setNameError] = useState("");
  const [jobError, setJobError] = useState("");

  //user form handler
  const userFormSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = formValidate();
    if (isValid) {
      console.log(name, job);
      dispatch(addUserData({ name, job }));
      setName("");
      setJob("");
    }
  };

  //validate function
  const formValidate = () => {
    let nameError = "";
    let jobError = "";
    let isValid = true;

    if (name.trim().length === 0) {
      nameError = "Name requried";
      isValid = false;
    } else if (name.trim().length < 3) {
      nameError = "Name should be atleast 3 character";
      isValid = false;
    }

    if (job.trim().length === 0) {
      jobError = "Job title requried";
      isValid = false;
    } else if (job.trim().length < 3) {
      jobError = "Job should be atleast 3 character";
      isValid = false;
    }

    setNameError(nameError);
    setJobError(jobError);

    return isValid;
  };

  return (
    <>
      <Button variant="success" className="btn-sm m-1" onClick={handleShow}>
        Add User Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="container text-center">
            <Modal.Title>ADD USER DATA</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="ModalBody">
          <form noValidate onSubmit={userFormSubmitHandler}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="small errMsg">{nameError}</div>
            </div>
            <div className="form-group">
              <label>Job</label>
              <input
                type="Job"
                className="form-control"
                placeholder="Enter Job Name"
                required
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
              <div className="small errMsg">{jobError}</div>
            </div>
            <hr />
            <div className="text-center">
              <Button type="submit" variant="info">
                Add Data
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddUserBtn;
