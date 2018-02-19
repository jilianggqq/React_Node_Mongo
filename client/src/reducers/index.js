import { combineReducers } from "redux";
import authReducer from "./authReducer";
import idleReducer from "./idleReducer";

export default combineReducers({
  auth: authReducer,
  idle: idleReducer
});
