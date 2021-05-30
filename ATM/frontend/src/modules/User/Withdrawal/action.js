import { loading, handleAPIResponse } from "../../../utils";
import { handleHTTPError } from "../../Error/action";
import { withdrawalService } from "./service";

export const withdrawal = (formData, ownProps) => (dispatch, getState) => {
  loading(dispatch, true);
  withdrawalService(formData).then(
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
