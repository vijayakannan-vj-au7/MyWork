import React from "react";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

const TeamCard = (props) => {
  return (
    <>
      <div className="col-lg-6 mt-4">
        <div className="member">
          <div className="image">
            <img src={props.face} className="img-fluid" alt="doc-img" />
          </div>
          <div className="member-info">
            <h4>{props.name}</h4>
            <span>{props.degree}</span>
            <p>{props.text}</p>
            <div className="social">
              <Link>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link>
                <i className="fab fa-facebook"></i>
              </Link>
              <Link>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
