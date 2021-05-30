import { loading, handleAPIResponse } from "../../../utils";
import { handleHTTPError } from "../../Error/action";
import { depositService } from "./service";

export const cashDeposit = (formData, ownProps) => (dispatch, getState) => {
  loading(dispatch, true);
  depositService(formData).then(
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
