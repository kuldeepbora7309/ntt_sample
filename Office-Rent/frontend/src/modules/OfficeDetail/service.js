import { callAPI } from "../../utils";

export const getByOfficeIdService = (id) => {
  const options = {
    url: `office-detail/${id}`,
    method: "GET",
  };
  return callAPI(options);
};

export const addFurnitureService = (furnitureData) => {
  const options = {
    url: `add-furniture`,
    method: "POST",
    data: furnitureData,
  };
  return callAPI(options);
};
