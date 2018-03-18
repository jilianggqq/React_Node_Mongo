import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";

// the key is very important. It is the key for redux state.
export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
