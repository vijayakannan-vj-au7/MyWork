import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { appoBook } from "../../../redux/actions/appoAction";
import { docFillter } from "../../../redux/actions/doctorAction";

const AppoBook = (props) => {
  const docstore = useSelector((store) => store.doctorRoot);
  //console.log(props.depData);
  const dispatch = useDispatch();
  //model
  const [showAppoCheck, setShowAppoCheck] = useState(false);
  const handleAppoCheckShow = () => setShowAppoCheck(true);
  const handleAppoCheckClose = () => setShowAppoCheck(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [appoDate, setAppoDate] = useState("");
  const [appoTimeSloat, setAppoTimeSloat] = useState("");
  //paitent
  const [pname, setPname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  //form handler
  const departmentHandler = (e) => {
    setDepartment(e);
    const docData = props.docData;
    const depData = e;
    dispatch(docFillter({ depData, docData }));
  };

  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      name,
      department,
      appoDate,
      appoTimeSloat,
      pname,
      gender,
      email,
      dob,
      contact,
      msg
    );
    dispatch(
      appoBook({
        name,
        department,
        appoDate,
        appoTimeSloat,
        pname,
        gender,
        email,
        dob,
        contact,
        msg,
      })
    );
    handleAppoCheckClose();
  };

  return (
    <>
      <Link onClick={handleAppoCheckShow} className="main-btn">
        Book Appoinment
      </Link>

      {/* ==============password-update--model================ */}

      <Modal size="lg" show={showAppoCheck} onHide={handleAppoCheckShow}>
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
                  Book Appoinment
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAppoCheckClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody ModelBody-w">
          <form onSubmit={formSubmitHandler}>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Department</label>
                    <select
                      className="form-control"
                      onChange={(e) => departmentHandler(e.target.value)}
                    >
                      {props.depData.map((dep) => (
                        <option value={dep}>{dep}</option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col xs={12} md={6}>
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
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Appoiment Date</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                      onChange={(e) => setAppoDate(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Time Sloat</label>
                    <select
                      className="form-control"
                      onChange={(e) => setAppoTimeSloat(e.target.value)}
                    >
                      <option></option>
                      <option value="08:00am-08:30am">08:00am - 08:30am</option>
                      <option value="09:00am-09:30am">09:00am - 09:30am</option>
                      <option value="11:00am-11:30am">11:00am - 11:30am</option>
                      <option value="12:00pm-12:30pm">12:00pm - 12:30pm</option>
                      <option value="01:00pm-01:30pm">01:00pm - 01:30pm</option>
                      <option value="03:00pm-03:30pm">03:00pm - 03:30pm</option>
                      <option value="04:00pm-04:30pm">04:00pm - 04:30pm</option>
                      <option value="05:00pm-05:30pm">05:00pm - 05:30pm</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <h6 className="text-center text-white">Paitent Detail</h6>
              <Row>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter fullname"
                      required
                      onChange={(e) => setPname(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} className="align-self-center">
                  <label>Gender</label>
                  &ensp;
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label">Male</label>
                    &ensp;
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter date of birth"
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Contact</label>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      className="form-control"
                      placeholder="Enter contact number"
                      required
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group">
                    <label>Message</label>
                    <input
                      type="textarea"
                      className="form-control"
                      placeholder="Enter Message"
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xs={12} md={12} className="text-center">
                  <button type="submit" className="model-main-btn">
                    Submit
                  </button>
                </Col>
              </Row>
            </Container>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppoBook;
