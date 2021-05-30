import { callAPI } from "../../utils";

export const getLeasePackageService = (duration, term) => {
  let url =
    term === "short" ? "short-term-lease-packages" : "long-term-lease-packages";
  const options = {
    url: `${url}/${duration}`,
    method: "GET",
  };
  return callAPI(options);
};

export const createLeasePackageService = (leasePackageData) => {
  const options = {
    url: `create-package`,
    method: "POST",
    data: leasePackageData,
  };
  return callAPI(options);
};
