import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  // generally, action must be a plain json. But redux-thunk can make it be a function and executed immediately.
  // when the action is finished, it will be separted into different reducers.
  console.log("fetchUser start ...");

  const func = function(dispatch) {
    console.log("the returning function of fetchUser is running by redux-thunk...");
    axios.get("/api/current_user").then(res => {
      console.log("dispatching the response from /api/current_user");
      return dispatch({ type: FETCH_USER, payload: res });
    });
    console.log("the returning function of fetchUser is ending...");
  };
  console.log("fetchUser end ...");
  return func;
};

// export const testAction = () => {
//   return () => {
//     console.log("just a test");
//   };
// };
