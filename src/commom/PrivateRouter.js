import React from "react";
import { Redirect, Route, useHistory } from "react-router";
import { Checktoken } from "./Checktoken";

export default function PrivateRouter({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");

  const authen = Checktoken(token);

  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        return authen ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: history.location } }}
          />
        );
      }}
    />
  );
}
