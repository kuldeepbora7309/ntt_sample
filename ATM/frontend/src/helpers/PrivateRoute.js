import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../helpers/store";
import { forceLogout } from "../modules/User/Auth/action";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let routePermission = true;
  let savedToken = localStorage.getItem("token");
  if (savedToken === undefined) {
    routePermission = false;
  }

  if (!routePermission) {
    store.dispatch(forceLogout());
  }

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          routePermission ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};
