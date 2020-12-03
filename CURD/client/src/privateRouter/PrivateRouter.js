import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    ({ userRoot: { isAuthenticated = false } }) => isAuthenticated
  );

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

export default PrivateRouter;
