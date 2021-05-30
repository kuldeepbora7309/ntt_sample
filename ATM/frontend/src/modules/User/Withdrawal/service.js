import { callAPI } from "../../../utils";

export const withdrawalService = (formData) => {
  const options = {
    url: `fund-withdrawal`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};
