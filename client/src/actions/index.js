import axios from "axios";
import { FETCH_USER } from "./types";

// in the production version, I'd like to use this way.
// generally, action must be a plain json. But redux-thunk can make it be a function and executed immediately.
// when the action is finished, it will be separted into different reducers.
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  return dispatch({ type: FETCH_USER, payload: res.data });
};
