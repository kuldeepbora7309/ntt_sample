import { HTTP_ERROR } from "./action";

const initialState = {
  errorMessage: null,
  errorCode: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case HTTP_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        errorCode: action.errorCode,
      };
    default:
      return state;
  }
};

export default error;
