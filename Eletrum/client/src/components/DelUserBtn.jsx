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
      <i variant="danger" class="fas fa-trash-alt" onClick={handleShow}></i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="container text-center">
            <Modal.Title>DELETE USER DATA</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h6 className="text-center">
              Sure , You Wanted to Delete the Record
            </h6>
            <hr />
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
