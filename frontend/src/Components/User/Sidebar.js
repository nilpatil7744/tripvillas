import React from "react";

import { FaCheck } from "react-icons/fa";

import { GrGroup } from "react-icons/gr";
import { BsStar } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";

import { BiDollar } from "react-icons/bi";

import { AiOutlineUnorderedList } from "react-icons/ai";

import { FaBuilding } from "react-icons/fa";

export const SidebarData = [
  {
    title: "My Properties",
    path: "/property",
    icon: <AiOutlineUnorderedList />,
    cName: "nav-text22",
  },
  {
    title: "Properties Sale",
    path: "/propertiesSale ",
    icon: <FaBuilding />,
    cName: "nav-text22",
  },
  {
    title: "Bookings",
    path: "/Booking",
    icon: <FaCheck />,
    cName: "nav-text22",
  },
  {
    title: "Payouts",
    path: "/team",
    icon: <BiDollar />,
    cName: "nav-text22",
  },
  {
    title: "Bank Accounts",
    path: "/bankaccounts",
    icon: <AiFillBank />,
    cName: "nav-text22",
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <BsStar />,
    cName: "nav-text22",
  },
  {
    title: "My Customer",
    path: "/cutomer",
    icon: <GrGroup />,
    cName: "nav-text22",
  },
  {
    title: "My Profile",
    path: "/profile",
    icon: <GrGroup />,
    cName: "nav-text22",
  },
];
