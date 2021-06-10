import React from "react";
import { Route, Switch } from "react-router";
import { Register } from "../Components/Register/Register";
import { Home } from "../Components/Home/Home";
import { LogIn } from "../Components/LogIn/LogIn";
import { InvestmentsHome } from "../Components/Investments/InvestmentsHome";
import HolidayPage from "../Components/HolidayPageCity/HolidayPage";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new-register">
          <Register />
        </Route>
        <Route exact path="/new-login">
          <LogIn />
        </Route>
        <Route exact path="/holiday-home">
          <InvestmentsHome />
        </Route>
        <Route exact path="/holiday-homes/:username/:id">
          <HolidayPage />
        </Route>
        <Route exact path="/holiday-homes/:id">
          <HolidayPage />
        </Route>
        <Route exact path="/real-estate-unlock">
          <InvestmentsHome />
        </Route>

        <Route>404 PAGE NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export { Routes };
