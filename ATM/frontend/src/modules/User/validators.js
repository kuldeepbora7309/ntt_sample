import { customValidation } from "./../../utils";

export const validateField = {
  account: (value) =>
    customValidation(value, "account", { required: true, number: true }),
  otp: (value) =>
    customValidation(value, "OTP", { required: true, number: true }),
};
