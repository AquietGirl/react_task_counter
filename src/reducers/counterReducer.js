export default function counter(state = 0, action) {
    debugger
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "DIFF":
      return state - action.payload;
    default:
      return state;
  }
}
