import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Select, Checkbox, Card } from "antd";
import {
  TextField,
  ButtonField,
  RowField,
  ColField,
  DividerField,
} from "../../../utils";
const { Option } = Select;
const gridStyle = {
  width: "50%",
  textAlign: "center",
};
const ChangePin = (props) => {
  let { changePin } = props;

  let [pinNumber, setPinNumber] = useState("");

  const handleChange = (event) => {
    setPinNumber(event.target.value);
  };

  const submitHandler = () => {
    changePin({
      pin: pinNumber,
    });
  };
  return (
    <>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={12} sm={12}>
          <h3>Change ATM PIN Number</h3>
        </ColField>
      </RowField>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={6} sm={12}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <TextField
                  style={{ width: 250 }}
                  name="pin_number"
                  placeholder="Enter New Pin"
                  value={pinNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ButtonField
                  type="primary"
                  htmlType="submit"
                  disabled={!pinNumber}
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Change
                </ButtonField>
              </div>
            </div>
          </div>
        </ColField>
      </RowField>
    </>
  );
};

export default ChangePin;
