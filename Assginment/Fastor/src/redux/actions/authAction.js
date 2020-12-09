import axios from "axios";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";

//user
export const userLoginHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

//-------------- user Register function ---------------------

export const registerFuction = (userRegisterCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://staging.fastor.in:8090/v1/pwa/user/register",
        data: userRegisterCredentials,
      });
      alert(data.message);
    } catch (err) {
      console.log("Error in user Register Action", err.message);
      alert(err.response.data);
    }
  };
};

//-------------- login function user ---------------------

export const loginFunction = (loginCredentials, history) => {
  console.log(loginCredentials);
  //login
  return async (dispatch) => {
    try {
      const data = await axios({
        method: "Post",
        url: "https://staging.fastor.in:8090/v1/pwa/user/login",
        data: loginCredentials,
      });

      console.log(data);

      const { token } = data;
      localStorage.setItem("userJwtToken", token);
      localStorage.setItem("isLogged", true);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(userLoginHelper(decoded.user));
      history.push("/user");
      alert(data);
    } catch (err) {
      console.log("Error in Login Action", err.message);
      alert(err.response);
    }
  };
};

// logout - user - admin - vendor

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("userJwtToken");
    localStorage.removeItem("isLogged");
    setAuthToken(false);
  };
};
