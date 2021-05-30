import { loading, handleAPIResponse } from "../../../utils";
import { handleHTTPError } from "../../Error/action";
import { changePinService } from "./service";

export const changePin = (formData, ownProps) => (dispatch, getState) => {
  loading(dispatch, true);
  changePinService(formData).then(
    (response) => {
      loading(dispatch, false);
      if (!response.error) {
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
