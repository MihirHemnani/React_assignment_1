import { CHANGE_INPUT_FIELD } from "./Types";

export const changeInput = (data) => {
  return {
    type: CHANGE_INPUT_FIELD,
    payload: data,
  };
};
