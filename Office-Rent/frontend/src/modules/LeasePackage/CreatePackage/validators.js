import { customValidation } from "../../../utils";

export const validateField = {
  leaseType: (value) =>
    customValidation(value, "lease Type", {
      required: true,
    }),
  leaseDuration: (value) =>
    customValidation(value, "lease Duration", {
      required: true,
    }),
  rentPackage: (value) =>
    customValidation(value, "rent package", { required: true, number: true }),
};
