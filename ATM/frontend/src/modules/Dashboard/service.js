import { callAPI } from "../../utils";

export const getDashboardListService = () => {
  const options = {
    url: `dashboard-list`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  return callAPI(options);
};
