const initialState = {
  superadmin: [],
  admin: [],
  doctor: [],
  dept: [],
  appo: [],
  user: {},
  isSuper: false,
  isAdmin: false,
  isUser: false,

  isError: false,
  isAuthenticated: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERHOME_DATA":
      //console.log(action.payload);
      return {
        ...state,
        user: action.payload.user,
        doctor: action.payload.doctor,
        dept: action.payload.dept,
        appo: action.payload.appo,
        isUser: true,
        isAuthenticated: true,
      };
    case "SET_ADMINHOME_DATA":
      //console.log(action.payload);
      return {
        ...state,
        admin: action.payload.admin,
        doctor: action.payload.doctor,
        appo: action.payload.appo,
        isAdmin: true,
        isAuthenticated: true,
      };
    case "SET_SUPERADMINHOME_DATA":
      //console.log(action.payload);
      return {
        ...state,
        superadmin: action.payload.super,
        admin: action.payload.admin,
        doctor: action.payload.doctor,
        dept: action.payload.dept,
        isSuper: true,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default homeReducer;
