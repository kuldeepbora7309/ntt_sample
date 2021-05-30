import { handleAPIResponse, loading } from "../../../utils";
import { handleHTTPError, handleHTTPUnauthorised } from "../../Error/action";
import { login, getUserDetailFromToken, generateOtp } from "./service";
import { validateField } from "../validators";
export const LOGIN_FIELD_CHANGE = "LOGIN_FIELD_CHANGE";
export const RESET_LOGIN_DATA = "RESET_LOGIN_DATA";
export const REQUEST_USER_DATA = "REQUEST_USER_DATA";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const RESET_USER_DATA = "RESET_USER_DATA";

const loginFieldChange = (prop, value, isValid, message) => ({
  type: LOGIN_FIELD_CHANGE,
  prop,
  value,
  isValid,
  message,
});

export const formFieldChange = (prop, value) => (dispatch, getState) => {
  let { isRequired } = getState().user.auth[prop];
  let isValid = true;
  let message = null;
  if (isRequired) {
    isValid = validateField[prop](value).isValid;
    message = validateField[prop](value).message;
  }
  return dispatch(loginFieldChange(prop, value, isValid, message));
};

export const logout = (ownProps) => (dispatch) => {
  dispatch(forceLogout());
  ownProps.history.push("/login");
};

export const forceLogout = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: RESET_USER_DATA,
  });
};

export const userDetailFromToken = (ownProps) => (dispatch) => {
  if (
    localStorage.hasOwnProperty("token") &&
    localStorage.getItem("token") !== undefined
  ) {
    getUserDetailFromToken().then(
      (response) => {
        if (!response.error) {
          dispatch({
            type: RECEIVE_USER_DATA,
            name: response.data.name,
            account_number: response.data.account_number,
            current_balance: response.data.current_balance,
          });
        } else {
          dispatch(handleHTTPUnauthorised(ownProps));
        }
      },
      (error) => {
        dispatch(handleHTTPUnauthorised(ownProps));
      }
    );
  }
};

export const loginUser = (ownProps) => (dispatch, getState) => {
  const { account, otp } = getState().user.auth;
  const formData = {
    account: account.value,
    otp: otp.value,
  };
  loading(dispatch, true);
  login(formData).then(
    (response) => {
      console.log("response", response);
      if (!response.error) {
        dispatch({
          type: RECEIVE_USER_DATA,
          name: response.data.name,
          account_number: response.data.account_number,
          current_balance: response.data.current_balance,
        });
        dispatch({
          type: RESET_LOGIN_DATA,
        });
        localStorage.setItem("token", response.data.auth_token);
        ownProps.history.push("/");
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

export const generateOtpNumber = (ownProps) => (dispatch, getState) => {
  const { account } = getState().user.auth;
  const formData = {
    account: account.value,
  };
  loading(dispatch, true);
  generateOtp(formData).then(
    (response) => {
      if (!response.error) {
        dispatch(loginFieldChange("otp", response.data, true, ""));
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
