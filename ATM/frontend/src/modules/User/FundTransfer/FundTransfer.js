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
const FundTransfer = (props) => {
  let { fundTransfer, beneficiaryList, beneficiaryUserList } = props;
  useEffect(() => {
    beneficiaryList();
  }, []);
  console.log("beneficiaryUserList", beneficiaryUserList);

  let [fundTransferData, setFundTransferData] = useState({
    beneficiaryId: null,
    transferAmount: null,
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFundTransferData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const beneficiaryChangeHandler = (value) => {
    setFundTransferData((preval) => {
      return {
        ...preval,
        beneficiaryId: value,
      };
    });
  };

  console.log("fundTransferData", fundTransferData);
  const submitHandler = () => {
    fundTransfer(fundTransferData);
  };

  return (
    <>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={12} sm={12}>
          <h3>Fund Transfer</h3>
        </ColField>
      </RowField>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={6} sm={12}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <Select
                  value={fundTransferData.beneficiaryId}
                  name="beneficiaryId"
                  style={{ width: 250 }}
                  onChange={beneficiaryChangeHandler}
                >
                  {beneficiaryUserList.map((item, index) => (
                    <Option key={index} value={item.id}>
                      {item.name} Balance ({item.current_balance} INR)
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <TextField
                  style={{ width: 250 }}
                  name="transferAmount"
                  placeholder="Enter Amount in multiply of 100"
                  value={fundTransferData.transferAmount}
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
                    !fundTransferData.transferAmount ||
                    !fundTransferData.beneficiaryId
                  }
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Transfer
                </ButtonField>
              </div>
            </div>
          </div>
        </ColField>
      </RowField>
    </>
  );
};

export default FundTransfer;
