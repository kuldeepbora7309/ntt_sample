import { combineReducers } from "redux";

import error from "../modules/Error/reducer";

import user from "../modules/User/reducer";
import beneficiary from "../modules/User/FundTransfer/reducer";
import dashboard from "../modules/Dashboard/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
const rootReducer = combineReducers({
  error,
  user,
  beneficiary,
  dashboard,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
