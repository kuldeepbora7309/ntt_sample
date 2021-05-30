import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Row, Select } from "antd";
import { ButtonField } from "../../utils";
const { Option } = Select;
const LeasePackage = (props) => {
  let { getLeasePackageList, packageList } = props;
  let [duration, setDuration] = useState("all");
  let [term, setTerm] = useState("short");
  const leaseDurationList = {
    short: ["all", "monthly", "quarterly", "half yearly", "yearly"],
    long: ["all", 5, 10, 15, 20],
  };

  useEffect(() => {
    setDuration("all");
    getLeasePackageList("all", term);
  }, [term]);

  const packageListDurationHandler = (value) => {
    setDuration(value);
    getLeasePackageList(value, term);
  };
  const packageListTermHandler = (value) => {
    setDuration("all");
    setTerm(value);
    getLeasePackageList("all", value);
  };
  return (
    <>
      <h2>{`${term} term lease packages`}</h2>
      <Row gutter={16} style={{ marginTop: "10px" }}>
        <Col size={8}>
          <NavLink exact to={"/create-lease-package"}>
            <ButtonField type="primary">Add New Lease Package</ButtonField>
          </NavLink>
        </Col>
        <Col size={8}>
          <Select
            value={term}
            name="term"
            style={{ width: 120 }}
            onChange={packageListTermHandler}
          >
            <Option value="short">Short Term</Option>
            <Option value="long">Long Term</Option>
          </Select>
        </Col>
        <Col size={8}>
          <Select
            value={duration}
            name="duration"
            style={{ width: 120 }}
            onChange={packageListDurationHandler}
          >
            {leaseDurationList[term].map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={16}>
        {packageList &&
          packageList.length > 0 &&
          packageList.map((item, index) => (
            <Col
              xs={24}
              xl={8}
              sm={12}
              style={{ paddingTop: "10px" }}
              key={index}
            >
              <Card style={{ width: 300 }} bordered={true}>
                <>
                  <p>Rent Package: {item.rent_package} </p>
                  <p>Lease Duration: {item.lease_duration} </p>
                  <div>
                    <b>Attached Offices:</b>
                    {item.offices.map((officeObj, index) => (
                      <span key={index}>
                        <p>
                          {index + 1} ) Location: {officeObj.office.location}
                        </p>
                        <p>Space (Sqft): {officeObj.office.space}</p>
                        <p>Floor: {officeObj.office.floor}</p>
                      </span>
                    ))}
                  </div>
                </>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default LeasePackage;
