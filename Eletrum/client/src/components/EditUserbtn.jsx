import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { editData, editUserData } from "../redux/actions/userActions";

const EditUserbtn = (props) => {
  const store = useSelector((store) => store.userRoot);
  const dispatch = useDispatch();

  //state
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  //error state
  const [emailError, setEmailError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  //
  useEffect(() => {
    if (store.editData.data) {
      setEmail(store.editData.data.email);
      setFirstname(store.editData.data.first_name);
      setLastname(store.editData.data.last_name);
    }
  }, [store.editData]);

  //edit user data model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEmailError("");
    setFirstnameError("");
    setLastnameError("");
    setShow(true);
  };

  //editData helper
  const editDataHelper = (e) => {
    const id = props.id;
    dispatch(editData({ id }));
    handleShow();
  };

  //user form handler
  const userFormSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = formValidate();
    if (isValid) {
      dispatch(editUserData({ email, firstname, lastname }));
    }
  };

  //validate function
  const formValidate = () => {
    let emailError = "";
    let firstnameError = "";
    let lastnameError = "";
    let isValid = true;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.trim().length === 0) {
      emailError = "Email address requried";
      isValid = false;
    } else if (!pattern.test(email)) {
      emailError = "Enter valid email address";
      isValid = false;
    }

    if (firstname.trim().length === 0) {
      firstnameError = "Firstname requried";
      isValid = false;
    } else if (firstname.trim().length < 3) {
      firstnameError = "Firstname should be atleast 3 character";
      isValid = false;
    }

    if (lastname.trim().length === 0) {
      lastnameError = "Lastname requried";
      isValid = false;
    } else if (lastname.trim().length < 2) {
      lastnameError = "lastname should be atleast 2 character";
      isValid = false;
    }

    setEmailError(emailError);
    setFirstnameError(firstnameError);
    setLastnameError(lastnameError);

    return isValid;
  };

  return (
    <>
      <i variant="warning" class="fas fa-edit" onClick={editDataHelper}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="container text-center">
            <Modal.Title>EDIT USER DATA</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="ModalBody">
          <form noValidate onSubmit={userFormSubmitHandler}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="small errMsg">{emailError}</div>
            </div>
            <div className="form-group">
              <label>Firstname</label>
              <input
                type="firstname"
                className="form-control"
                placeholder="Enter firstname"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <div className="small errMsg">{firstnameError}</div>
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input
                type="lastname"
                className="form-control"
                placeholder="Enter Lastname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <div className="small errMsg">{lastnameError}</div>
            </div>
            <hr />
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
