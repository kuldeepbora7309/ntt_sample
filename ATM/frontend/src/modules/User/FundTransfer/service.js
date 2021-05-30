import { callAPI } from "../../../utils";

export const beneficiaryListService = () => {
  const options = {
    url: `beneficiary-list`,
    method: "GET",
  };
  return callAPI(options);
};

export const fundTransferService = (formData) => {
  const options = {
    url: `fund-transfer`,
    method: "POST",
    data: formData,
  };
  return callAPI(options);
};
