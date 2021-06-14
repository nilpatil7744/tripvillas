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
    path: "/",
    icon: <AiOutlineUnorderedList />,
    cName: "nav-text22",
  },
  {
    title: "Properties Sale",
    path: "/reports",
    icon: <FaBuilding />,
    cName: "nav-text22",
  },
  {
    title: "Bookings",
    path: "/Bookings",
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
    path: "/messages",
    icon: <AiFillBank />,
    cName: "nav-text22",
  },
  {
    title: "Reviews",
    path: "/support",
    icon: <BsStar />,
    cName: "nav-text22",
  },
  {
    title: "My Customer",
    path: "/support",
    icon: <GrGroup />,
    cName: "nav-text22",
  },
  {
    title: "My Profile",
    path: "/support",
    icon: <GrGroup />,
    cName: "nav-text22",
  },
];
