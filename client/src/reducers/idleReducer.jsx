export default function(state = {}, action) {
  console.log("action in idle:", action);
  switch (action.type) {
    default:
      return state;
  }
}
