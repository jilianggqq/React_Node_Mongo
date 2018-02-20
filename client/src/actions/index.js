import axios from "axios";
import { FETCH_USER } from "./types";
import { PLAIN_MSG } from "./types";

// this is the debug version.
export const fetchUser = () => {
  // generally, action must be a plain json. But redux-thunk can make it be a function and executed immediately.
  // when the action is finished, it will be separted into different reducers.
  console.log("fetchUser start ...");

  const func = function(dispatch) {
    console.log("the returning function of fetchUser is running by redux-thunk...");
    axios.get("/api/current_user").then(res => {
      console.log("dispatching the response from /api/current_user");
      return dispatch({ type: FETCH_USER, payload: res.data });
    });
    console.log("the returning function of fetchUser is ending...");
  };
  console.log("fetchUser end ...");
  return func;
};

export const fetchPlainMsg = () => {
  return {
    type: PLAIN_MSG,
    message: "Peter"
  };
};

// in the production version, I'd like to use this way.
export const fetchUser_prod = () => async dispatch => {
  console.log("fetchUser_prod start ...");
  const res = await axios.get("/api/current_user");
  console.log("fetchUser_prod end ...");
  return dispatch({ type: FETCH_USER, payload: res });
};
