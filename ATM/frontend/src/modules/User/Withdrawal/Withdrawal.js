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
const Withdrawal = (props) => {
  let { withdrawal } = props;

  let [withdrawalAmount, setWithdrawalAmount] = useState("");

  const handleChange = (event) => {
    setWithdrawalAmount(event.target.value);
  };

  const submitHandler = () => {
    withdrawal({
      withdrawalAmount: withdrawalAmount,
    });
  };
  return (
    <>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={12} sm={12}>
          <h3>Withdrawal Amount</h3>
        </ColField>
      </RowField>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={6} sm={12}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <TextField
                  style={{ width: 250 }}
                  name="withdrawalAmount"
                  placeholder="Enter Amount For Withdrawal"
                  value={withdrawalAmount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ButtonField
                  type="primary"
                  htmlType="submit"
                  disabled={!withdrawalAmount}
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Withdrawal
                </ButtonField>
              </div>
            </div>
          </div>
        </ColField>
      </RowField>
    </>
  );
};

export default Withdrawal;
