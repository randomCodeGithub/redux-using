const initialState = {
  message: "INITIAL TEXT",
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "Change test") {
    newState.message = "NEW TEXT TESt";
  }
  return newState;
};

export default reducer;
