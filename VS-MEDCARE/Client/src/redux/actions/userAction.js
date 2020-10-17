import axios from "axios";

//user helper

//update contact //update password
export const userDataHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

//delete account
export const userDeleteDataHelper = (data) => {
  return {
    type: "SET_USERDELETE_DATA",
    payload: data,
  };
};

//user register to the website
export const userRegister = (userRegisterCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/register",
        data: userRegisterCredentials,
      });
      alert(data.message);
    } catch (err) {
      console.log("Error in userRegister Action", err.message);
      alert(err.response.data);
    }
  };
};

//password update
export const userUpdatePassword = (userUpdatePasswordCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/updatePassword",
        data: userUpdatePasswordCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(userDataHelper(data));
      await alert(data.message);
    } catch (err) {
      console.log("Error in user update password Action", err.message);
      alert(err.response.data);
    }
  };
};

//update contact
export const userUpdateContact = (userUpdateContactCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/api/user/contactUpdate",
        data: userUpdateContactCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      await alert(data.message);
      dispatch(userDataHelper(true));
      window.location.reload();
    } catch (err) {
      console.log("Error in user update contact Action", err.message);
      alert(err.response.data);
    }
  };
};

//delete user account
export const userDeleteAccount = (userDeleteAccountCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/userDelete",
        data: userDeleteAccountCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(userDeleteDataHelper(data));
      localStorage.removeItem("userJwtToken");
      localStorage.removeItem("isLogged");
      history.push("/");
      await alert(data.message);
    } catch (err) {
      console.log("Error in user delete account Action", err.message);
      alert(err.response.data);
    }
  };
};

//---------------------- for user and admin ------------------------

//token resend for user and admin
export const tokenResend = (TokenResendCredentials) => {
  if (TokenResendCredentials.role === "admin") {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/admin/resendToken",
          data: TokenResendCredentials,
        });
        await alert(data.message);
      } catch (err) {
        console.log("Error in admin resend token Action", err.message);
        alert(err.response.data);
      }
    };
  } else {
    console.log(TokenResendCredentials);
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/user/resendToken",
          data: TokenResendCredentials,
        });
        await alert(data.message);
      } catch (err) {
        console.log("Error in user resend token Action", err.message);
        alert(err.response.data);
      }
    };
  }
};

//post otp to update new password for admin and user
export const postOtp = (postOtpCredentials) => {
  if (postOtpCredentials.role === "admin") {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/admin/postOTP",
          data: postOtpCredentials,
        });
        await alert(data.message);
      } catch (err) {
        console.log("Error in admin post otp Action", err.message);
        alert(err.response.data);
      }
    };
  } else {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/user/postOTP",
          data: postOtpCredentials,
        });
        await alert(data.message);
      } catch (err) {
        console.log("Error in user post otp Action", err.message);
        alert(err.response.data);
      }
    };
  }
};

//forgot possword
export const forgotPassword = (forgotPasswordCredentials) => {
  if (forgotPasswordCredentials.role === "admin") {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/admin/forgotPassword",
          data: forgotPasswordCredentials,
        });
        await alert(data.message);
      } catch (err) {
        console.log("Error in admin forgot password Action", err.message);
        alert(err.response.data);
      }
    };
  } else {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/user/forgotPassword",
          data: forgotPasswordCredentials,
        });
        await alert(data.message);
      } catch (err) {
        console.log("Error in user forgot password Action", err.message);
        alert(err.response.data);
      }
    };
  }
};
