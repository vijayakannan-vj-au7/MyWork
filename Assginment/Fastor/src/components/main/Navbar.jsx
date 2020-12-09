import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { userLogout } from "../../redux/actions/authAction";

//image
import headlogo from "../../images/fastorlogo.png";

//
const Navbar = () => {
  //accessing the local storage
  const log = localStorage.getItem("isLogged") === "true";
  //
  const dispatch = useDispatch();
  //
  const history = useHistory();
  //handler
  const logoutHandler = () => {
    dispatch(userLogout());
    history.push("/");
  };
  //
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-back fixed-top" id="mainNav">
        <div className="container">
          <HashLink smooth="true" className="navbar-brand" to="/#home">
            <img className="nav-logo" src={headlogo} alt="head-logo" />
          </HashLink>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fa-2x"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <HashLink smooth="true" className="nav-link" to="/#home">
                  Home
                </HashLink>
              </li>
              {log ? (
                <>
                  <li className="nav-item">
                    <Link smooth="true" className="nav-link" to="/user">
                      Restaurant
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={logoutHandler}
                      smooth="true"
                      className="nav-link"
                      to="/user"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
