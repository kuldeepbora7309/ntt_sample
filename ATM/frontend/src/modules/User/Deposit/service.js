import { callAPI } from "../../../utils";

export const depositService = (formData) => {
  const options = {
    url: `cash-deposit`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};
