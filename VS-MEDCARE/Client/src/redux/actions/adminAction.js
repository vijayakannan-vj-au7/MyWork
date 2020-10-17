import axios from "axios";

//update password
export const adminUpdatePasswordHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

//doctor data fillter
export const docDatHelper = (data) => {
  return {
    type: "SET_DOCDAT_DATA",
    payload: data,
  };
};

//password update
export const adminUpdatePassword = (adminUpdatePasswordCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/admin/updatePassword",
        data: adminUpdatePasswordCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(adminUpdatePasswordHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in admin update password Action", err.message);
      alert(err.response.data);
    }
  };
};

//doctor on date fillter
export const docDatFillter = (docDatFillter) => {
  return async (dispatch) => {
    //console.log(docDatFillter);
    const docDat = [];
    docDatFillter.appoData.map((appo) => {
      docDatFillter.docData.map((doc) => {
        if (appo.doctorID === doc._id) {
          if (doc.name === docDatFillter.name) {
            if (appo.appoDate === docDatFillter.date) {
              docDat.push(appo);
            }
          }
        }
      });
    });
    dispatch(docDatHelper(docDat));
    //console.log(docDat);
  };
};
