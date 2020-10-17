import axios from "axios";

//user data
export const userHomeDataHelper = (data) => {
  return {
    type: "SET_USERHOME_DATA",
    payload: {
      user: data.userData,
      doctor: data.doctorData,
      dept: data.deptData,
      appo: data.appoData,
    },
  };
};

//admin data
export const adminHomeDataHelper = (data) => {
  return {
    type: "SET_ADMINHOME_DATA",
    payload: {
      admin: data.adminData,
      doctor: data.doctorData,
      appo: data.appoData,
    },
  };
};

//super admin data
export const superAdminHomeDataHelper = (data) => {
  return {
    type: "SET_SUPERADMINHOME_DATA",
    payload: {
      superadmin: data.superData,
      doctor: data.doctorData,
      admin: data.adminData,
      dept: data.deptData,
    },
  };
};

// user home
export const userHomeData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "https://vs-medcare.herokuapp.com/api/home/user/home",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      //console.log(data);
      dispatch(userHomeDataHelper(data));
    } catch (err) {
      console.log("Error in user home data Action", err.message);
    }
  };
};

// admin home
export const adminHomeData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "https://vs-medcare.herokuapp.com/api/home/admin/home",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(adminHomeDataHelper(data));
    } catch (err) {
      console.log("Error in admin home data Action", err.message);
    }
  };
};

// super admin home
export const superAdminHomeData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "https://vs-medcare.herokuapp.com/api/home/superadmin/home",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(superAdminHomeDataHelper(data));
    } catch (err) {
      console.log("Error in super admin home data Action", err.message);
    }
  };
};
