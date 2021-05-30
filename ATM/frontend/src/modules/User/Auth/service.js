import { callAPI } from "../../../utils";

export const login = (formData) => {
  const options = {
    url: `authenticate`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};

export const getUserDetailFromToken = () => {
  const options = {
    url: `getUserDetailFromToken`,
    method: "GET",
  };
  return callAPI(options);
};

export const generateOtp = (formData) => {
  const options = {
    url: `generate-otp`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};
