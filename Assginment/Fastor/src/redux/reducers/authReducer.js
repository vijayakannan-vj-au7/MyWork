const initialState = {
  user: [],
  isAuthenticated: false,
};

//
const authReducer = (state = initialState, action) => {
  //
  switch (action.type) {
    //
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    //
    default:
      return state;
  }
};

export default authReducer;
