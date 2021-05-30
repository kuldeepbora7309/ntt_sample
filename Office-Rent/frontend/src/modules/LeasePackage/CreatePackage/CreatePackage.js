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
const CreatePackage = (props) => {
  let {
    leaseType,
    leaseDuration,
    rentPackage,
    officeListing,
    onFieldChange,
    addPackage,
    getOfficeList,
  } = props;

  useEffect(() => {
    getOfficeList();
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);
    onFieldChange(name, value);
  };

  const leaseTypeHandler = (value) => {
    onFieldChange("leaseType", value);
    onFieldChange("leaseDuration", "all");
  };

  const leaseDurationHandler = (value) => {
    onFieldChange("leaseDuration", value);
  };

  const leaseDurationList = {
    short: ["all", "monthly", "quarterly", "half yearly", "yearly"],
    long: ["all", 5, 10, 15, 20],
  };

  const [attachedOffice, setAttachedOffice] = useState([]);
  const [selectedOfficeArr, setSelectedOfficeArr] = useState([]);

  const selectOfficeHandler = (event) => {
    let officeId = event.target.value;
    let isExists = attachedOffice.find((item) => item.id === officeId);
    if (!isExists) {
      setAttachedOffice((preval) => {
        return [
          ...preval,
          {
            id: officeId,
          },
        ];
      });
      setSelectedOfficeArr((preval) => {
        return [...preval, officeId];
      });
    } else {
      let filteredAttachedOffice = attachedOffice.filter(
        (item) => item.id !== officeId
      );
      setAttachedOffice(filteredAttachedOffice);
      const officeIdIndex = selectedOfficeArr.indexOf(officeId);
      if (officeIdIndex > -1) {
        selectedOfficeArr.splice(officeIdIndex, 1);
      }
      setSelectedOfficeArr(selectedOfficeArr);
    }
  };

  const submitHandler = () => {
    onFieldChange("attachedOfficeList", attachedOffice);
    setAttachedOffice([]);
    setSelectedOfficeArr([]);
    addPackage();
  };
  return (
    <>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={12} sm={12}>
          <h3>Create New Package</h3>
        </ColField>
      </RowField>
      <RowField style={{ marginTop: "10px" }}>
        <ColField xs={24} xl={6} sm={12}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <Select
                  value={leaseType.value}
                  name="leaseType"
                  style={{ width: 250 }}
                  onChange={leaseTypeHandler}
                >
                  <Option value="short">Short Term</Option>
                  <Option value="long">Long Term</Option>
                </Select>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-6">
                <Select
                  value={leaseDuration.value}
                  name="leaseDuration"
                  style={{ width: 250 }}
                  onChange={leaseDurationHandler}
                >
                  {leaseDurationList[leaseType.value].map((item, index) => (
                    <Option key={index} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <TextField
                  style={{ width: 250 }}
                  {...rentPackage}
                  placeholder="Rent Package"
                  name="rentPackage"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ButtonField
                  type="primary"
                  htmlType="submit"
                  disabled={!rentPackage.isValid || !selectedOfficeArr.length}
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Save Package
                </ButtonField>
              </div>
            </div>
          </div>
        </ColField>
        <DividerField type="vertical" />
        <ColField xs={24} xl={16} sm={18}>
          <Card title="Attach Offices">
            {officeListing.map((item, index) => (
              <Card.Grid style={gridStyle} key={index}>
                <p>Location: {item.location}</p>
                <p>Space: {item.space}</p>
                <p>Floor: {item.floor}</p>
                <p>Rent : {item.rent}</p>
                <p style={{ marginBottom: "20px" }}>
                  <Checkbox value={item.id} onChange={selectOfficeHandler}>
                    <b>Select office</b>
                  </Checkbox>
                </p>
              </Card.Grid>
            ))}
          </Card>
        </ColField>
      </RowField>
    </>
  );
};

CreatePackage.propTypes = {
  addPackage: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  leaseType: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
  }).isRequired,
  leaseDuration: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
  }).isRequired,
  rentPackage: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
  }).isRequired,
};
export default CreatePackage;
