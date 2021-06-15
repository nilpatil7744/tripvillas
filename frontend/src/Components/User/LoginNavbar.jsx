import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, Redirect } from "react-router-dom";
import { SidebarData } from "./Sidebar";
import { FaUserFriends } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./LoginNavbar.css";
import { useSelector } from "react-redux";
const SidebarPrivate = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const togg = useSelector((state) => state.login.isAuth);

  const useremail = useSelector((state) => state.login.email);

  return togg ? (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar223">
          <Link to="#" className="menu-bars123">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/">
            <img
              style={{ height: "25px", backgroundColor: "black" }}
              src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png"
              alt="TripVillas"
            />
          </Link>

          <HiOutlineLogout
            size="30px"
            color="whitesmoke"
            style={{ marginLeft: "80%" }}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-text1">
              <FaUserFriends />
              {useremail}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <div>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}

                      <span>{item.title}</span>
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  ) : (
    <Redirect to="/new-login" />
  );
};

export { SidebarPrivate };
