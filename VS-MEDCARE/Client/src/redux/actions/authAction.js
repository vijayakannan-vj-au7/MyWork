import axios from "axios";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";

//super admin
export const superAdminLoignHelper = (data) => {
  return {
    type: "SET_SUPERADMIN_DATA",
    payload: data,
  };
};

//user
export const adminLoginHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

//user login
export const userLoginHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

//-------------- login function superadmin | admin | user ---------------------

export const loginFunction = (loginCredentials, history) => {
  //superadmin
  if (loginCredentials.role === "superadmin") {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/superadmin/superlogin",
          data: loginCredentials,
        });

        const { token } = data;
        localStorage.setItem("userJwtToken", token);
        localStorage.setItem("isLogged", true);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(superAdminLoignHelper(decoded.user));

        history.push("/superadmin");
      } catch (err) {
        console.log("Error in super admin Login Action", err.message);
        alert(err.response.data);
      }
    };
  } else if (loginCredentials.role === "admin") {
    // admin
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/admin/login",
          data: loginCredentials,
        });

        const { token } = data;
        localStorage.setItem("userJwtToken", token);
        localStorage.setItem("isLogged", true);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(adminLoginHelper(decoded.user));

        history.push("/admin");
      } catch (err) {
        console.log("Error in admin Login Action", err.message);
        alert(err.response.data);
      }
    };
  } else {
    //user
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/user/login",
          data: loginCredentials,
        });

        const { token } = data;
        localStorage.setItem("userJwtToken", token);
        localStorage.setItem("isLogged", true);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(userLoginHelper(decoded.user));

        history.push("/user");
      } catch (err) {
        console.log("Error in user Login Action", err.message);
        alert(err.response.data);
      }
    };
  }
};

// logout - user - admin - superadmin

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("userJwtToken");
    localStorage.removeItem("isLogged");
    setAuthToken(false);
  };
};
