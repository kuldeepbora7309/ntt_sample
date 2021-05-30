import { RECEIVE_DASHBOARD_LIST } from "./action";

const initialState = {
  items: [],
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DASHBOARD_LIST:
      return {
        ...state,
        items: action.value,
      };
    default:
      return state;
  }
};

export default dashboard;
