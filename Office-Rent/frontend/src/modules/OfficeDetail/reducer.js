import { OFFICE_DETAIL_RECEIVED } from "./action";

const initialState = {
  officeDetail: {},
};

const officeDetail = (state = initialState, action) => {
  switch (action.type) {
    case OFFICE_DETAIL_RECEIVED:
      return {
        ...state,
        officeDetail: action.value,
      };
    default:
      return state;
  }
};

export default officeDetail;
