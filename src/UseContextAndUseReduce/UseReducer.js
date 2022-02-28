const UseReducer = (state, action) => {
  if (action.type == "decrease") {
    return { count: state.count - 1 };
  }
  if (action.type == "increase") {
    return { count: state.count + 1 };
  }
};
export default UseReducer;
