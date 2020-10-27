import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useSelector} from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { editData, editUserData } from "../redux/actions/userActions";

const EditUserbtn = (props) => {
  //const store = useSelector((store) => store.userRoot);
  const dispatch = useDispatch();

  //edit user data model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

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
                //value={store.editData.data.email}
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
                // value={store.editData.data.first_name}
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
                onChange={(e) => {
                  // value={store.editData.data.last_name}
                  setLastname(e.target.value);
                }}
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
