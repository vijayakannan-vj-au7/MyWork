import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { docDatFillter } from "../../redux/actions/adminAction";

const AdminViewAppo = (props) => {
  const store = useSelector((store) => store.adminRoot);
  const dispatch = useDispatch();
  //model
  const [showAdminViewAppo, setAdminViewAppo] = useState(false);
  const handleAdminViewAppoShow = () => setAdminViewAppo(true);
  const handleAdminViewAppoClose = () => setAdminViewAppo(false);
  //view-model
  const [showViewAppo, setViewAppo] = useState(false);
  const handleViewAppoShow = () => setViewAppo(true);
  const handleViewAppoClose = () => setViewAppo(false);

  //form
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const appoData = props.appoData;
    const docData = props.docData;
    dispatch(docDatFillter({ name, date, appoData, docData }));
    handleAdminViewAppoClose();
    handleViewAppoShow();
  };

  return (
    <>
      <Link onClick={handleAdminViewAppoShow} class="main-btn">
        Department Appoiment view
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showAdminViewAppo} onHide={handleAdminViewAppoShow}>
        <Modal.Header>
          <div class="container">
            <div class="row">
              {/* ============================== */}
              <div class="col-3">
                <img
                  class="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">
                  Select Doctor
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAdminViewAppoClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label>Doctor name</label>
              <select
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              >
                {props.docData.map((doc) => (
                  <option value={doc.name}>{doc.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                required
                onChange={(e) => setDate(e.target.value)}
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
      {/* ========================================view-model==================================== */}
      <Modal size="xl" show={showViewAppo} onHide={handleViewAppoShow}>
        <Modal.Header>
          <div class="container">
            <div class="row">
              {/* ============================== */}
              <div class="col-3">
                <img
                  class="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">
                  Appoinment Data
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleViewAppoClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Appo ID</th>
                  <th scope="col">Paitent Name</th>
                  <th scope="col">Dob</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email id</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {store.docdat.map((data) => (
                  <tr>
                    <td>{data.appoId}</td>
                    <td>{data.paitent.pname}</td>
                    <td>{data.paitent.dob}</td>
                    <td>{data.paitent.email}</td>
                    <td>{data.paitent.contact}</td>
                    <td>{data.paitent.msg}</td>
                  </tr>
                ))}
                ;
              </tbody>
            </table>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminViewAppo;
