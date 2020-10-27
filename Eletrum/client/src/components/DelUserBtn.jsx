import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { deleteUserData } from "../redux/actions/userActions";

const DelUserBtn = (props) => {
  const dispatch = useDispatch();
  //edit user data model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //user form handler
  const deleteUderDataHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteUserData({ id }));
    handleClose();
  };

  return (
    <>
      <Button variant="danger" className="btn-sm" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE USER DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h6>Do You Want To Delete</h6>
            <div className="text-center">
              <Button
                onClick={(ev) => deleteUderDataHandler(ev, props.id)}
                type="submit"
                variant="info"
              >
                Yes , Confirm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DelUserBtn;
