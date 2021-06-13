import React from "react";
import { NavBar } from "../Home_NavBar/NavBar";
import { HomeSearch } from "./Home_Search/HomeSearch";

import Property from "../ExpolrePage/Property";
import { Carasol } from "../../Components/Carasol/Carasol.jsx";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeSearch />
      <Carasol />

      <Property />
      <Carasol />
    </div>
  );
};
