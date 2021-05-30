import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, userDetailFromToken } from "../../User/Auth/action";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import {
  Toast,
  ProgressBar,
  HeaderBlock,
  MenuBlock,
  MenuItemBlock,
} from "../../../utils";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const HeaderNav = (props) => {
  let { userDetail, logout, userDetailFromToken } = props;
  useEffect(() => {
    userDetailFromToken();
  }, []);
  console.log("userDetail", userDetail);

  return (
    <>
      <Toast />
      <ProgressBar />
      {userDetail && userDetail.user && userDetail.user.name && (
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <NavLink exact to="/">
                <span>Dashboard</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink exact to="/fund-transfer">
                <span>Fund Transfer</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink exact to="/change-pin">
                <span>Change ATM PIN</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink exact to="/withdrawal">
                <span>Withdrawal</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink exact to="/cash-deposit">
                <span>Cash Deposit</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="6" style={{ float: "right" }}>
              <span>
                {`Welcome ${userDetail.user.name}`} |
                <span onClick={logout} style={{ cursor: "pointer" }}>
                  Logout
                </span>
              </span>
            </Menu.Item>
          </Menu>
        </Header>
      )}
      {/* <span style={{ float: "right" }}>
        {`Welcome ${userDetail.user.name}`} |
        <span onClick={logout} style={{ cursor: "pointer" }}>
          Logout
        </span>
      </span> */}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  userDetail: state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout(ownProps)),
  userDetailFromToken: () => dispatch(userDetailFromToken(ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderNav)
);
