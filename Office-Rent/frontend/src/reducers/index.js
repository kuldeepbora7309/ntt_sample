import { combineReducers } from "redux";

import error from "../modules/Error/reducer";
import dashboard from "../modules/Dashboard/reducer";
import officeDetails from "../modules/OfficeDetail/reducer";
import leasePackageList from "../modules/LeasePackage/reducer";
import newLeasePackage from "../modules/LeasePackage/CreatePackage/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
const rootReducer = combineReducers({
  error,
  dashboard,
  officeDetails,
  leasePackageList,
  newLeasePackage,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
