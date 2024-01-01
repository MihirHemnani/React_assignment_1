import { CHANGE_INPUT_FIELD } from "./Types";

const intialState = "";

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
