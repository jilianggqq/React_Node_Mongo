import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  console.log("action in authReducer:", action);
  console.log("state in authReducer:", state);
  switch (action.type) {
    case FETCH_USER:
      // pay attention to about this.
      return action.payload || false;
    default:
      return state;
  }
}
