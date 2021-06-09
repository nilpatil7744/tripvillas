import React from "react";
import { Route, Switch } from "react-router";
import { Register } from "../Components/Register/Register";

import { LogIn } from "../Components/LogIn/LogIn";
function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/#"></Route>
        <Route exact path="/new-register">
          <Register />
        </Route>
        <Route exact path="/new-login">
          <LogIn />
        </Route>
        <Route>404 PAGE NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export { Routes };
