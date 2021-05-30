import { LOGIN_FIELD_CHANGE, RESET_LOGIN_DATA } from "./action";

const initialState = {
  account: {
    value: null,
    isRequired: true,
    isValid: null,
    message: null,
  },
  otp: {
    value: null,
    isRequired: true,
    isValid: null,
    message: null,
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FIELD_CHANGE:
      return {
        ...state,
        [action.prop]: {
          ...state[action.prop],
          value: action.value,
          isValid: action.isValid,
          message: action.message,
        },
      };
    case RESET_LOGIN_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default auth;
