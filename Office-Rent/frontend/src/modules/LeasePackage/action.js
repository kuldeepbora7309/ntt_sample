import { loading, handleAPIResponse } from "../../utils";
import { handleHTTPError } from "../Error/action";
import { getLeasePackageService, createLeasePackageService } from "./service";
export const LEASE_PACKAGE_LIST_RECEIVED = "LEASE_PACKAGE_LIST_RECEIVED";

export const getLeasePackageList = (duration, term, ownProps) => (dispatch) => {
  loading(dispatch, true);
  console.log("duration", duration);
  console.log("term", term);
  getLeasePackageService(duration, term).then(
    (response) => {
      if (!response.error) {
        dispatch({
          type: LEASE_PACKAGE_LIST_RECEIVED,
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

export const addLeasePackage =
  (leasePackageData, term, ownProps) => (dispatch) => {
    loading(dispatch, true);
    createLeasePackageService(leasePackageData).then(
      (response) => {
        if (!response.error) {
          dispatch(getLeasePackageList("all", term));
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
