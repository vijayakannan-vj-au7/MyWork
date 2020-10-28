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
  const handleShow = () => setShow(true);

  //editData helper
  const editDataHelper = (e) => {
    const id = props.id;
    dispatch(editData({ id }));
    handleShow();
  };
  //user form handler
  const userFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editUserData({ email, firstname, lastname }));
    handleClose();
  };

  return (
    <>
      <Button variant="warning" className="btn-sm" onClick={editDataHelper}>
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
                value={email}
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
                value={firstname}
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
                value={lastname}
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
