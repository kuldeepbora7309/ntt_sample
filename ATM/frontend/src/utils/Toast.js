import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export const defaultErrorMessage =
  "There were some error, Please contact to support team";
const defaultSuccessMessage = "API Call Successfully Executed";

export const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const toastNotification = (message, status = "success") => {
  if (status === "success") {
    return toast.success(message);
  } else if (status === "info") {
    return toast.info(message);
  } else if (status === "error") {
    return toast.error(message);
  }
};

export const handleAPIResponse = (response) => {
  let status = response.error ? "error" : "success";
  let defaultMessage =
    status === "error" ? defaultErrorMessage : defaultSuccessMessage;
  let message = response.message ? response.message : defaultMessage;
  toastNotification(message, status);
};
