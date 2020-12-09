const initialState = {
  hotel: [],
};

//
const authReducer = (state = initialState, action) => {
  //
  switch (action.type) {
    //
    case "SET_HOTEL_DATA":
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
