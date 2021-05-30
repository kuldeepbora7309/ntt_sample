import { NEW_PACKAGE_FIELD_CHANGE, NEW_PACKAGE_ADDED } from "./action";

const initialState = {
  leaseType: {
    value: "short",
    isValid: null,
    message: null,
    isRequired: true,
  },
  leaseDuration: {
    value: "all",
    isValid: null,
    message: null,
    isRequired: true,
  },
  rentPackage: {
    value: "",
    isValid: null,
    message: null,
    isRequired: true,
  },
  attachedOfficeList: {
    value: [],
    isValid: null,
    message: null,
    isRequired: false,
  },
};

const newLeasePackage = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PACKAGE_FIELD_CHANGE:
      return {
        ...state,
        [action.prop]: {
          ...state[action.prop],
          value: action.value,
          isValid: action.isValid,
          message: action.message,
        },
      };
    case NEW_PACKAGE_ADDED:
      return initialState;
    default:
      return state;
  }
};

export default newLeasePackage;
