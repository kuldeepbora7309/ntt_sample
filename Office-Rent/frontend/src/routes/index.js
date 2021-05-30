import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderNav from "../modules/Common/layout/HeaderNav";
import FooterBar from "../modules/Common/layout/FooterBar";
import Error from "../modules/Error";
import Dashboard from "../modules/Dashboard";
import OfficeDetail from "../modules/OfficeDetail";
import LeasePackage from "../modules/LeasePackage";
import CreatePackage from "../modules/LeasePackage/CreatePackage";
import { LayoutBlock, ContentBlock } from "../utils";

const routes = () => (
  <BrowserRouter>
    <>
      <LayoutBlock className="layout">
        <HeaderNav />
        <ContentBlock style={{ padding: "0px 50px" }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/office-detail/:id" component={OfficeDetail} />
            <Route exact path="/lease-package" component={LeasePackage} />
            <Route
              exact
              path="/create-lease-package"
              component={CreatePackage}
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
