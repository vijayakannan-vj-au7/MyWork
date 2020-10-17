import { combineReducers } from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import superAdminReducer from "./superAdminReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";
import paitentReducer from "./paitentReducer";

export default combineReducers({
  authRoot: authReducer,
  homeRoot: homeReducer,
  superAdminRoot: superAdminReducer,
  adminRoot: adminReducer,
  userRoot: userReducer,
  doctorRoot: doctorReducer,
  paitentRoot: paitentReducer,
});
