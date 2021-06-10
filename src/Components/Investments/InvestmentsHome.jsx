import React from "react";
import { Footer } from "./Footer";
import { InvestmentBody } from "./InvestmentBody";
import { NavBar } from "./NavBar";

export const InvestmentsHome = () => {
  return (
    <div>
      <NavBar />
      <InvestmentBody />
      <Footer />
    </div>
  );
};
