const initialState = {
  userName: "",
  firstChar: "",
  userData: [],
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
    case "SET_USERDELETE_DATA":
      return {
        ...state,
        userName: initialState,
        firstChar: initialState,
        isAuthenticated: initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
