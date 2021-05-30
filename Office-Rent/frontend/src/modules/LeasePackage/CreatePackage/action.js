import { loading, handleAPIResponse } from "../../../utils";
import { handleHTTPError } from "../../Error/action";
import { validateField } from "./validators";
import { createLeasePackageService } from "./service";
import { getDashboardList } from "../../Dashboard/action";

export const NEW_PACKAGE_FIELD_CHANGE = "NEW_PACKAGE_FIELD_CHANGE";
export const NEW_PACKAGE_ADDED = "NEW_PACKAGE_ADDED";

export const getOfficeList = (ownProps) => (dispatch, getState) => {
  dispatch(getDashboardList(ownProps));
};

const newFieldChange = (prop, value, isValid, message) => ({
  type: NEW_PACKAGE_FIELD_CHANGE,
  prop,
  value,
  isValid,
  message,
});

export const formFieldChange = (prop, value) => (dispatch, getState) => {
  console.log("getState().newLeasePackage", getState().newLeasePackage[prop]);
  let { isRequired } = getState().newLeasePackage[prop];
  let isValid = true;
  let message = null;
  if (isRequired) {
    isValid = validateField[prop](value).isValid;
    message = validateField[prop](value).message;
  }
  return dispatch(newFieldChange(prop, value, isValid, message));
};

export const addPackage = (ownProps) => (dispatch, getState) => {
  const { leaseType, leaseDuration, rentPackage, attachedOfficeList } =
    getState().newLeasePackage;
  let formData = {
    lease_type: leaseType.value,
    lease_duration: leaseDuration.value,
    rent_package: rentPackage.value,
    attachedOfficeList: attachedOfficeList.value,
  };
  loading(dispatch, true);
  createLeasePackageService(formData).then(
    (response) => {
      loading(dispatch, false);
      if (!response.error) {
        dispatch({
          type: NEW_PACKAGE_ADDED,
        });
        handleAPIResponse(response);
      } else {
        handleAPIResponse(response);
      }
    },
    (error) => {
      dispatch(handleHTTPError(error, ownProps));
    }
  );
};
