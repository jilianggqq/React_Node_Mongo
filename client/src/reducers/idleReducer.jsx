import { PLAIN_MSG } from "../actions/types";

export default function(state = {}, action) {
  console.log("action in idle:", action);
  switch (action.type) {
    case PLAIN_MSG:
      return { msg: action.message };
    default:
      return state;
  }
}
