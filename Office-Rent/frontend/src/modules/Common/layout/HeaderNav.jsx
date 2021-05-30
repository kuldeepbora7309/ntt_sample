import React from "react";
import { NavLink } from "react-router-dom";

import {
  Toast,
  ProgressBar,
  HeaderBlock,
  MenuBlock,
  MenuItemBlock,
} from "../../../utils";

const HeaderNav = (props) => {
  return (
    <>
      <Toast />
      <ProgressBar />

      <HeaderBlock>
        <MenuBlock theme="dark" mode="horizontal">
          <MenuItemBlock>
            <NavLink exact to="/">
              <span>Dashboard</span>
            </NavLink>
          </MenuItemBlock>
          <MenuItemBlock>
            <NavLink exact to="/lease-package">
              <span>Lease Package</span>
            </NavLink>
          </MenuItemBlock>
        </MenuBlock>
      </HeaderBlock>
    </>
  );
};

export default HeaderNav;
