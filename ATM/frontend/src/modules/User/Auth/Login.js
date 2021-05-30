import React from "react";
import PropTypes from "prop-types";
import { TextField, FormField, ButtonField } from "../../../utils";

const Login = ({
  loginUser,
  account,
  otp,
  onFieldChange,
  generateOtpNumber,
}) => {
  const handleChange = (event) => {
    let { name, value } = event.target;
    onFieldChange(name, value);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FormField className="form-box">
          <div className="form-container">
            <TextField
              {...account}
              name="account"
              placeholder="Enter Account Number"
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <TextField
              {...otp}
              name="otp"
              placeholder="Enter Otp"
              onChange={handleChange}
            />
            {account.value && <a onClick={generateOtpNumber}>Send OTP</a>}
          </div>
          <div>
            <ButtonField
              type="primary"
              disabled={!account.isValid || !otp.isValid}
              className="btn btn-primary"
              onClick={loginUser}
            >
              Log in
            </ButtonField>
          </div>
        </FormField>
      </div>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  account: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
  }).isRequired,
  otp: PropTypes.shape({
    value: PropTypes.number,
    isValid: PropTypes.bool,
  }).isRequired,
};

export default Login;
