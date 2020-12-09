import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import hotelReducer from "./hotelReducer";

//
export default combineReducers({
  //
  authRoot: authReducer,
  userRoot: userReducer,
  hotelRoot: hotelReducer,
});
