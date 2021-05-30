import { RECEIVE_DASHBOARD_LIST } from "./action";

const initialState = {
  userBalance: 0,
  atmBalance: 0,
  atmCurrencyStatus: {
    currency_2000: 0,
    currency_500: 0,
    currency_200: 0,
    currency_100: 0,
  },
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DASHBOARD_LIST:
      return {
        ...state,
        userBalance: action.userBalance,
        atmBalance: action.atmBalance,
        atmCurrencyStatus: action.atmCurrencyStatus,
      };
    default:
      return state;
  }
};

export default dashboard;
