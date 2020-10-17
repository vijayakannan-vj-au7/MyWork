import axios from "axios";

//admin register
export const adminRegisterHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

//delete admin
export const adminDeleteHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

// creating the admin account by super admin
export const adminRegister = (adminRegisterCredentials) => {
  //console.log(adminRegisterCredentials);
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/adminRegister",
        data: adminRegisterCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(adminRegisterHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in adminRegister Action", err.message);
      alert(err.response.data);
    }
  };
};

// deleting the admin account by super admin
export const adminDelete = (adminDeleteCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/adminDelete",
        data: adminDeleteCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(adminDeleteHelper(true));
      await alert(data.message);
    } catch (err) {
      console.log("Error in admin delete Action", err.message);
      alert(err.response.data);
    }
  };
};
