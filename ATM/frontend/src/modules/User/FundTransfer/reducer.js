import { BENEFICIARY_LIST_RECEIVED } from "./action";

const initialState = {
  beneficiaryList: [],
};

const beneficiary = (state = initialState, action) => {
  switch (action.type) {
    case BENEFICIARY_LIST_RECEIVED:
      return {
        ...state,
        beneficiaryList: action.value,
      };
    default:
      return state;
  }
};

export default beneficiary;
