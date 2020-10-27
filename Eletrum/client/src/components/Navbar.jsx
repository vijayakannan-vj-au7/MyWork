import React from "react";
import { Link, useHistory, useEffect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { userLogout } from "../redux/actions/userActions";

const Navbar = () => {
  const store = useSelector((store) => store.userRoot);
  const history = useHistory();
  const dispatch = useDispatch();

  //user logout handler
  const userlogoutHandler = () => {
    dispatch(userLogout(history));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        {store.isAuthenticated ? (
          <>
            <Link className="navbar-brand" to="#">
              Hi Welcome {store.userName}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item dropdown">
                  <Link
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div id="alpha">
                      <span>
                        <h2>{store.firstChar}</h2>
                      </span>
                    </div>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" onClick={userlogoutHandler}>
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link className="navbar-brand" to="/">
            Hi Welcome
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;