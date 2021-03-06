import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { delDocLeave, docFillter } from "../../../redux/actions/doctorAction";

//
const CanDocLevBtn = (props) => {
  const docstore = useSelector((store) => store.doctorRoot);
  const dispatch = useDispatch();
  //model
  const [ShowCanDocLev, setShowCanDocLev] = useState(false);
  const handleCanDocLevShow = () => setShowCanDocLev(true);
  const handleCanDocLevClose = () => setShowCanDocLev(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState(null);
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(delDocLeave({ name, department, date }));
    handleCanDocLevClose();
  };
  //form handler
  const departmentHandler = (e) => {
    setDepartment(e);
    const docData = props.doctorData;
    const depData = e;
    dispatch(docFillter({ depData, docData }));
  };

  return (
    <>
      <Link onClick={handleCanDocLevShow} className="main-btn">
        Cancel Leave
      </Link>
      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={ShowCanDocLev} onHide={handleCanDocLevShow}>
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
                  Cancel Doctor Leave
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleCanDocLevClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label>Department</label>
              <select
                className="form-control"
                onChange={(e) => departmentHandler(e.target.value)}
              >
                {props.departmentData.map((dept) => (
                  <option value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Doctor</label>
              <select
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              >
                {docstore.docName.map((docname) => (
                  <option value={docname}>{docname}</option>
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
                Cancel Leave
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CanDocLevBtn;
