import React from "react";
import { Route, Switch } from "react-router";
import { Register } from "../Components/Register/Register";
import { Home } from "../Components/Home/Home";
import { LogIn } from "../Components/LogIn/LogIn";
import { IndividualProperty } from "../Components/Individual_Property/IndividualProperty";
import { InvestmentsHome } from "../Components/Investments/InvestmentsHome";
import HolidayPage from "../Components/HolidayPageCity/HolidayPage";
import { Unlock } from "../Components/RealEstateUnlock/Unlock";
import { SidebarPrivate } from "../Components/User/LoginNavbar";
import MapLocation from "../Components/HolidayPageCity/MapLocation";
import PaymentPage from "../Components/Payment/PaymentPage";
import { Properties } from "../Components/User/Dashboard/Properties";
import { NavBar } from "../Components/Home_NavBar/NavBar";
import { PropertiesSale } from "../Components/User/Dashboard/PropertiesSale";
import { Bookings } from "../Components/User/Dashboard/Bookings";
import { Payouts } from "../Components/User/Dashboard/Payouts";
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

        {/* <Route exact path="/hotels/:id">
          <IndividualProperty />
        </Route> */}
        <Route exact path="/holiday-home">
          <InvestmentsHome />
        </Route>
        <Route exact path="/holiday-homes/:id">
          <HolidayPage />
        </Route>
        <Route exact path="/:id/alor">
          <IndividualProperty />
        </Route>
        <Route exact path="/real-estate-unlock">
          <InvestmentsHome />
        </Route>
        <Route exact path="/unlock">
          <Unlock />
        </Route>
        <Route exact path="/search">
          <MapLocation />
        </Route>
        <Route exact path="/new-dashboard">
          <SidebarPrivate />
        </Route>
        <Route exact path="/:id/payment">
          <PaymentPage />
        </Route>
        <Route exact path="/property">
          <SidebarPrivate />
          <Properties />
        </Route>
        <Route exact path="/propertiesSale ">
          <SidebarPrivate />
          <PropertiesSale />
        </Route>
        <Route exact path="/Booking">
          <SidebarPrivate />
          <Bookings />
        </Route>
        <Route exact path="/property">
          <SidebarPrivate />
          <Properties />
        </Route>
        <Route exact path="/team">
          <SidebarPrivate />
          <Payouts />
        </Route>
        <Route exact path="/bankaccounts">
          <SidebarPrivate />
          <Properties />
        </Route>
        <Route exact path="/reviews">
          <SidebarPrivate />
          <Properties />
        </Route>
        <Route exact path="/messages">
          <SidebarPrivate />
          <Properties />
        </Route>
        <Route exact path="/messages">
          <SidebarPrivate />
          <Properties />
        </Route>
        <Route>404 PAGE NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export { Routes };
