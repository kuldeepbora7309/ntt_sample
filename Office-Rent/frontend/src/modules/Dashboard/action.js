import { loading, handleAPIResponse } from "../../utils";
import { handleHTTPError } from "../Error/action";
import {
  getDashboardListService,
  searchOfficeWithFilterService,
} from "./service";

export const RECEIVE_DASHBOARD_LIST = "RECEIVE_DASHBOARD_LIST";

export const getDashboardList = (ownProps) => (dispatch) => {
  loading(dispatch, true);
  getDashboardListService().then(
    (response) => {
      if (!response.error) {
        dispatch({
          type: RECEIVE_DASHBOARD_LIST,
          value: response.data,
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

export const searchOfficeWithFilter = (filter, ownProps) => (dispatch) => {
  loading(dispatch, true);
  searchOfficeWithFilterService(filter).then(
    (response) => {
      if (!response.error) {
        dispatch({
          type: RECEIVE_DASHBOARD_LIST,
          value: response.data,
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
