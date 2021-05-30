import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Row } from "antd";

const Dashboard = (props) => {
  let { userBalance, atmBalance, getDashboardList, atmCurrencyStatus } = props;
  useEffect(() => {
    getDashboardList();
  }, []);
  return (
    <>
      <Row gutter={16} style={{ marginTop: "10px" }}>
        <Col span={8}>
          <Card title="Account Balance" bordered={false}>
            {userBalance} INR
          </Card>
        </Col>
        <Col span={8}>
          <Card title="ATM Balance" bordered={false}>
            {atmBalance} INR
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Change ATM PIN" bordered={false}>
            <NavLink exact to={"/change-pin"}>
              Click Here
            </NavLink>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "10px" }}>
        <Col span={8}>
          <Card title="Fund Transfer" bordered={false}>
            <NavLink exact to={"/fund-transfer"}>
              Click Here
            </NavLink>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Withdrawal" bordered={false}>
            <NavLink exact to={"/withdrawal"}>
              Click Here
            </NavLink>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Cash Deposit" bordered={false}>
            <NavLink exact to={"/cash-deposit"}>
              Click Here
            </NavLink>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "10px" }}>
        <Col span={24}>
          <Card title="ATM Currency Status" bordered={false}>
            <p>2000 Currency X {atmCurrencyStatus.currency_2000}</p>
            <p>500 Currency X {atmCurrencyStatus.currency_500}</p>
            <p>200 Currency X {atmCurrencyStatus.currency_200}</p>
            <p>100 Currency X {atmCurrencyStatus.currency_100}</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
