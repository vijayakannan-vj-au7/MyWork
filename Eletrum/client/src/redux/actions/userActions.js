import axios from "axios";

//user login helper
export const userLoignHelper = (userName, firstChar) => {
  return {
    type: "SET_USERLOGIN_DATA",
    payload: {
      userName,
      firstChar,
    },
  };
};

//user Data helper
export const userDataHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

//user logout helper
export const userLogoutHelper = () => {
  return {
    type: "SET_USERLOGOUT_DATA",
    payload: null,
  };
};

//user login
export const userlogin = (userloginCredentials, history) => {
  return async (dispatch) => {
    try {
      const userName = userloginCredentials.email.replace(/@.*/, "");
      const firstCharUserName = userloginCredentials.email.charAt(0);
      dispatch(userLoignHelper(userName, firstCharUserName));
      const { data } = await axios.get("https://reqres.in/api/users");
      console.log(data);
      dispatch(userDataHelper(data));
      history.push("/userDashboard");
    } catch (err) {
      console.log("Error in user Login Action", err.message);
      alert(err.response.data);
    }
  };
};

export const getUserData = (userData) => (dispatch) => {};

//post the user data
export const addUserData = (userData, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://reqres.in/api/users",
        userData
      );
    } catch (err) {
      console.log("Error in user Login Action", err.message);
      alert(err.response.data);
    }
  };
};

//edit the user data
export const editUserData = (editData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://reqres.in/api/users",
        editData
      );
    } catch (err) {
      console.log("Error in user Login Action", err.message);
      alert(err.response.data);
    }
  };
};

//delete the user data
export const deleteUserData = (deleteData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://reqres.in/api/users",
        deleteData
      );
    } catch (err) {
      console.log("Error in user Login Action", err.message);
      alert(err.response.data);
    }
  };
};

//user logout
export const userLogout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("isLogged");
    dispatch(userLogoutHelper());
    history.push("/");
    window.location.reload();
  };
};
