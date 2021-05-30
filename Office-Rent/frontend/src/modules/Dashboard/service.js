import { callAPI } from "../../utils";

export const getDashboardListService = () => {
  const options = {
    url: `office-listing`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  return callAPI(options);
};

export const searchOfficeWithFilterService = (filter) => {
  const options = {
    url: `search-offices`,
    method: "POST",
    data: filter,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  return callAPI(options);
};
