import React from "react";
import { NavBar } from "../Home_NavBar/NavBar";
import { HomeSearch } from "./Home_Search/HomeSearch";
import { Carasol } from "../Carasol/Carasol";
import Property from "../ExpolrePage/Property";

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
