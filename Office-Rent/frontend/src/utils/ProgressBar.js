import LoadingBar, { showLoading, hideLoading } from "react-redux-loading-bar";

export const ProgressBar = () => {
  return <LoadingBar showFastActions />;
};

export const loading = (dispatch, type = true) => {
  return type ? dispatch(showLoading()) : dispatch(hideLoading());
};
