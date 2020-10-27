const initialState = {
  userName: "",
  firstChar: "",
  userData: [],
  addUserData: [],
  isAdded: false,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERLOGIN_DATA":
      return {
        ...state,
        userName: action.payload.userName,
        firstChar: action.payload.firstChar,
        isAuthenticated: true,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload.data,
      };
    case "SET_ADDUSER_DATA":
      console.log(action.payload.data);
      return {
        ...state,
        addUserData: action.payload.data,
        isAdded: true,
      };
    case "SET_USERLOGOUT_DATA":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
