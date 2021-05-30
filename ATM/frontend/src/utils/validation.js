export const customValidation = (value, fieldName, validationConfig) => {
  let response = validationResponse();
  let isValid = true;
  if (
    response.isValid === true &&
    hasOwnProperty(validationConfig, "required")
  ) {
    isValid = value !== "";
    response = validationResponse(isValid, `${fieldName} should not be empty`);
  }
  if (response.isValid === true && hasOwnProperty(validationConfig, "number")) {
    isValid = /^\d*$/g.test(value);
    response = validationResponse(
      isValid,
      `${fieldName} should be in number format`
    );
  }

  if (
    response.isValid === true &&
    hasOwnProperty(validationConfig, "minLength")
  ) {
    isValid = value.length < validationConfig.minLength ? false : true;
    response = validationResponse(
      isValid,
      `${fieldName} min length should be at least ${validationConfig.minLength} `
    );
  }
  if (
    response.isValid === true &&
    hasOwnProperty(validationConfig, "maxLength")
  ) {
    isValid = value.length > validationConfig.maxLength ? false : true;
    response = validationResponse(
      isValid,
      `${fieldName} max length should be  ${validationConfig.maxLength} `
    );
  }
  return response;
};

const validationResponse = (status = true, message = null) => {
  if (status) {
    message = null;
  }
  return {
    isValid: status,
    message: message,
  };
};

const hasOwnProperty = (object, prop) =>
  Object.prototype.hasOwnProperty.call(object, prop);
