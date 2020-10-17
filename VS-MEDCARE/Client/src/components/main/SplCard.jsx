import React from "react";
import { Link } from "react-router-dom";

const SplCard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div className="service shadow">
          <div className="icon">
            <i className={props.icon}></i>
          </div>
          <h4>
            <Link>{props.link}</Link>
          </h4>
          <p>{props.textdata}</p>
        </div>
      </div>
    </>
  );
};

export default SplCard;
