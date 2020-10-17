import axios from "axios";

//
export const userAppoDataHelper = (data) => {
  return {
    type: "SET_APPO_DATA",
    payload: data,
  };
};

// checking the appoinment tine and date by user
export const appoBook = (appoBookCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/appoBook",
        data: appoBookCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(userAppoDataHelper(data));
      await alert(data.message);
      window.location.reload();
    } catch (err) {
      console.log("Error in appoinment booking Action", err.message);
      alert(err.response.data);
    }
  };
};

// checking the appoinment tine and date by user
export const appoCancel = (appoCancelCredentials) => {
  //console.log(appoCancelCredentials);
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/appoCancel",
        data: appoCancelCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(userAppoDataHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in cancelling appoinment Action", err.message);
      alert(err.response.data);
    }
  };
};
