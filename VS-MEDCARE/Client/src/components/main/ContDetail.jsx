import React from "react";

const ContDetail = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-box">
              <i className="fas fa-map-signs"></i>
              <h3>Address</h3>
              <p>Lorem Brasilia Pin code: 000000 </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-box mt-4">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>
                mail2vijaysalim@gmail.com
                <br />
                vsmedicalcare@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-box mt-4">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>
                +91 84898-86227 <br />
                +91 95954-96377
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContDetail;
