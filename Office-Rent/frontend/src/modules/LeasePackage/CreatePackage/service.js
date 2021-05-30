import { callAPI } from "../../../utils";

export const createLeasePackageService = (formData) => {
  const options = {
    url: `create-package`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};
