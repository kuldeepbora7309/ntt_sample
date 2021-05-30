import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../helpers";
import HeaderNav from "../modules/Common/layout/HeaderNav";
import FooterBar from "../modules/Common/layout/FooterBar";
import Error from "../modules/Error";
import Dashboard from "../modules/Dashboard";
import ChangePin from "../modules/User/ChangePin";
import FundTransfer from "../modules/User/FundTransfer";
import Withdrawal from "../modules/User/Withdrawal";
import Deposit from "../modules/User/Deposit";
///

import Login from "../modules/User/Auth";
import { LayoutBlock, ContentBlock } from "../utils";

const routes = () => (
  <BrowserRouter>
    <>
      <LayoutBlock className="layout">
        <HeaderNav />
        <ContentBlock style={{ padding: "0px 50px" }}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/change-pin" component={ChangePin} />
            <PrivateRoute exact path="/withdrawal" component={Withdrawal} />
            <PrivateRoute exact path="/cash-deposit" component={Deposit} />
            <PrivateRoute
              exact
              path="/fund-transfer"
              component={FundTransfer}
            />

            <Route exact path="/error" component={Error} />
            <Route path="*" exact={true} component={Error} />
          </Switch>
        </ContentBlock>
        <FooterBar />
      </LayoutBlock>
    </>
  </BrowserRouter>
);

export default routes;
