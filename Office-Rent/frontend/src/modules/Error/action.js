import { toastNotification, loading, defaultErrorMessage } from "../../utils";

export const HTTP_ERROR = "HTTP_ERROR";

const errorMessage = {
  400: "Bad Request",
  401: "Unauthorised",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  408: "Request Timeout",
  429: "Too Many Requests",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

export const handleHTTPUnauthorised = (ownProps) => (dispatch) => {
  dispatch({
    type: HTTP_ERROR,
    errorCode: 401,
    errorMessage: errorMessage[401],
  });
  ownProps.history.push("/error");
};

export const handleHTTPError = (error, ownProps) => (dispatch) => {
  loading(dispatch, false);
  if (
    error.response &&
    error.response.status &&
    errorMessage[error.response.status]
  ) {
    dispatch({
      type: HTTP_ERROR,
      errorCode: error.response.status,
      errorMessage: errorMessage[error.response.status],
    });
    ownProps.history.push("/error");
  } else {
    toastNotification(defaultErrorMessage, "error");
  }
};
