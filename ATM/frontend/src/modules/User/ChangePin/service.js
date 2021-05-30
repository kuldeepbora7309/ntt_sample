import { callAPI } from "../../../utils";

export const changePinService = (formData) => {
  const options = {
    url: `change-pin`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};
