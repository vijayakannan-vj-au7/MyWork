const initialState = {
  userName: "",
  firstChar: "",
  userData: [],
  totalPage: [],
  addUserData: [],
  isAdded: false,
  deleteUserData: [],
  isDeleted: false,
  editData: [],
  editUserData: [],
  isEdited: false,
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
        totalPage: action.payload.totalPage,
      };
    case "SET_ADDUSER_DATA":
      return {
        ...state,
        addUserData: action.payload.addUserData,
        isAdded: action.payload.isAdded,
      };
    case "SET_DELETEUSER_DATA":
      return {
        ...state,
        deleteUserData: action.payload.deleteUserData,
        isDeleted: action.payload.isDeleted,
      };
    case "SET_EDIT_DATA":
      return {
        ...state,
        editData: action.payload.editData,
      };
    case "SET_EDITUSER_DATA":
      return {
        ...state,
        editUserData: action.payload.editUserData,
        isEdited: action.payload.isEdited,
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
