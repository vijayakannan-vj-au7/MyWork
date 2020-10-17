import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";

const Appoview = (props) => {
  //model
  const [showAppoview, setShowAppoView] = useState(false);
  const handleAppoviewShow = () => setShowAppoView(true);
  const handleAppoviewClose = () => setShowAppoView(false);

  return (
    <>
      <Link onClick={handleAppoviewShow} className="main-btn">
        Appoiment view
      </Link>

      {/* ==============password-update--model================ */}

      <Modal size="xl" show={showAppoview} onHide={handleAppoviewShow}>
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
                  Appoiment Detail
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAppoviewClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Appo ID</th>
                <th scope="col">Doctor Name</th>
                <th scope="col">Department</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Paitent Name</th>
              </tr>
            </thead>
            <tbody>
              {props.appoData.map((appo) => (
                <tr>
                  <td>{appo.appoId}</td>
                  {props.docData.map((doc) => (
                    <>
                      {appo.doctorID === doc._id ? <td>{doc.name}</td> : null}
                      {appo.doctorID === doc._id ? (
                        <td>{doc.department}</td>
                      ) : null}
                    </>
                  ))}
                  <td>{appo.appoDate}</td>
                  <td>{appo.appoTimeSloat}</td>
                  <td>{appo.paitent.pname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Appoview;
