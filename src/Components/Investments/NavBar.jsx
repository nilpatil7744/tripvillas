import React from "react";
import style from "./NavBar.module.css";
export const NavBar = () => {
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
            <a href="">Sign In</a>
            <a href="#">Holiday Homes for Sale</a>
            <button>Host ?</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
