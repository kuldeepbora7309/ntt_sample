import { loading, handleAPIResponse } from "../../utils";
import { handleHTTPError } from "../Error/action";
import { getDashboardListService } from "./service";

export const RECEIVE_DASHBOARD_LIST = "RECEIVE_DASHBOARD_LIST";

export const getDashboardList = (ownProps) => (dispatch) => {
  loading(dispatch, true);
  getDashboardListService().then(
    (response) => {
      if (!response.error) {
        console.log("response", response);
        dispatch({
          type: RECEIVE_DASHBOARD_LIST,
          userBalance: response.currentBalance.user,
          atmBalance: response.currentBalance.atm,
          atmCurrencyStatus: response.currentBalance.atmCurrencyStatus,
        });
      } else {
        handleAPIResponse(response);
      }
      loading(dispatch, false);
    },
    (error) => {
      dispatch(handleHTTPError(error, ownProps));
    }
  );
};
