import { combineReducers } from "redux";

import auth from "./Auth/reducer";

import {
  REQUEST_USER_DATA,
  RECEIVE_USER_DATA,
  RESET_USER_DATA,
} from "./Auth/action";

const initialState = {
  name: null,
  account_number: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return {
        ...state,
        pending: true,
      };
    case RECEIVE_USER_DATA:
      return {
        ...state,
        name: action.name,
        account_number: action.account_number,
      };
    case RESET_USER_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default combineReducers({
  user,
  auth,
});
