import { loading, handleAPIResponse } from "../../../utils";
import { handleHTTPError } from "../../Error/action";
import { fundTransferService, beneficiaryListService } from "./service";
export const BENEFICIARY_LIST_RECEIVED = "BENEFICIARY_LIST_RECEIVED";

export const beneficiaryList = (ownProps) => (dispatch, getState) => {
  loading(dispatch, true);
  beneficiaryListService().then(
    (response) => {
      loading(dispatch, false);
      if (!response.error) {
        dispatch({
          type: BENEFICIARY_LIST_RECEIVED,
          value: response.data,
        });
      } else {
        handleAPIResponse(response);
      }
    },
    (error) => {
      dispatch(handleHTTPError(error, ownProps));
    }
  );
};

export const fundTransfer = (formData, ownProps) => (dispatch, getState) => {
  loading(dispatch, true);
  fundTransferService(formData).then(
    (response) => {
      loading(dispatch, false);
      if (!response.error) {
        handleAPIResponse(response);
        ownProps.history.push("/");
      } else {
        handleAPIResponse(response);
      }
    },
    (error) => {
      dispatch(handleHTTPError(error, ownProps));
    }
  );
};
