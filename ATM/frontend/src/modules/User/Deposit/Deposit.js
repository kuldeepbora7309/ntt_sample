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
const Deposit = (props) => {
  let { cashDeposit } = props;

  let [depositAmount, setDepositAmount] = useState({
    currency_2000: 0,
    currency_500: 0,
    currency_200: 0,
    currency_100: 0,
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setDepositAmount((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitHandler = () => {
    let { currency_2000, currency_500, currency_200, currency_100 } =
      depositAmount;
    let cashAmount =
      2000 * currency_2000 +
      500 * currency_500 +
      200 * currency_200 +
      100 * currency_100;

    cashDeposit({
      cashAmount: cashAmount,
      breakupCurrencyData: depositAmount,
    });
  };
  return (
    <>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={12} sm={12}>
          <h3>Cash Deposit</h3>
        </ColField>
      </RowField>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={6} sm={12}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                2000X
                <TextField
                  style={{ width: 250 }}
                  name="currency_2000"
                  placeholder="2000 Currency"
                  value={depositAmount.currency_2000}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                500 X
                <TextField
                  style={{ width: 250 }}
                  name="currency_500"
                  placeholder="500 Currency"
                  value={depositAmount.currency_500}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                200 X
                <TextField
                  style={{ width: 250 }}
                  name="currency_200"
                  placeholder="200 Currency"
                  value={depositAmount.currency_200}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                100 X
                <TextField
                  style={{ width: 250 }}
                  name="currency_100"
                  placeholder="100 Currency"
                  value={depositAmount.currency_100}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ButtonField
                  type="primary"
                  htmlType="submit"
                  disabled={
                    depositAmount.currency_2000 === 0 &&
                    depositAmount.currency_500 === 0 &&
                    depositAmount.currency_200 === 0 &&
                    depositAmount.currency_100 === 0
                  }
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Deposite Cash
                </ButtonField>
              </div>
            </div>
          </div>
        </ColField>
      </RowField>
    </>
  );
};

export default Deposit;
