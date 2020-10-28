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

//add user Data helper
export const addUserDataHelper = (data) => {
  return {
    type: "SET_ADDUSER_DATA",
    payload: {
      addUserData: data,
      isAdded: true,
    },
  };
};

//edit Data helper
export const editDataHelper = (data) => {
  return {
    type: "SET_EDIT_DATA",
    payload: {
      editData: data,
    },
  };
};

//edit user Data helper
export const editUserDataHelper = (data) => {
  return {
    type: "SET_EDITUSER_DATA",
    payload: {
      editUserData: data,
      isEdited: true,
    },
  };
};

//delete user Data helper
export const deleteUserDataHelper = (data) => {
  return {
    type: "SET_DELETEUSER_DATA",
    payload: {
      deleteUserData: data,
      isDeleted: true,
    },
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
      //getting the username before '@' in email
      const userName = userloginCredentials.email.replace(/@.*/, "");
      //getting the first character of username
      const firstCharUserName = userName.charAt(0);

      dispatch(userLoignHelper(userName, firstCharUserName));

      const { data } = await axios.get("https://reqres.in/api/users");

      dispatch(userDataHelper(data));
      history.push("/userDashboard");
    } catch (err) {
      console.log("Error in user Login Action", err.message);
      //alert(err.response.data);
    }
  };
};

//get user data
export const getUserData = (userData) => (dispatch) => {};

//add the user data
export const addUserData = (userData, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://reqres.in/api/users",
        userData
      );

      if (data) {
        dispatch(addUserDataHelper(data));
      }
    } catch (err) {
      alert(err.response.data);
    }
  };
};

//get edit data for single user
export const editData = (Id) => {
  return async (dispatch) => {
    try {
      const id = Object.values(Id);
      const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
      if (data) {
        dispatch(editDataHelper(data));
      }
    } catch (err) {
      alert(err.response.data);
    }
  };
};

//edit the user data
export const editUserData = (editData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://reqres.in/api/users/",
        editData
      );
      if (data) {
        dispatch(editUserDataHelper(data));
      }
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
      if (data) {
        dispatch(deleteUserDataHelper(data));
      }
    } catch (err) {
      console.log("Error in user Login Action", err.message);
      alert(err.response.data);
    }
  };
};

//user logout
export const userLogout = (history) => {
  return (dispatch) => {
    dispatch(userLogoutHelper());
    history.push("/");
  };
};
