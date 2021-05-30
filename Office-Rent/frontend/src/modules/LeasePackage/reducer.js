import { LEASE_PACKAGE_LIST_RECEIVED } from "./action";

const initialState = {
  leasePackageList: [],
};

const leasePackageList = (state = initialState, action) => {
  switch (action.type) {
    case LEASE_PACKAGE_LIST_RECEIVED:
      return {
        ...state,
        leasePackageList: action.value,
      };
    default:
      return state;
  }
};

export default leasePackageList;
