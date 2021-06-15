import { Link } from "react-router-dom";
import React, { useState } from "react";
import style from "./NavBar.module.css";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const [user, setUser] = useState("");
  const togg = useSelector((state) => state.login.email);

  const { isAuth, username } = useSelector((state) => state.login);

  console.log(username, togg, isAuth, "nil");

  const togg2 = () => {
    var nil = "";
    for (var i = 0; i < togg.length - 10; i++) {
      console.log(togg[i]);
      nil += togg[i];
    }
    return nil;
  };

  console.log(togg2);
  return (
    <header className={style.main_header}>
      <div className={style.top_bar}>
        <a href="/" className={style.logo}>
          <img
            src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo-teal.450ffb75ec3e.png"
            alt="Tripvillas"
            title="Tripvillas"
          ></img>
        </a>
      </div>
      <div className={style.top_bar_right}>
        <ul>
          <li>
            {isAuth ? (
              <a>{togg2()}</a>
            ) : (
              <Link to="/new-login">
                <a href>Sign In</a>
              </Link>
            )}

            <a href>Holiday Homes for Sale</a>
            <button>Host ? {user}</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
