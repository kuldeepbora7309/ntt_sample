import { loading, handleAPIResponse } from "../../utils";
import { handleHTTPError } from "../Error/action";
import { getByOfficeIdService, addFurnitureService } from "./service";
export const OFFICE_DETAIL_RECEIVED = "OFFICE_DETAIL_RECEIVED";

export const getOfficeDetail = (id, ownProps) => (dispatch) => {
  loading(dispatch, true);
  getByOfficeIdService(id).then(
    (response) => {
      if (!response.error) {
        dispatch({
          type: OFFICE_DETAIL_RECEIVED,
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

export const addFurniture = (furnitureData, ownProps) => (dispatch) => {
  loading(dispatch, true);
  addFurnitureService(furnitureData).then(
    (response) => {
      if (!response.error) {
        dispatch({
          type: OFFICE_DETAIL_RECEIVED,
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
