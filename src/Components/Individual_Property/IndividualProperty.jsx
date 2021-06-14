import React from "react";
import { NavBar } from "../Home_NavBar/NavBar";
import propertyStyles from "./IndividualProperty.module.css";
import { IndiPropPricing } from "./IndiPropPricing";
import { IndiPropBreadCrumb } from "./IndiPropBreadCrumb";
import { IndiPropPolicies } from "./IndiPropPolicies";
import { IndiPropMap } from "./IndiPropMap";
import { AmenitiesBox } from "./AmenitiesBox";
import { IndiPropOverview } from "./IndiPropOverview";
import { IndiPropToggleMenu } from "./IndiPropToggleMenu";
import { IndiPropTitle } from "./IndiPropTitle";

export const IndividualProperty = () => {
  return (
    <div>
      <NavBar />
      <div className={propertyStyles.individualPropMainFlexDiv674}>
        <div>
          <IndiPropBreadCrumb />
          <IndiPropTitle />
          <IndiPropToggleMenu />
          <IndiPropOverview />
          <AmenitiesBox />
          <IndiPropMap />
          <IndiPropPolicies />
        </div>
        <IndiPropPricing />
      </div>
    </div>
  );
};
