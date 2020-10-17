import axios from "axios";

// adding doctor
export const addDocDataHelper = (data) => {
  return {
    type: "SET_ADDDOC_DATA",
    payload: data,
  };
};

//deleting doctor
export const delDocDataHelper = (data) => {
  return {
    type: "SET_DELDOC_DATA",
    payload: data,
  };
};

//marking leave
export const addDocLeaveHelper = (data) => {
  return {
    type: "SET_ADDDOCLEAVE_DATA",
    payload: data,
  };
};

//marking leave
export const delDocLeaveHelper = (data) => {
  return {
    type: "SET_DELDOCLEAVE_DATA",
    payload: data,
  };
};

//view doctor data
export const viewDocDataHelper = (data) => {
  return {
    type: "SET_VIEWDOC_DATA",
    payload: data,
  };
};

//doctor name fillter
export const docFillterNameHelper = (data) => {
  return {
    type: "SET_DOCNAME_DATA",
    payload: data,
  };
};

// adding doctor data by super admin
export const addDocData = (addDocDataCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/uploadDoc",
        data: addDocDataCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(addDocDataHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in add doctor Action", err.message);
      alert(err.response.data);
    }
  };
};

// deleting the doctor data by super admin
export const delDocData = (delDocDataCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/deleteDoc",
        data: delDocDataCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(delDocDataHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in delete doctor Action", err.message);
      alert(err.response.data);
    }
  };
};

// Marking the doctor leave by super admin
export const addDocLeave = (addDocLevDataCredentials) => {
  console.log(addDocLevDataCredentials);
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/leaveDoc",
        data: addDocLevDataCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(addDocLeaveHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in add doctor leave Action", err.message);
      alert(err.response.data);
    }
  };
};

// Cancelling the doctor leave by super admin
export const delDocLeave = (delDocLeaveCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/leaveDocCancel",
        data: delDocLeaveCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(delDocLeaveHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in delete doctor leave Action", err.message);
      alert(err.response.data);
    }
  };
};

// view all doctor data
export const viewDocData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "https://vs-medcare.herokuapp.com/api/public/viewAllDoc",
      });
      dispatch(viewDocDataHelper(data.message));
    } catch (err) {
      console.log("Error in view doctor data Action", err.message);
      alert(err.response.data);
    }
  };
};

// filter the dactor based on the department docFillter=
export const docFillter = (docFillterData) => {
  //console.log(docFillterData);
  return async (dispatch) => {
    try {
      const docName = [];
      docFillterData.docData.map((doc) => {
        if (docFillterData.depData === doc.department) {
          docName.push(doc.name);
        }
      });
      //console.log(docName);
      dispatch(docFillterNameHelper(docName));
    } catch (err) {
      console.log("Error in doc fillter Action", err.message);
    }
  };
};
