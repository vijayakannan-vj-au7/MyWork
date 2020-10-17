const initialState = {
  user: {},
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "SET_USERDELETE_DATA":
      return {
        ...state,
        user: initialState,
        isAuthenticated: initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
